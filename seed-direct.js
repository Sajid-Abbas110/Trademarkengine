const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const { randomBytes } = require('crypto');

// Generate a CUID-like ID
function generateId() {
    return 'c' + randomBytes(12).toString('base64').replace(/[+/=]/g, '').substring(0, 24);
}

const db = new Database('./prisma/dev.db');

async function main() {
    const hashedPassword = await bcrypt.hash('Sajid@@123', 10);
    const now = new Date().toISOString();

    // Insert admin user
    const adminId = generateId();
    const insertAdmin = db.prepare(`
        INSERT OR REPLACE INTO User (id, email, password, name, role, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    insertAdmin.run(adminId, 'sajid.abbas.mme@gmail.com', hashedPassword, 'Admin User', 'admin', now, now);

    // Insert client user
    const clientId = generateId();
    const insertClient = db.prepare(`
        INSERT OR REPLACE INTO User (id, email, password, name, role, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    insertClient.run(clientId, 'client@example.com', hashedPassword, 'Client User', 'client', now, now);

    // Insert trademarks for client
    const trademark1Id = generateId();
    const trademark2Id = generateId();

    const insertTrademark = db.prepare(`
        INSERT INTO Trademark (id, name, type, serialNumber, status, step, userId, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertTrademark.run(trademark1Id, 'TechNova Solutions', 'Word Mark', '88921045', 'In Progress', 2, clientId, now, now);
    insertTrademark.run(trademark2Id, 'SolarFlare Energy', 'Logo', '99283746', 'Registered', 4, clientId, now, now);

    console.log('✅ Database seeded successfully!');
    console.log('Admin credentials:');
    console.log('  Email: sajid.abbas.mme@gmail.com');
    console.log('  Password: Sajid@@123');
    console.log('');
    console.log('Client credentials:');
    console.log('  Email: client@example.com');
    console.log('  Password: password123');
}

main()
    .then(() => {
        db.close();
    })
    .catch((e) => {
        console.error('Error seeding database:', e);
        db.close();
        process.exit(1);
    });
