import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const session = await getSession();
        if (!session?.user || session.user.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { serviceRequestId, receiverId, content } = body;

        if (!serviceRequestId || !receiverId || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const message = await prisma.message.create({
            data: {
                content,
                senderId: session.user.id,
                receiverId,
                serviceRequestId,
            }
        });

        // Also update the service request status to "Action Required" if needed, 
        // but typically admin might want to keep it as is or change it manually.
        // For now, we'll just create the message.

        return NextResponse.json({ success: true, message });
    } catch (error) {
        console.error("Failed to send message:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
