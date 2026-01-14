import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { encrypt, decrypt } from "./auth-jwt";

export { encrypt, decrypt }; // Re-export for compatibility

export async function login(userData: { id: string; email: string; name: string; role: string }) {
    const session = await encrypt({ user: userData });

    // Await cookies() to fix: "cookies() should be awaited"
    const cookieStore = await cookies();

    cookieStore.set("session", session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
    });
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");
    // console.log("[Auth] Session cookie present:", !!sessionCookie);

    const session = sessionCookie?.value;
    if (!session) {
        console.log("[Auth] No session cookie value found.");
        return null;
    }

    const payload = await decrypt(session);
    if (!payload) {
        console.log("[Auth] Session decryption failed.");
    } else {
        // console.log("[Auth] Session decrypted successfully:", payload.user?.email);
    }
    return payload;
}

export async function hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}
