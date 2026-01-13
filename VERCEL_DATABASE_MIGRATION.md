# Database Configuration Guide

## The Problem
Your messaging app works locally but fails on Vercel with "Internal Server Error" because:
- **Local**: Uses SQLite (file-based database at `prisma/dev.db`)
- **Vercel**: Serverless platform with read-only filesystem - SQLite cannot work

## Solution: Migrate to Cloud Database

### Step 1: Create Vercel Postgres Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project (Trademarkengine)
3. Go to **Storage** tab
4. Click **Create Database**
5. Select **Postgres**
6. Choose a name (e.g., "trademarkengine-db")
7. Click **Create**

### Step 2: Get Connection Strings

After creating the database, Vercel will show you environment variables:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`

These are automatically added to your Vercel project.

### Step 3: Update Local Environment

Create a `.env.local` file in your project root with:

```
# For local development with Postgres
POSTGRES_PRISMA_URL="your-postgres-prisma-url-from-vercel"

# OR continue using SQLite locally (not recommended for consistency)
DATABASE_URL="file:./prisma/dev.db"
```

### Step 4: Update Prisma Schema

The schema needs to be updated to support PostgreSQL instead of SQLite.
See the changes in `prisma/schema.prisma`.

### Step 5: Update Database Connection

The `lib/db.ts` file needs to be updated to use PostgreSQL.

### Step 6: Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed the database (if needed)
npm run seed
```

### Step 7: Redeploy to Vercel

```bash
git add .
git commit -m "Migrate to PostgreSQL for Vercel compatibility"
git push origin main
```

Vercel will automatically redeploy with the new database configuration.

## Alternative: Quick Fix (Not Recommended)

If you want to keep SQLite for now, you could use Turso (SQLite for the edge), but PostgreSQL is the recommended solution for production apps on Vercel.
