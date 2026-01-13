"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Settings, Lock, Mail, ArrowRight, Chrome, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Registration failed");
                setIsLoading(false);
                return;
            }

            // Redirect to user dashboard
            router.refresh();
            router.push("/user");
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Something went wrong");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Side: Branding */}
            <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
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
                        Start your <span className="text-[#ea580c]">Trademark</span> journey today.
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Join thousands of businesses efficiently managing their intellectual property.
                    </p>
                </div>

                <div className="z-10 flex items-center gap-6">
                    <p className="text-sm text-slate-500 font-medium">© 2024 TradeMark Engine. All rights reserved.</p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50 md:bg-white">
                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-5 duration-500">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
                        <p className="text-slate-500 mt-2">Sign up to get started with your application.</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full py-3 px-4 border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-semibold text-slate-700">
                            <Chrome className="w-5 h-5 text-blue-500" />
                            Sign up with Google
                        </button>
                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">or email</span>
                            <div className="flex-grow border-t border-slate-200"></div>
                        </div>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#ea580c] transition-colors" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-slate-900"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 ml-1">Work Email</label>
                                <div className="relative group">
                                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#ea580c] transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-slate-900"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 ml-1">Password</label>
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
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500">
                        Already have an account? <Link href="/login" className="font-bold text-[#ea580c] hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
