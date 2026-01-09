import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hashPassword, login } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Check if user exists
        const existingUser = await db.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Create user
        const hashedPassword = await hashPassword(password);
        const user = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                name: name || "User",
                role: "client",
            },
        });

        // Create session
        await login({
            id: user.id,
            email: user.email,
            name: user.name || "",
            role: user.role,
        });

        return NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
