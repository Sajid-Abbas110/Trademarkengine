import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

async function getUserIdFromRequest() {
    const session = await getSession();
    return session?.user?.id;
}

export async function GET() {
    try {
        const userId = await getUserIdFromRequest();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const requests = await prisma.serviceRequest.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json({ requests });
    } catch (error) {
        console.error("Failed to fetch user requests:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
