const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
console.log('Checking database at:', dbPath);
const db = new Database(dbPath);

try {
    const rows = db.prepare('SELECT * FROM User').all();
    console.log('Users found:', rows.length);
    console.log(rows);
} catch (error) {
    console.error('Error reading database:', error.message);
}
