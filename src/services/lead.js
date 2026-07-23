import fs from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

/**
 * Appends a new lead to leads.json.
 * @param {object} lead 
 * @returns {object|null}
 */
export const saveLead = (lead) => {
    try {
        let leads = [];
        if (fs.existsSync(LEADS_FILE)) {
            const data = fs.readFileSync(LEADS_FILE, 'utf8');
            leads = JSON.parse(data || '[]');
        }

        const newLead = {
            id: `lead_${Date.now()}`,
            timestamp: new Date().toISOString(),
            ...lead
        };

        leads.push(newLead);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');
        console.log(`[LeadManager] Saved new lead: ${newLead.id}`);
        return newLead;
    } catch (e) {
        console.error('[LeadManager] Error saving lead:', e);
        return null;
    }
};
