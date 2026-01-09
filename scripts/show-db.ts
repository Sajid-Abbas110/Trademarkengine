import db from '../lib/db'

async function showDatabase() {
    console.log('=== DATABASE CONTENTS ===\n')

    // Get all users
    const users = await db.user.findMany({
        include: {
            trademarks: true
        }
    })

    console.log(`📊 Total Users: ${users.length}`)
    console.log('─'.repeat(80))

    if (users.length === 0) {
        console.log('No users found in database.\n')
    } else {
        users.forEach((user, index) => {
            console.log(`\n👤 User #${index + 1}`)
            console.log(`   ID: ${user.id}`)
            console.log(`   Email: ${user.email}`)
            console.log(`   Name: ${user.name || 'N/A'}`)
            console.log(`   Role: ${user.role}`)
            console.log(`   Created: ${user.createdAt}`)
            console.log(`   Updated: ${user.updatedAt}`)
            console.log(`   Trademarks: ${user.trademarks.length}`)

            if (user.trademarks.length > 0) {
                user.trademarks.forEach((tm, tmIndex) => {
                    console.log(`\n   ™️  Trademark #${tmIndex + 1}`)
                    console.log(`      ID: ${tm.id}`)
                    console.log(`      Name: ${tm.name}`)
                    console.log(`      Type: ${tm.type}`)
                    console.log(`      Serial Number: ${tm.serialNumber || 'N/A'}`)
                    console.log(`      Status: ${tm.status}`)
                    console.log(`      Step: ${tm.step}`)
                    console.log(`      Created: ${tm.createdAt}`)
                    console.log(`      Updated: ${tm.updatedAt}`)
                })
            }
        })
    }

    // Get all trademarks
    const allTrademarks = await db.trademark.findMany()
    console.log('\n' + '─'.repeat(80))
    console.log(`\n📋 Total Trademarks: ${allTrademarks.length}`)

    // Summary statistics
    console.log('\n' + '='.repeat(80))
    console.log('📈 SUMMARY STATISTICS')
    console.log('='.repeat(80))
    console.log(`Total Users: ${users.length}`)
    console.log(`Total Trademarks: ${allTrademarks.length}`)
    console.log(`Admin Users: ${users.filter(u => u.role === 'admin').length}`)
    console.log(`Client Users: ${users.filter(u => u.role === 'client').length}`)

    await db.$disconnect()
}

showDatabase().catch(console.error)
