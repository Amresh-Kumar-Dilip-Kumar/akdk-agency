import 'server-only';
import { PrismaClient } from '../../prisma/generated/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const globalForPrisma = global as unknown as {
    prismaSqlite: PrismaClient | undefined
}

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
    throw new Error('DATABASE_URL is not configured')
}

const adapter = new PrismaBetterSqlite3({
    url: databaseUrl,
})

const db = globalForPrisma.prismaSqlite || new PrismaClient({
    adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaSqlite = db

export  {db};