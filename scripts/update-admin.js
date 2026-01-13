const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

async function updateAdmin() {
    const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
    console.log(`Connecting to database at: ${dbPath}`);

    const db = new Database(dbPath);

    try {
        const newEmail = 'sajid.abbas.mme@gmail.com';
        const newPassword = 'Sajid@@123';
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Find existing admin
        const admin = db.prepare("SELECT * FROM User WHERE role = 'admin'").get();

        if (admin) {
            console.log(`Found existing admin: ${admin.email}`);
            const update = db.prepare("UPDATE User SET email = ?, password = ?, updatedAt = ? WHERE id = ?");
            update.run(newEmail, hashedNewPassword, new Date().toISOString(), admin.id);
            console.log(`✅ Admin updated successfully to: ${newEmail}`);
        } else {
            console.log("❌ No admin user found in the database.");
            console.log("Creating new admin user...");
            const insert = db.prepare(`
                INSERT INTO User (id, email, password, name, role, createdAt, updatedAt)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);
            const adminId = 'cl' + Math.random().toString(36).substring(2, 11);
            insert.run(adminId, newEmail, hashedNewPassword, 'Admin User', 'admin', new Date().toISOString(), new Date().toISOString());
            console.log(`✅ Admin created successfully: ${newEmail}`);
        }
    } catch (error) {
        console.error("Error updating admin:", error);
    } finally {
        db.close();
    }
}

updateAdmin();
