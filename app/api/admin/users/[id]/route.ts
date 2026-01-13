import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { name, email, role } = body;

        console.log(`[PATCH] Updating User: ${id}`, { name, email, role });

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                role
            }
        });

        return NextResponse.json({ success: true, user: updatedUser });
    } catch (error: any) {
        console.error("Failed to update user:", error);
        return NextResponse.json({
            error: "Failed to update user profile",
            details: error.message || String(error)
        }, { status: 500 });
    }
}
