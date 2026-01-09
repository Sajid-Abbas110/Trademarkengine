import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import Database from 'better-sqlite3';
import { PrismaSQLite } from '@prisma/adapter-better-sqlite3';

const db = new Database('./prisma/dev.db');
const adapter = new PrismaSQLite(db);
const prisma = new PrismaClient({ adapter });

async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);

    const user = await prisma.user.upsert({
        where: { email: 'client@example.com' },
        update: {},
        create: {
            email: 'client@example.com',
            name: 'Client User',
            password: hashedPassword,
            role: 'client',
            trademarks: {
                create: [
                    {
                        name: 'TechNova Solutions',
                        status: 'In Progress',
                        serialNumber: '88921045',
                        type: 'Word Mark',
                        step: 2,
                    },
                    {
                        name: 'SolarFlare Energy',
                        status: 'Registered',
                        serialNumber: '99283746',
                        type: 'Logo',
                        step: 4,
                    },
                ],
            },
        },
    });

    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'admin',
        },
    });

    console.log({ user, admin });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
