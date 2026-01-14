// Quick test to verify database connection and real-time data
import { prisma } from './lib/db.js';

async function testDatabase() {
    try {
        console.log('🔍 Testing database connection...\n');

        // Test 1: Count existing users
        const userCount = await prisma.user.count();
        console.log(`✅ Users in database: ${userCount}`);

        // Test 2: Count service requests
        const requestCount = await prisma.serviceRequest.count();
        console.log(`✅ Service requests in database: ${requestCount}`);

        // Test 3: Count messages
        const messageCount = await prisma.message.count();
        console.log(`✅ Messages in database: ${messageCount}`);

        // Test 4: Count trademarks
        const trademarkCount = await prisma.trademark.count();
        console.log(`✅ Trademarks in database: ${trademarkCount}\n`);

        // Test 5: Fetch recent service requests
        const recentRequests = await prisma.serviceRequest.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: {
                        email: true,
                        name: true
                    }
                }
            }
        });

        console.log(`📋 Recent service requests (${recentRequests.length}):`);
        recentRequests.forEach((req, idx) => {
            console.log(`  ${idx + 1}. ${req.type} - ${req.status} (${req.user.email})`);
        });

        console.log('\n✅ Database is working correctly and catching data!\n');

    } catch (error) {
        console.error('❌ Database test failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabase();
