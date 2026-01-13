import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
    try {
        // In a real app, verify Admin session here

        // Fetch all requests, newest first
        const requests = await prisma.serviceRequest.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Calculate summary stats
        const totalRequests = requests.length;
        const pendingRequests = requests.filter(r => r.status === "PENDING").length;

        // Calculate total volume by parsing the data JSON
        const totalVolume = requests.reduce((sum, r) => {
            try {
                const parsedData = JSON.parse(r.data);
                return sum + (Number(parsedData.total) || 0);
            } catch (e) {
                return sum;
            }
        }, 0);

        // Count unique clients
        const clientCount = await prisma.user.count({
            where: { role: 'client' }
        });

        return NextResponse.json({
            requests,
            stats: {
                totalRequests,
                pendingRequests,
                totalVolume,
                clientCount
            }
        });
    } catch (error) {
        console.error("Failed to fetch admin requests:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
