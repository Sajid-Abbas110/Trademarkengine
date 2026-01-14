import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/auth-jwt";

export default async function middleware(request: NextRequest) {
    // 1. Check if the route is an admin route
    if (request.nextUrl.pathname.startsWith("/admin")) {
        // 2. Get the session cookie
        const cookie = request.cookies.get("session")?.value;

        // 3. Decrypt the session
        const session = cookie ? await decrypt(cookie) : null;

        // 4. Validate admin role
        if (!session?.user || session.user.role !== "admin") {
            // Redirect to login or home if not authorized
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
