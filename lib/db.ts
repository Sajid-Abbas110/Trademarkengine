import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// Prisma 7 requires an adapter to be passed to the constructor
const prisma = globalForPrisma.prisma ?? (() => {
    // Check if we're using PostgreSQL (Vercel/production)
    if (process.env.POSTGRES_PRISMA_URL) {
        const pool = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })
        const adapter = new PrismaPg(pool)
        return new PrismaClient({
            adapter,
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        })
    } else {
        // Use SQLite for local development
        const Database = require('better-sqlite3')
        const db = new Database('./prisma/dev.db')
        const adapter = new PrismaBetterSqlite3(db)
        return new PrismaClient({
            adapter,
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        })
    }
})()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
export default prisma
