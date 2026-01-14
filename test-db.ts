
export { };
const Database = require('better-sqlite3');
const path = require('path');

try {
    console.log('Testing better-sqlite3 direct...');
    const dbPath = path.join(__dirname, 'prisma', 'dev.db');
    console.log('DB Path:', dbPath);
    const db = new Database(dbPath);
    console.log('Database opened successfully.');
    db.prepare('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY)').run();
    console.log('Table created or exists.');

    // Now try adapter
    const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
    console.log('Adapter imported.');
    const adapter = new PrismaBetterSqlite3(db);
    console.log('Adapter created successfully.');

} catch (e) {
    console.error('Error:', e);
}
