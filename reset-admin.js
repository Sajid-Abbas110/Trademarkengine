const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

// Target the correct database file
const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const db = new Database(dbPath);

async function main() {
    const email = 'admin@trademarkengine.com';
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const stmt = db.prepare('UPDATE User SET password = ? WHERE email = ?');
        const info = stmt.run(hashedPassword, email);
        console.log(`Updated password for user: ${email}. Changes: ${info.changes}`);
    } catch (error) {
        console.error('Error updating password:', error.message);
    }
}

main();
