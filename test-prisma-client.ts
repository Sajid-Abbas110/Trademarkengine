
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'
import path from 'path'

async function main() {
    console.log('Starting Prisma Client test...');
    try {
        const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
        console.log(`[DB] SQLite path: ${dbPath}`);
        const adapter = new PrismaBetterSqlite3({
            url: `file:${dbPath}`
        });
        process.env.DATABASE_URL = "file:./dev.db";
        const prisma = new PrismaClient({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        });

        console.log('Prisma Client instantiated. Connecting...');

        // Try a simple query
        const userCount = await prisma.user.count();
        console.log('User count:', userCount);

        await prisma.$disconnect();
    } catch (e) {
        console.error('Error during Prisma Client execution:', e);
    }
}

main();
