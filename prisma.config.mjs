import { defineConfig } from "prisma/config";

export default defineConfig({
    datasource: {
        // Use POSTGRES_PRISMA_URL from Vercel, or a dummy postgres URL for build
        // The dummy URL allows the build to succeed, actual connection happens at runtime
        url: process.env.DATABASE_URL || "file:./prisma/dev.db"
    }
});
