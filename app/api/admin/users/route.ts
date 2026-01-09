import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: Request) {
    try {
        // Fetch all users with their trademark counts
        const users = await db.user.findMany({
            include: {
                trademarks: {
                    select: {
                        id: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Transform data for frontend
        const usersWithCounts = users.map(user => ({
            id: user.id,
            name: user.name || 'N/A',
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            trademarkCount: user.trademarks.length
        }));

        return NextResponse.json({ users: usersWithCounts });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}
