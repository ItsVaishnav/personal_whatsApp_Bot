import fs from 'fs';
import path from 'path';

const SESSION_FILE = path.join(process.cwd(), 'sessions.json');

// Helper to load all active sessions from sessions.json
const loadSessions = () => {
    try {
        if (fs.existsSync(SESSION_FILE)) {
            const data = fs.readFileSync(SESSION_FILE, 'utf8');
            return JSON.parse(data || '{}');
        }
    } catch (e) {
        console.error('[SessionManager] Error loading sessions:', e);
    }
    return {};
};

// Helper to save active sessions to sessions.json
const saveSessions = (sessions) => {
    try {
        fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2), 'utf8');
    } catch (e) {
        console.error('[SessionManager] Error saving sessions:', e);
    }
};

/**
 * Retrieve or initialize a session for a given phone number.
 * @param {string} phone 
 * @returns {object}
 */
export const getSession = (phone) => {
    const sessions = loadSessions();
    if (!sessions[phone]) {
        sessions[phone] = {
            phone,
            state: 'WELCOME',
            serviceId: null,
            subOptionId: null,
            specificDetails: null,
            leadData: {},
            currentLeadStepIndex: 0,
            language: 'en'
        };
        saveSessions(sessions);
    }
    return sessions[phone];
};

/**
 * Update session details.
 * @param {string} phone 
 * @param {object} updates 
 * @returns {object}
 */
export const updateSession = (phone, updates) => {
    const sessions = loadSessions();
    const current = getSession(phone);
    sessions[phone] = { ...current, ...updates };
    saveSessions(sessions);
    return sessions[phone];
};

/**
 * Clear/reset the session for a phone number.
 * @param {string} phone 
 */
export const clearSession = (phone) => {
    const sessions = loadSessions();
    delete sessions[phone];
    saveSessions(sessions);
};
