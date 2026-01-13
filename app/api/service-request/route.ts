import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

export async function POST(req: Request) {
    try {
        const session = await getSession();
        const user = session?.user;

        const body = await req.json();
        const { type, data, userId } = body;

        let serviceUserId = userId;
        let isNewUser = false;
        let plainPassword = null;

        // Prioritize email from form if provided
        if (data?.contactInfo?.email) {
            const existingUser = await prisma.user.findUnique({
                where: { email: data.contactInfo.email }
            });

            if (existingUser) {
                serviceUserId = existingUser.id;
                isNewUser = false;
            } else {
                // New user: Create account and return credentials
                plainPassword = randomBytes(4).toString('hex'); // 8 chars
                const hashedPassword = await bcrypt.hash(plainPassword, 10);

                const newUser = await prisma.user.create({
                    data: {
                        email: data.contactInfo.email,
                        name: `${data.contactInfo.firstName || ''} ${data.contactInfo.lastName || ''}`.trim() || "Guest User",
                        password: hashedPassword,
                        role: "client"
                    }
                });
                serviceUserId = newUser.id;
                isNewUser = true;

                console.log(`[AUTH] Account created for ${data.contactInfo.email} with password: ${plainPassword}`);
            }
        } else if (user?.id) {
            serviceUserId = user.id;
            isNewUser = false;
        }

        if (!serviceUserId) {
            return NextResponse.json({ error: "User not identified" }, { status: 400 });
        }

        // Generate a random 9-digit serial number
        const serialNumber = "SN-" + Math.floor(100000000 + Math.random() * 900000000).toString();

        const newRequest = await prisma.serviceRequest.create({
            data: {
                userId: serviceUserId,
                type,
                data: JSON.stringify({ ...data, serialNumber }),
                status: "INVOICE_GENERATED"
            },
        });

        // Simulate sending invoice to Client and Admin
        const clientEmail = data?.contactInfo?.email || user?.email;
        console.log(`[INVOICE] Generating invoice for request ${newRequest.id}`);
        console.log(`[INVOICE] Sending to Client: ${clientEmail}`);
        console.log(`[INVOICE] Sending to Admin: sajid.abbas.mme@gmail.com`);

        return NextResponse.json({
            success: true,
            request: newRequest,
            serialNumber,
            isNewUser,
            credentials: plainPassword ? {
                email: clientEmail,
                password: plainPassword
            } : null,
            message: "Invoice generated and sent to both client and admin. Login credentials provided for tracking."
        });
    } catch (error) {
        console.error("Failed to create service request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
