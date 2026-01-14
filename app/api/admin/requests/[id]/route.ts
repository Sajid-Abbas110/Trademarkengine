import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { status, notes } = body;

        console.log(`[PATCH] Updating Service Request: ${id}`, { status, notes });

        // Lazy-load Prisma
        const { prisma } = await import('@/lib/db');

        const updatedRequest = await prisma.serviceRequest.update({
            where: { id },
            data: {
                status,
            }
        });

        return NextResponse.json({ success: true, request: updatedRequest });
    } catch (error: any) {
        console.error("Failed to update service request:", error);
        return NextResponse.json({
            error: "Internal Server Error",
            details: error.message || String(error)
        }, { status: 500 });
    }
}
