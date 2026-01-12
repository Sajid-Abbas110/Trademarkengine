"use client";

import React, { useState, useEffect, Suspense } from "react"; // 1. Added Suspense import
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Settings, Lock, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LoginRole = "selection" | "client" | "admin";

// 2. Wrap the main component in Suspense
export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}

// 3. Move your logic into this sub-component
function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const isAdminLogin = searchParams.get("admin") === "true";

    const [role, setRole] = useState<LoginRole>(isAdminLogin ? "admin" : "client");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setRole(isAdminLogin ? "admin" : "client");
    }, [isAdminLogin]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Login failed");
                setIsLoading(false);
                return;
            }

            router.refresh();

            setTimeout(() => {
                if (data.user.role === "admin") {
                    router.push("/admin");
                } else {
                    router.push("/user");
                }
            }, 500);
        } catch (error) {
            console.error("Login Error:", error);
            alert("Something went wrong");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Branding */}
            <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col">
                <Link href="/" className="flex items-center gap-2">
                    <Settings className="w-10 h-10 text-[#ea580c]" />
                    <span className="text-2xl font-bold text-white">
                        trademark <span className="text-slate-400">engine</span>
                    </span>
                </Link>

                <div>
                    <h1 className="text-6xl font-bold text-white mb-4 pt-12">
                        Secure access <br /> to your <br /> <span className="text-[#ea580c]">Trademark</span> ecosystem.
                    </h1>
                    <p className="text-slate-400">
                        Monitor, manage, and scale your brand assets.
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            {role === "admin" ? "Admin Dashboard" : "Welcome to the Portal"}
                        </h2>
                        <p className="text-slate-500 mt-2">
                            {role === "admin"
                                ? "Sign in to manage the platform."
                                : "Sign in to track your trademarks."}
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-slate-700">Email</label>
                                <div className="relative">
                                    <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        required
                                        placeholder={role === "admin" ? "admin@company.com" : "user@company.com"}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border rounded-xl"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-slate-700">Password</label>
                                <div className="relative">
                                    <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border rounded-xl"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={cn(
                                "w-full bg-[#ea580c] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2",
                                isLoading && "opacity-70"
                            )}
                        >
                            {isLoading ? "Signing in..." : role === "admin" ? "Access Admin Panel" : "Go to Dashboard"}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}