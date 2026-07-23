import { LANGUAGE_MENU, TRANSLATIONS } from '../config/menus.js';
import { getSession, updateSession, clearSession } from '../services/session.js';
import { saveLead } from '../services/lead.js';

/**
 * Main handler for incoming WhatsApp messages.
 * Implements a state-machine multilingual chatbot.
 * @param {import('whatsapp-web.js').Message} message 
 */
export async function handleMessage(message, client) {
    const phone = message.from;

    // Ignore group messages (group chat JIDs end with @g.us)
    if (phone.endsWith('@g.us')) {
        return;
    }

    const session = getSession(phone);
    const body = message.body ? message.body.trim() : '';
    const bodyLower = body.toLowerCase();

    // Check for explicit reset triggers (always active)
    const explicitReset = bodyLower === 'reset' || bodyLower === 'menu';

    // Check for greeting wake-up triggers (only active if session is not in middle of form)
    const isInactive = session.state === 'WELCOME' || session.state === 'SELECT_LANGUAGE';
    const greetingRegex = /\b(hi+|hello+|hey+|namaste|नमस्कार|नमस्ते|vaishnav)\b/i;
    const isGreeting = isInactive && greetingRegex.test(bodyLower);

    if (explicitReset || isGreeting) {
        clearSession(phone);
        await message.reply(LANGUAGE_MENU);
        updateSession(phone, { state: 'SELECT_LANGUAGE' });
        return;
    }
    const lang = session.language || 'en';
    const trans = TRANSLATIONS[lang];

    console.log(`[Chatbot] Phone: ${phone} | Lang: ${lang} | State: ${session.state} | Message: "${body}"`);

    // Handle initial greeting / inactive session states
    if (session.state === 'WELCOME') {
        // Check if the user is sending a thank you message
        let isThankYou = false;
        let matchedLang = 'en';

        for (const l of ['en', 'mr', 'hi']) {
            const replies = TRANSLATIONS[l].thankYouReplies;
            if (replies.some(reply => bodyLower.includes(reply))) {
                isThankYou = true;
                matchedLang = l;
                break;
            }
        }

        if (isThankYou) {
            await message.reply(TRANSLATIONS[matchedLang].thankYouResponse);
        } else {
            // Fallback response for arbitrary inputs when no session is active
            await message.reply(trans.fallbackResponse);
        }
        return;
    }

    switch (session.state) {
        case 'SELECT_LANGUAGE': {
            const choice = parseInt(body);
            if (isNaN(choice) || choice < 1 || choice > 3) {
                // Repeat language menu if selection is invalid
                await message.reply(`⚠️ Invalid choice. Please reply with 1, 2, or 3.\n\n${LANGUAGE_MENU}`);
                return;
            }

            // Map and store language choice
            const selectedLang = choice === 1 ? 'en' : choice === 2 ? 'mr' : 'hi';
            const localizedTrans = TRANSLATIONS[selectedLang];

            await message.reply(localizedTrans.mainMenu);
            updateSession(phone, {
                state: 'MAIN_MENU',
                language: selectedLang
            });
            break;
        }

        case 'MAIN_MENU': {
            const option = parseInt(body);
            if (isNaN(option) || option < 1 || option > 10) {
                await message.reply(`${trans.invalidMenuOption}\n\n${trans.mainMenu}`);
                return;
            }

            if (option === 10) {
                // Contact Vaishnav option
                const service = trans.services[10];
                await message.reply(service.menuText);
                await message.reply(service.subOptions.default.question);
                updateSession(phone, {
                    state: 'COLLECTING_SPECIFIC_DETAILS',
                    serviceId: 10,
                    subOptionId: 'default'
                });
            } else {
                // Service options 1-9
                const service = trans.services[option];
                await message.reply(service.menuText);
                updateSession(phone, {
                    state: 'SUBMENU_SELECT',
                    serviceId: option
                });
            }
            break;
        }

        case 'SUBMENU_SELECT': {
            const subOption = parseInt(body);
            const service = trans.services[session.serviceId];

            if (!service) {
                // Recovery fallback
                clearSession(phone);
                await message.reply(LANGUAGE_MENU);
                updateSession(phone, { state: 'SELECT_LANGUAGE' });
                return;
            }

            // Select matching sub-option configurations
            const optionConfig = service.subOptions[subOption];

            if (!optionConfig) {
                await message.reply(trans.invalidSubOption);
                return;
            }

            // Ask specific requirement details
            await message.reply(optionConfig.question);
            updateSession(phone, {
                state: 'COLLECTING_SPECIFIC_DETAILS',
                subOptionId: subOption
            });
            break;
        }

        case 'COLLECTING_SPECIFIC_DETAILS': {
            const specificDetails = body;

            // Handle Contact Vaishnav (Service 10) Yes/No response
            if (session.serviceId === 10) {
                const yesTriggers = ['yes', 'y', 'हो', 'होय', 'हाँ', 'हा', 'जी', 'ji'];
                const matchesYes = yesTriggers.some(trigger => bodyLower.startsWith(trigger) || bodyLower.includes(trigger));

                if (matchesYes) {
                    const firstStep = trans.leadSteps[0];
                    await message.reply(firstStep.prompt);
                    updateSession(phone, {
                        specificDetails: 'Requested callback/email via Contact details option',
                        state: 'COLLECTING_LEAD_DATA',
                        currentLeadStepIndex: 0,
                        leadData: {}
                    });
                } else {
                    await message.reply(trans.callbackExitMsg);
                    clearSession(phone);
                }
                return;
            }

            // Transition to lead details collection
            const firstStep = trans.leadSteps[0];
            await message.reply(firstStep.prompt);
            updateSession(phone, {
                specificDetails,
                state: 'COLLECTING_LEAD_DATA',
                currentLeadStepIndex: 0,
                leadData: {}
            });
            break;
        }

        case 'COLLECTING_LEAD_DATA': {
            const currentStepIndex = session.currentLeadStepIndex;
            const currentStep = trans.leadSteps[currentStepIndex];

            // Store current input
            const leadData = { ...session.leadData, [currentStep.key]: body };

            const nextStepIndex = currentStepIndex + 1;
            if (nextStepIndex < trans.leadSteps.length) {
                // Send next lead capture prompt
                const nextStep = trans.leadSteps[nextStepIndex];
                await message.reply(nextStep.prompt);
                updateSession(phone, {
                    leadData,
                    currentLeadStepIndex: nextStepIndex
                });
            } else {
                // Finished collecting lead details: format payload and save it in English format for CRM consistency
                const serviceEn = TRANSLATIONS.en.services[session.serviceId];
                const subOptionEn = serviceEn.subOptions[session.subOptionId];

                const leadPayload = {
                    phone,
                    language: lang,
                    service: serviceEn.name,
                    subService: subOptionEn.name,
                    specificDetails: session.specificDetails,
                    leadInfo: leadData
                };

                saveLead(leadPayload);

                // Send real-time lead notification to Vaishnav (the bot host)
                if (client && client.info && client.info.wid) {
                    const hostJid = client.info.wid._serialized;
                    const notificationMsg = `🔔 *New Lead Captured!*

📋 *Details:*
• *Service:* ${serviceEn.name} (${subOptionEn.name})
• *Language:* ${lang.toUpperCase()}
• *Client Phone:* +${phone.split('@')[0]}

👤 *Name:* ${leadData.name}
🏢 *Company:* ${leadData.company}
💰 *Budget:* ${leadData.budget}

Please review and contact them accordingly. 🚀`;

                    try {
                        await client.sendMessage(hostJid, notificationMsg);
                        console.log(`[Notification] Forwarded lead details to bot owner: ${hostJid}`);
                    } catch (notificationErr) {
                        console.error('[Error] Failed to send lead notification to owner:', notificationErr);
                    }
                }

                // Send confirmation in the user's selected language
                const service = trans.services[session.serviceId];
                const subService = service.subOptions[session.subOptionId];
                const confirmationMsg = trans.confirmationMessage(service, subService, leadData);

                await message.reply(confirmationMsg);
                clearSession(phone);
            }
            break;
        }

        default: {
            // Safety fallback: reset session
            clearSession(phone);
            await message.reply(LANGUAGE_MENU);
            updateSession(phone, { state: 'SELECT_LANGUAGE' });
            break;
        }
    }
}
