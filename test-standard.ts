
import { PrismaClient } from '@prisma/client'

async function main() {
    console.log('Starting Standard Prisma Client test...');
    process.env.DATABASE_URL = "file:./dev.db";

    try {
        const prisma = new PrismaClient({
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
