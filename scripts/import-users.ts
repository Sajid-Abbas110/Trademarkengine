import * as fs from 'fs';
import * as path from 'path';
import db from '../lib/db';
import { hashPassword } from '../lib/auth';

interface UserRow {
    email: string;
    name: string;
    password: string;
    role: string;
}

async function importUsers(csvPath: string) {
    try {
        // Read CSV file
        const csvContent = fs.readFileSync(csvPath, 'utf-8');
        const lines = csvContent.trim().split('\n');

        if (lines.length < 2) {
            console.error('❌ CSV file is empty or has no data rows');
            process.exit(1);
        }

        // Parse header
        const header = lines[0].toLowerCase().split(',').map(h => h.trim());
        const requiredFields = ['email', 'password'];
        const missingFields = requiredFields.filter(f => !header.includes(f));

        if (missingFields.length > 0) {
            console.error(`❌ Missing required fields: ${missingFields.join(', ')}`);
            process.exit(1);
        }

        // Parse data rows
        const users: UserRow[] = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            const user: any = {};

            header.forEach((field, index) => {
                user[field] = values[index] || '';
            });

            users.push({
                email: user.email,
                name: user.name || 'User',
                password: user.password,
                role: user.role || 'client'
            });
        }

        console.log(`📊 Found ${users.length} users to import\n`);
        console.log('─'.repeat(80));

        const results = {
            success: [] as string[],
            failed: [] as { email: string; reason: string }[]
        };

        // Import users
        for (const userData of users) {
            try {
                // Validate email
                if (!userData.email || !userData.email.includes('@')) {
                    results.failed.push({
                        email: userData.email || 'unknown',
                        reason: 'Invalid email format'
                    });
                    continue;
                }

                // Check if user exists
                const existingUser = await db.user.findUnique({
                    where: { email: userData.email }
                });

                if (existingUser) {
                    results.failed.push({
                        email: userData.email,
                        reason: 'User already exists'
                    });
                    continue;
                }

                // Hash password and create user
                const hashedPassword = await hashPassword(userData.password);
                await db.user.create({
                    data: {
                        email: userData.email,
                        password: hashedPassword,
                        name: userData.name,
                        role: userData.role
                    }
                });

                results.success.push(userData.email);
                console.log(`✅ Imported: ${userData.email} (${userData.role})`);
            } catch (error) {
                const errorMsg = error instanceof Error ? error.message : 'Unknown error';
                results.failed.push({
                    email: userData.email,
                    reason: errorMsg
                });
                console.log(`❌ Failed: ${userData.email} - ${errorMsg}`);
            }
        }

        // Print summary
        console.log('\n' + '─'.repeat(80));
        console.log('\n📈 IMPORT SUMMARY');
        console.log('='.repeat(80));
        console.log(`✅ Successfully imported: ${results.success.length}`);
        console.log(`❌ Failed: ${results.failed.length}`);

        if (results.failed.length > 0) {
            console.log('\n❌ Failed imports:');
            results.failed.forEach(f => {
                console.log(`   - ${f.email}: ${f.reason}`);
            });
        }

        await db.$disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error importing users:', error);
        await db.$disconnect();
        process.exit(1);
    }
}

// Get CSV path from command line arguments
const csvPath = process.argv[2];

if (!csvPath) {
    console.error('❌ Usage: npx tsx scripts/import-users.ts <path-to-csv>');
    console.error('   Example: npx tsx scripts/import-users.ts scripts/sample-users.csv');
    process.exit(1);
}

if (!fs.existsSync(csvPath)) {
    console.error(`❌ File not found: ${csvPath}`);
    process.exit(1);
}

console.log('🚀 Starting user import from:', csvPath);
console.log('');
importUsers(csvPath);
