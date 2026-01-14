import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const session = await getSession();
        console.log("[API/messages] Session retrieved:", JSON.stringify(session, null, 2));

        if (!session?.user || session.user.role !== "admin") {
            const role = session?.user?.role;
            console.log(`[API/messages] Unauthorized access attempt. Role: ${role}, UserID: ${session?.user?.id}`);
            return NextResponse.json({ error: "Unauthorized", debug_role: role }, { status: 401 });
        }

        const body = await req.json();
        const { serviceRequestId, receiverId, content } = body;

        // Lazy-load Prisma to prevent DB initialization at module import/build time
        const { default: prisma } = await import('@/lib/db');

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
        // Log more details for debugging
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        return NextResponse.json({
            error: "Failed to send message",
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
