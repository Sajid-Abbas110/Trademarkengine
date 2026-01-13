import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// Prisma 7 requires an adapter to be passed to the constructor
const prisma = globalForPrisma.prisma ?? (() => {
    // Check if we're using PostgreSQL (Vercel/production)
    // In Vercel, POSTGRES_PRISMA_URL is automatically set when you create a Postgres database
    const postgresUrl = process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL

    if (postgresUrl && postgresUrl.startsWith('postgres')) {
        // Use PostgreSQL adapter
        const pool = new Pool({ connectionString: postgresUrl })
        const adapter = new PrismaPg(pool)
        return new PrismaClient({
            adapter,
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        })
    } else {
        // Use SQLite for local development
        const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
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
