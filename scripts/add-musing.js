import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const draftPath = path.join(__dirname, '../musing-draft.md');
const musingsPath = path.join(__dirname, '../public/data/musings.json');

// Check if draft exists
if (!fs.existsSync(draftPath)) {
    console.error(`❌ Draft not found! Please create a draft file at: ${draftPath}`);
    console.log('It should look like this:');
    console.log('# TITLE: Your Title Here');
    console.log('# SUMMARY: Short summary here');
    console.log('');
    console.log('Your body text here...');
    process.exit(1);
}

const draftContent = fs.readFileSync(draftPath, 'utf-8');

// Parse Title
const titleMatch = draftContent.match(/^# TITLE:\s*(.*)/mi);
if (!titleMatch || !titleMatch[1].trim()) {
    console.error("❌ Could not find a Title! Make sure your file has '# TITLE: Your Title Here'");
    process.exit(1);
}
const title = titleMatch[1].trim();

// Parse Summary
const summaryMatch = draftContent.match(/^# SUMMARY:\s*(.*)/mi);
if (!summaryMatch || !summaryMatch[1].trim()) {
    console.error("❌ Could not find a Summary! Make sure your file has '# SUMMARY: Your Short Summary Here'");
    process.exit(1);
}
const summary = summaryMatch[1].trim();

// Parse Body
// We rip out the title and summary lines, then trim the rest.
let bodyLines = draftContent.split('\n');
bodyLines = bodyLines.filter(line => !line.startsWith('# TITLE:') && !line.startsWith('# SUMMARY:'));
let bodyRaw = bodyLines.join('\n').trim();

if (!bodyRaw) {
    console.error("❌ Could not find any Body text! Add your text below the Title and Summary.");
    process.exit(1);
}

// Convert paragraph breaks to <br><br> for JSON
// Handles \r\n (Windows) and \n (Mac/Linux)
const body = bodyRaw.replace(/\r?\n\r?\n/g, '<br><br>').replace(/\r!\n/g, '<br>');

// Read current musings
if (!fs.existsSync(musingsPath)) {
    console.error(`❌ Unable to locate musings JSON at: ${musingsPath}`);
    process.exit(1);
}

let musings = JSON.parse(fs.readFileSync(musingsPath, 'utf-8'));

// Determine next ID
// IDs look like "musing_03"
let maxIdNum = 0;
for (const m of musings) {
    if (m.id && m.id.startsWith('musing_')) {
        const numStr = m.id.split('_')[1];
        const num = parseInt(numStr, 10);
        if (!isNaN(num) && num > maxIdNum) {
            maxIdNum = num;
        }
    }
}
const nextIdNum = maxIdNum + 1;
const nextIdStr = nextIdNum < 10 ? `0${nextIdNum}` : `${nextIdNum}`;
const newId = `musing_${nextIdStr}`;

// Determine Date
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const dateStamp = `${yyyy}.${mm}.${dd}`;

// Create the new entry
const newEntry = {
    id: newId,
    date: dateStamp,
    title: title,
    summary: summary,
    body: body
};

// Add to the top of the list!
musings.unshift(newEntry);

// Write back to the JSON file
fs.writeFileSync(musingsPath, JSON.stringify(musings, null, 4), 'utf-8');

console.log(`✅ Success! Musing "${title}" added as ${newId} on ${dateStamp}.`);

// Create a blank draft template for the next time
const templateContent = `# TITLE: 
# SUMMARY: 

`;
fs.writeFileSync(draftPath, templateContent, 'utf-8');
console.log(`🧹 Cleared draft file and reset template. You are ready to view your site!`);
