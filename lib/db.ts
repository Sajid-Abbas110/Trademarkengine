import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import path from 'path'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const db = globalForPrisma.prisma ?? (() => {
    const adapter = new PrismaBetterSqlite3({
        url: `file:${path.resolve(process.cwd(), 'prisma', 'dev.db')}`
    })
    return new PrismaClient({ adapter })
})()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export default db
