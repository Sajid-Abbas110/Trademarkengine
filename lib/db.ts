import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// Prisma 7 requires an adapter to be passed to the constructor
const prisma = globalForPrisma.prisma ?? (() => {
    // Attempt to detect a PostgreSQL connection URL
    // Check common env var names and be permissive for 'postgres' or 'postgresql' schemes
    const postgresUrl =
        process.env.POSTGRES_PRISMA_URL ||
        process.env.DATABASE_URL ||
        process.env.POSTGRES_URL ||
        process.env.VERCEL_POSTGRES_URL

    const isPostgres =
        typeof postgresUrl === 'string' &&
        /^(postgres(?:ql)?)(:\/\/{2}|:)/i.test(postgresUrl)

    if (isPostgres) {
        // Use PostgreSQL adapter
        console.log('[DB] Using PostgreSQL adapter');
        const pool = new Pool({ connectionString: postgresUrl })
        const adapter = new PrismaPg(pool)
        return new PrismaClient({
            adapter,
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        })
    } else if (process.env.NODE_ENV === 'production') {
        // In production we must have a PostgreSQL URL available; fail fast with a clear error
        throw new Error(
            'No PostgreSQL connection URL detected in production. Set DATABASE_URL (or POSTGRES_PRISMA_URL).'
        )
    } else {
        // Use SQLite for local development
        console.log('[DB] Using SQLite adapter');
        try {
            const path = require('path');
            const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
            // const Database = require('better-sqlite3') 

            // Resolve absolute path to dev.db to avoid cwd issues
            const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
            console.log(`[DB] SQLite path: ${dbPath}`);
            // const db = new Database(dbPath) // Deprecated usage for this adapter version
            const adapter = new PrismaBetterSqlite3({
                url: `file:${dbPath}`
            })
            return new PrismaClient({
                adapter,
                log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
            })
        } catch (err) {
            console.error('[DB] Failed to initialize SQLite adapter:', err);
            throw err;
        }
    }
})()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
export default prisma
