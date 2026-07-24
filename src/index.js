import fs from 'fs';
import path from 'path';
import http from 'http';
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth, Events } = pkg;

// Monkey-patch _registerFramenavigatedHandler to catch "Execution context was destroyed" errors during navigation
Client.prototype._registerFramenavigatedHandler = function() {
    if (this._framenavigatedRegistered) return;
    this._framenavigatedRegistered = true;

    this.pupPage.on('framenavigated', async (frame) => {
        if (frame.parentFrame() !== null) return;

        try {
            const isLogout =
                frame.url().includes('post_logout=1') || this.lastLoggedOut;

            if (isLogout) {
                this.emit(Events.DISCONNECTED, 'LOGOUT');
                await this.authStrategy.logout();
                await this.authStrategy.beforeBrowserInitialized();
                await this.authStrategy.afterBrowserInitialized();
                this.lastLoggedOut = false;
            }

            const storeAvailable = await this.pupPage.evaluate(() => {
                return typeof window.WWebJS !== 'undefined';
            }).catch(() => false);

            if (!isLogout && storeAvailable) return;

            await this.inject();
        } catch (err) {
            if (!err.message.includes('Execution context was destroyed') && !err.message.includes('Navigating')) {
                console.error('[Warning] Error in framenavigated handler:', err);
            }
        }
    });
};
import qrcode from 'qrcode-terminal';
import { handleMessage } from './handlers/message.js';

// Locate local Chrome executable on Windows
const getChromePath = () => {
    const paths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        path.join(process.env.USERPROFILE || '', 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe')
    ];
    for (const p of paths) {
        if (fs.existsSync(p)) {
            return p;
        }
    }
    return null;
};

const chromePath = process.env.PUPPETEER_EXECUTABLE_PATH || getChromePath();
if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    console.log(`[System] Using Puppeteer executable path from env: ${chromePath}`);
} else if (!chromePath) {
    console.warn('[Warning] Google Chrome was not found in standard installation paths. whatsapp-web.js might fail to launch if Puppeteer chromium download is missing.');
} else {
    console.log(`[System] Found Google Chrome at: ${chromePath}`);
}

// Initialize the WhatsApp Client
const client = new Client({
    authStrategy: new LocalAuth(),
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/{version}.html',
        strict: false
    },
    puppeteer: {
        headless: true, // Run in background
        handleSIGINT: false,
        executablePath: chromePath || undefined,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--no-first-run',
            '--no-zygote',
            '--disable-extensions',
            '--disable-audio-output',        // Disable audio process
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',            // Disable crash reporting
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-domain-reliability',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-speech-api',
            '--disable-sync',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-pings',
            '--password-store=basic',
            '--use-gl=swiftshader'
        ]
    }
});

// Event listener for QR code generation (needed for scanning)
client.on('qr', (qr) => {
    console.log('\n==================================================================');
    console.log('SCAN THIS QR CODE WITH YOUR WHATSAPP APP TO LINK YOUR ACCOUNT:');
    console.log('==================================================================\n');
    qrcode.generate(qr, { small: true });
});

// Event listener for successful authentication
client.on('authenticated', () => {
    console.log('[Auth] Authentication successful!');
});

// Event listener for client ready state
client.on('ready', () => {
    console.log('\n==================================================================');
    console.log('WHATSAPP BOT IS READY AND LISTENING FOR MESSAGES!');
    console.log('==================================================================\n');
});

// Track message IDs sent by the bot to prevent infinite loops in self-chat
const sentMessageIds = new Set();

// Event listener for all message events (sent and received)
client.on('message_create', async (message) => {
    // Ignore status updates
    if (message.isStatus) return;

    const myJid = client.info?.wid?._serialized;
    const bodyText = message.body ? message.body.slice(0, 30) : '';
    console.log(`[Debug] message_create event: fromMe=${message.fromMe} | from=${message.from} | to=${message.to} | myJid=${myJid || 'null'} | text="${bodyText}"`);

    // Ignore messages sent by the bot itself
    if (sentMessageIds.has(message.id.id)) {
        console.log(`[Debug] Ignored: Message was sent by the bot itself (ID: ${message.id.id})`);
        sentMessageIds.delete(message.id.id);
        return;
    }

    // Ignore group chats
    if (message.from.endsWith('@g.us')) {
        console.log(`[Debug] Ignored: Group chat message`);
        return;
    }

    // If the message is fromMe, only process it if it was sent to ourselves (Self-chat testing)
    if (message.fromMe) {
        if (!myJid) {
            console.log(`[Debug] Ignored: message fromMe, but myJid JID is not loaded yet`);
            return;
        }
        if (message.to !== myJid) {
            console.log(`[Debug] Ignored: message fromMe to another contact (${message.to})`);
            return;
        }
    }

    // Wrap the message.reply function to automatically track the reply's ID and simulate human typing
    const originalReply = message.reply;
    message.reply = async function(text, ...args) {
        try {
            const chat = await message.getChat().catch(() => null);
            if (chat) {
                // Show "typing..." state
                await chat.sendStateTyping().catch(() => {});
                
                // Calculate dynamic human-like typing delay (e.g. 25ms per character, min 800ms, max 3000ms)
                const charCount = typeof text === 'string' ? text.length : 50;
                const delay = Math.min(Math.max(charCount * 25, 800), 3000);
                await new Promise(resolve => setTimeout(resolve, delay));
            }

            const sent = await originalReply.call(this, text, ...args);

            if (chat) {
                // Stop showing "typing..." state
                await chat.clearState().catch(() => {});
            }

            if (sent && sent.id) {
                sentMessageIds.add(sent.id.id);
            }
            return sent;
        } catch (err) {
            console.error('[Error] Failed to reply to message:', err);
        }
    };

    try {
        await handleMessage(message, client);
    } catch (err) {
        console.error('[Error] Error handling message:', err);
    }
});

// Initialize client
console.log('[System] Initializing WhatsApp client...');
client.initialize().catch((err) => {
    console.error('[Error] Failed to initialize client:', err);
});

// Create a basic HTTP server to satisfy Render's port-binding health-check
const port = process.env.PORT || 10000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WhatsApp Bot is running...\n');
});
server.listen(port, '0.0.0.0', () => {
    console.log(`[System] Web server listening on port ${port}`);
});
