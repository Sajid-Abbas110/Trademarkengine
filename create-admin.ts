
export { };
const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'prisma', 'dev.db');
const db = new Database(dbPath);

async function main() {
    const email = 'marklewis@gmail.com';
    const password = 'Mark@123';
    const name = 'Mark Lewis';

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = 'admin_' + Date.now();
        const now = new Date().toISOString();

        // Check if user exists
        const existing = db.prepare('SELECT * FROM User WHERE email = ?').get(email);

        if (existing) {
            console.log('User exists. Updating...');
            const update = db.prepare(`
                UPDATE User 
                SET password = ?, role = 'admin', name = ?, updatedAt = ?
                WHERE email = ?
            `);
            update.run(hashedPassword, name, now, email);
            console.log('User updated successfully.');
        } else {
            console.log('User does not exist. Creating...');
            const insert = db.prepare(`
                INSERT INTO User (id, email, password, name, role, createdAt, updatedAt)
                VALUES (?, ?, ?, ?, 'admin', ?, ?)
            `);
            insert.run(id, email, hashedPassword, name, now, now);
            console.log('User created successfully.');
        }

    } catch (e) {
        console.error('Error:', e);
    }
}

main();


