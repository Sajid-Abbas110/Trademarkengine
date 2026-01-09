import { NextResponse } from "next/server";
import { getSession, login } from "@/lib/auth";
import db from "@/lib/db";

export async function GET() {
    const session = await getSession();

    if (!session) {
        return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user: session.user });
}

export async function PATCH(request: Request) {
    const session = await getSession();

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { name, email } = body;

        const updatedUser = await db.user.update({
            where: { id: session.user.id },
            data: { name, email },
        });

        // Update session
        await login({
            id: updatedUser.id,
            email: updatedUser.email,
            name: updatedUser.name || "",
            role: updatedUser.role,
        });

        return NextResponse.json({ user: updatedUser });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
