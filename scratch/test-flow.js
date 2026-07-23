import { handleMessage } from '../src/handlers/message.js';
import fs from 'fs';
import path from 'path';

const sessionsPath = path.join(process.cwd(), 'sessions.json');
const leadsPath = path.join(process.cwd(), 'leads.json');

// Helper to clean files
const cleanFiles = () => {
    if (fs.existsSync(sessionsPath)) fs.unlinkSync(sessionsPath);
    if (fs.existsSync(leadsPath)) fs.unlinkSync(leadsPath);
};

// Helper to mock WhatsApp message
const createMockMessage = (phone, body) => {
    return {
        from: phone,
        body,
        reply: async (text) => {
            console.log(`\n🤖 Bot Reply [to: ${phone}]:\n--------------------------------------------------\n${text}\n--------------------------------------------------`);
        }
    };
};

// Mock WhatsApp Client
const mockClient = {
    info: {
        wid: {
            _serialized: 'vaishnav_host@c.us'
        }
    },
    sendMessage: async (to, text) => {
        console.log(`\n🔔 REAL-TIME LEAD NOTIFICATION FORWARDED TO VAISHNAV'S PHONE (${to}):\n--------------------------------------------------\n${text}\n--------------------------------------------------`);
    }
};

const runTests = async () => {
    console.log('🚀 Running Multilingual & Submenu Fix Chatbot Simulation Tests...');

    // =========================================================================
    // TEST 1: Fallback message for arbitrary text when inactive
    // =========================================================================
    console.log('\n=== TEST 1: Fallback Response for Arbitrary Input (Inactive Session) ===');
    cleanFiles();
    await handleMessage(createMockMessage('user1@c.us', 'Can you give me a status update?'), mockClient);

    // =========================================================================
    // TEST 2: Thank you response when inactive
    // =========================================================================
    console.log('\n=== TEST 2: Thank You Response (Inactive Session) ===');
    cleanFiles();
    await handleMessage(createMockMessage('user1@c.us', 'thank you very much!'), mockClient);

    // =========================================================================
    // TEST 3: English Flow - Selecting Option 6 (WhatsApp Bot) -> Option 1 (Personal WhatsApp Bot)
    // This specifically tests the fix for the "Personal Bot" invalid option bug and verifies lead notifications.
    // =========================================================================
    console.log('\n=== TEST 3: English Flow (WhatsApp Bot -> Personal Bot) ===');
    cleanFiles();
    const enInputs = [
        'Hii',                       // 1. Language screen trigger (Testing 'Hii')
        '1',                           // 2. Select English
        '6',                           // 3. Choose WhatsApp Bot Development (Option 6)
        '1',                           // 4. Choose Personal WhatsApp Bot (Option 1) -> SHOULD NOW BE VALID!
        'Need to auto reply to friends', // 5. Provide specific details
        'Vaishnav Developer',          // 6. Name
        'LeopardX Tech',               // 7. Company
        '₹20,000'                      // 8. Budget
    ];
    for (const input of enInputs) {
        console.log(`\n👤 User: "${input}"`);
        await handleMessage(createMockMessage('english_user@c.us', input), mockClient);
    }

    // =========================================================================
    // TEST 4: Marathi Flow - Selecting Option 1 (Web Dev) -> Option 2 (E-Commerce)
    // =========================================================================
    console.log('\n=== TEST 4: Marathi Flow (Web Dev -> E-Commerce) ===');
    cleanFiles();
    const mrInputs = [
        'Hello vaishnav i am John',    // 1. Language screen (Testing 'Hello vaishnav')
        '2',                           // 2. Select Marathi
        '1',                           // 3. वेब डेव्हलपमेंट निवडा (Option 1)
        '2',                           // 4. ई-कॉमर्स वेबसाईट निवडा (Option 2)
        '५० प्रॉडक्ट्स, होय, नाही',    // 5. Specific details
        'ज्ञानेश्वर पाटील',            // 6. नाव
        'पाटील ट्रेडिंग',              // 7. कंपनी
        '₹५०,०००'                      // 8. बजेट
    ];
    for (const input of mrInputs) {
        console.log(`\n👤 User (Marathi): "${input}"`);
        await handleMessage(createMockMessage('marathi_user@c.us', input), mockClient);
    }

    // =========================================================================
    // TEST 5: Verify Saved Leads
    // =========================================================================
    console.log('\n==================================================');
    console.log('📂 Verifying Saved Leads in leads.json:');
    console.log('==================================================');
    if (fs.existsSync(leadsPath)) {
        console.log(fs.readFileSync(leadsPath, 'utf8'));
    } else {
        console.error('❌ Error: leads.json was not created!');
    }
};

runTests().catch(console.error);
