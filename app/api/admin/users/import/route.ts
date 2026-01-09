import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hashPassword } from "@/lib/auth";

interface ImportUser {
    email: string;
    name: string;
    password: string;
    role?: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { users } = body as { users: ImportUser[] };

        if (!users || !Array.isArray(users) || users.length === 0) {
            return NextResponse.json(
                { error: "Invalid users data. Expected an array of users." },
                { status: 400 }
            );
        }

        const results = {
            success: [] as string[],
            failed: [] as { email: string; reason: string }[]
        };

        for (const userData of users) {
            try {
                // Validate required fields
                if (!userData.email || !userData.password) {
                    results.failed.push({
                        email: userData.email || "unknown",
                        reason: "Missing email or password"
                    });
                    continue;
                }

                // Check if user already exists
                const existingUser = await db.user.findUnique({
                    where: { email: userData.email }
                });

                if (existingUser) {
                    results.failed.push({
                        email: userData.email,
                        reason: "User already exists"
                    });
                    continue;
                }

                // Hash password and create user
                const hashedPassword = await hashPassword(userData.password);
                await db.user.create({
                    data: {
                        email: userData.email,
                        password: hashedPassword,
                        name: userData.name || "User",
                        role: userData.role || "client"
                    }
                });

                results.success.push(userData.email);
            } catch (error) {
                results.failed.push({
                    email: userData.email,
                    reason: error instanceof Error ? error.message : "Unknown error"
                });
            }
        }

        return NextResponse.json({
            success: true,
            imported: results.success.length,
            failed: results.failed.length,
            results
        });
    } catch (error) {
        console.error("Error importing users:", error);
        return NextResponse.json(
            { error: "Failed to import users" },
            { status: 500 }
        );
    }
}
