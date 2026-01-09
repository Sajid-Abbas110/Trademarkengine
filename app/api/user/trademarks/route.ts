import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import db from "@/lib/db";

export async function GET() {
    const session = await getSession();

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const trademarks = await db.trademark.findMany({
            where: { userId: session.user.id },
            orderBy: { updatedAt: 'desc' }
        });

        return NextResponse.json({ trademarks });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await getSession();

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { name, type, serialNumber } = body;

        const trademark = await db.trademark.create({
            data: {
                name,
                type: type || "Word Mark",
                serialNumber,
                userId: session.user.id,
                status: "Application Filed",
                step: 0
            }
        });

        return NextResponse.json({ trademark });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
