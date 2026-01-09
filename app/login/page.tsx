"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Settings, Lock, Mail, ArrowRight, Chrome, User, ShieldCheck, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type LoginRole = "selection" | "client" | "admin";

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState<LoginRole>("selection");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Login failed");
                setIsLoading(false);
                return;
            }

            // Redirect based on role
            router.refresh(); // Refresh to update server components
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
            {/* Left Side: Branding & Info */}
            <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c] rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 -ml-48 -mb-48"></div>

                <Link href="/" className="flex items-center gap-2 group z-10">
                    <div className="text-[#ea580c]">
                        <Settings className="w-10 h-10 fill-current" />
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        trademark <span className="text-slate-400">engine</span>
                    </span>
                </Link>

                <div className="z-10 max-w-md">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        Secure access to your <span className="text-[#ea580c]">Trademark</span> ecosystem.
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Monitor, manage, and scale your brand assets with our internal management suite.
                    </p>
                </div>

                <div className="z-10 flex items-center gap-6">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                    U{i}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Trusted by 10,000+ brands worldwide.</p>
                </div>
            </div>

            {/* Right Side: Dynamic Content */}
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50 md:bg-white">
                {role === "selection" ? (
                    <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="text-center md:text-left">
                            <Link href="/" className="inline-flex md:hidden items-center gap-2 mb-8">
                                <div className="text-[#ea580c]">
                                    <Settings className="w-8 h-8 fill-current" />
                                </div>
                                <span className="text-xl font-bold text-slate-900 tracking-tight">
                                    trademark <span className="text-slate-600">engine</span>
                                </span>
                            </Link>
                            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
                            <p className="text-slate-500 mt-2">Choose your account type to continue.</p>
                        </div>

                        <div className="grid gap-4">
                            <button
                                onClick={() => setRole("client")}
                                className="group relative flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#ea580c] hover:shadow-lg hover:shadow-orange-100 transition-all text-left"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Client Login</h3>
                                    <p className="text-slate-500 text-sm">Access your trademark dashboard & tracking.</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 absolute right-6 group-hover:text-[#ea580c] group-hover:translate-x-1 transition-all" />
                            </button>

                            <button
                                onClick={() => setRole("admin")}
                                className="group relative flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-lg hover:shadow-blue-50 transition-all text-left"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Admin Portal</h3>
                                    <p className="text-slate-500 text-sm">Manage services, users, and platform settings.</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 absolute right-6 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>

                        <p className="text-center text-sm text-slate-500 pt-4">
                            Don't have an account? <Link href="/register" className="font-bold text-[#ea580c] hover:underline">Get started</Link>
                        </p>
                    </div>
                ) : (
                    <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-5 duration-500">
                        <div>
                            <button
                                onClick={() => {
                                    setRole("selection");
                                    setEmail("");
                                    setPassword("");
                                }}
                                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to selection
                            </button>
                            <h2 className="text-3xl font-bold text-slate-900">
                                {role === "admin" ? "Admin Login" : "Client Login"}
                            </h2>
                            <p className="text-slate-500 mt-2">
                                {role === "admin"
                                    ? "Sign in to manage the platform."
                                    : "Sign in to track your trademarks."}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full py-3 px-4 border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-semibold text-slate-700">
                                <Chrome className="w-5 h-5 text-blue-500" />
                                Sign in with Google
                            </button>
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-slate-200"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">or email</span>
                                <div className="flex-grow border-t border-slate-200"></div>
                            </div>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                                    <div className="relative group">
                                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#ea580c] transition-colors" />
                                        <input
                                            type="email"
                                            required
                                            placeholder={role === "admin" ? "admin@trademarkengine.com" : "name@company.com"}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-slate-900"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-sm font-bold text-slate-700">Password</label>
                                        <button type="button" className="text-sm font-bold text-[#ea580c] hover:underline">Forgot?</button>
                                    </div>
                                    <div className="relative group">
                                        <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#ea580c] transition-colors" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-slate-900"
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
                                    "w-full bg-[#ea580c] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#c2410c] shadow-lg shadow-orange-200 transition-all",
                                    isLoading && "opacity-80 cursor-not-allowed scale-[0.98]"
                                )}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        {role === "admin" ? "Access Admin Panel" : "Go to Dashboard"}
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
