const Database = require('better-sqlite3');
const db = new Database('temp_check.db');

try {
    const row = db.prepare('SELECT COUNT(*) as count FROM User').get();
    console.log('User count:', row.count);

    const users = db.prepare('SELECT * FROM User LIMIT 5').all();
    console.log('Users:', users);
} catch (error) {
    console.error('Error querying database:', error.message);
}
