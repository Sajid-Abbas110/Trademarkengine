import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(req: Request) {
    try {
        const session = await getSession();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const messages = await prisma.message.findMany({
            where: {
                receiverId: session.user.id
            },
            include: {
                serviceRequest: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json({ success: true, messages });
    } catch (error) {
        console.error("Failed to fetch messages:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getSession();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { messageId, isRead } = body;

        if (!messageId) {
            return NextResponse.json({ error: "Missing message ID" }, { status: 400 });
        }

        const updatedMessage = await prisma.message.update({
            where: {
                id: messageId,
                receiverId: session.user.id // Security check
            },
            data: {
                isRead: isRead ?? true
            }
        });

        return NextResponse.json({ success: true, message: updatedMessage });
    } catch (error) {
        console.error("Failed to update message:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
