"use client";

import React from "react";
import {
    CheckCircle2,
    Clock,
    FileText,
    AlertCircle,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function UserDashboard() {
    const [user, setUser] = React.useState<{ name: string } | null>(null);
    const [activeFiles, setActiveFiles] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                // Fetch User
                const userRes = await fetch("/api/auth/me");
                const userData = await userRes.json();
                if (userData.user) setUser(userData.user);

                // Fetch Trademarks
                const tmRes = await fetch("/api/user/trademarks");
                const tmData = await tmRes.json();
                if (tmData.trademarks) setActiveFiles(tmData.trademarks);

            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const steps = [
        "Application Filed",
        "USPTO Review",
        "Publication",
        "Opposition Period",
        "Registration"
    ];

    if (isLoading) {
        return <div className="p-8 text-center text-slate-500">Loading dashboard...</div>;
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name || "User"}! 👋</h2>
                    <p className="text-slate-300 max-w-xl">
                        Track the progress of your trademark applications and manage your intellectual property portfolio all in one place.
                    </p>
                    <button className="mt-6 bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20">
                        Start New Application
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Applications */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#ea580c]" />
                        Active Applications
                    </h3>

                    {activeFiles.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">No Active Applications</h4>
                            <p className="text-slate-500 mb-6">You haven't filed any trademarks yet.</p>
                            <button className="text-[#ea580c] font-bold hover:underline">Start your first application</button>
                        </div>
                    ) : (
                        activeFiles.map((file) => (
                            <div key={file.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">{file.name}</h4>
                                        <p className="text-sm text-slate-500">{file.type} • ID: {file.id}</p>
                                    </div>
                                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                                        {file.status}
                                    </span>
                                </div>

                                {/* Tracking Progress */}
                                <div className="relative">
                                    <div className="absolute top-2.5 left-0 w-full h-1 bg-slate-100 rounded-full"></div>
                                    <div
                                        className="absolute top-2.5 left-0 h-1 bg-[#ea580c] rounded-full transition-all duration-1000"
                                        style={{ width: `${(file.step / (steps.length - 1)) * 100}%` }}
                                    ></div>

                                    <div className="relative flex justify-between">
                                        {steps.map((stepLabel, index) => {
                                            const isCompleted = index <= file.step;
                                            const isCurrent = index === file.step;

                                            return (
                                                <div key={index} className="flex flex-col items-center gap-2 group">
                                                    <div className={cn(
                                                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all z-10",
                                                        isCompleted
                                                            ? "bg-[#ea580c] border-[#ea580c] text-white"
                                                            : "bg-white border-slate-300 text-transparent"
                                                    )}>
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className={cn(
                                                        "text-[10px] font-bold uppercase tracking-wider text-center max-w-[80px]",
                                                        isCurrent ? "text-[#ea580c]" : "text-slate-400"
                                                    )}>
                                                        {stepLabel}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Quick Actions / Status */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-500" />
                        Needs Attention
                    </h3>

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                <FileText className="w-5 h-5 text-[#ea580c]" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-800 text-sm">Response Required</h5>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Your application for "TechNova" requires a response to an Office Action.
                                </p>
                                <button className="mt-3 text-xs font-bold text-[#ea580c] hover:underline">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
