import * as fs from 'fs';
import db from '../lib/db';

async function exportUsers(outputPath: string) {
    try {
        console.log('🚀 Exporting users from database...\n');

        // Fetch all users (excluding password hashes for security)
        const users = await db.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
                updatedAt: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (users.length === 0) {
            console.log('⚠️  No users found in database');
            await db.$disconnect();
            process.exit(0);
        }

        // Create CSV content
        const header = 'id,email,name,role,createdAt,updatedAt\n';
        const rows = users.map(user =>
            `${user.id},${user.email},${user.name || ''},${user.role},${user.createdAt.toISOString()},${user.updatedAt.toISOString()}`
        ).join('\n');

        const csvContent = header + rows;

        // Write to file
        fs.writeFileSync(outputPath, csvContent, 'utf-8');

        console.log('✅ Export successful!');
        console.log('─'.repeat(80));
        console.log(`📊 Total users exported: ${users.length}`);
        console.log(`📁 File saved to: ${outputPath}`);
        console.log('\n💡 Note: Passwords are NOT included for security reasons');

        await db.$disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error exporting users:', error);
        await db.$disconnect();
        process.exit(1);
    }
}

// Get output path from command line arguments
const outputPath = process.argv[2] || 'users-export.csv';

console.log('🚀 Starting user export...');
console.log('');
exportUsers(outputPath);
