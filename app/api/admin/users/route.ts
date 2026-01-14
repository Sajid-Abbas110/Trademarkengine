import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
    try {
        // Lazy-load Prisma
        const { prisma } = await import('@/lib/db');

        // Fetch all users with role 'client'
        const users = await prisma.user.findMany({
            where: {
                role: "client"
            },
            include: {
                _count: {
                    select: {
                        requests: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Map to a more UI-friendly format if needed
        const mappedUsers = users.map(user => ({
            id: user.id,
            name: user.name || "N/A",
            email: user.email,
            status: "Active", // Assuming active for now
            role: "Customer",
            joined: user.createdAt.toISOString().split('T')[0],
            orders: user._count.requests,
            avatar: user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : "U"
        }));

        return NextResponse.json({ users: mappedUsers });
    } catch (error) {
        console.error("Failed to fetch admin users:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        console.log(`[POST] Creating New User: ${email}`);

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Lazy-load Prisma
        const { default: prisma } = await import('@/lib/db');

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists with this email" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "client"
            }
        });

        return NextResponse.json({
            success: true,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error: any) {
        console.error("Failed to create user:", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        return NextResponse.json({
            error: "Failed to create user",
            details: error.message || String(error)
        }, { status: 500 });
    }
}
