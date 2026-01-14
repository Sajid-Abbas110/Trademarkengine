"use client";

import React from "react";
import Link from "next/link";
import {
    Users,
    Package,
    CreditCard,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    AlertCircle,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
    const [requests, setRequests] = React.useState<any[]>([]);
    const [statsData, setStatsData] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchRequests() {
            try {
                const res = await fetch("/api/admin/requests");
                const data = await res.json();
                if (data.requests) {
                    setRequests(data.requests);
                }
                if (data.stats) {
                    setStatsData(data.stats);
                }
            } catch (error) {
                console.error("Failed to fetch admin requests", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchRequests();
    }, []);

    const dashboardStats = [
        {
            name: "Total Requests",
            value: statsData?.totalRequests?.toString() || "0",
            change: "+12.5%",
            trend: "up",
            icon: Package,
            color: "text-blue-600",
            bg: "bg-blue-50",
            href: "/admin/orders"
        },
        {
            name: "Pending Action",
            value: statsData?.pendingRequests?.toString() || "0",
            change: "Current",
            trend: "up",
            icon: Clock,
            color: "text-orange-600",
            bg: "bg-orange-50",
            href: "/admin/orders"
        },
        {
            name: "Total Clients",
            value: statsData?.clientCount?.toString() || "0",
            change: "+8.4%",
            trend: "up",
            icon: Users,
            color: "text-green-600",
            bg: "bg-green-50",
            href: "/admin/users"
        },
        {
            name: "Total Volume",
            value: `$${statsData?.totalVolume?.toLocaleString() || "0"}`,
            change: "+5%",
            trend: "up",
            icon: CreditCard,
            color: "text-purple-600",
            bg: "bg-purple-50",
            href: "/admin/payments"
        },
    ];

    // Derived Stats for Quick Insights
    const avgOrderValue = statsData?.totalRequests > 0
        ? Math.round(statsData.totalVolume / statsData.totalRequests)
        : 0;

    const topService = React.useMemo(() => {
        if (!requests.length) return "N/A";
        const counts: Record<string, number> = {};
        requests.forEach(r => {
            counts[r.type] = (counts[r.type] || 0) + 1;
        });
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return sorted.length > 0 ? sorted[0][0] : "N/A";
    }, [requests]);


    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Link
                            key={stat.name}
                            href={stat.href}
                            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#ea580c]/50 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn("p-2 rounded-xl transition-colors", stat.bg, "group-hover:bg-[#ea580c]/10")}>
                                    <Icon className={cn("w-6 h-6", stat.color, "group-hover:text-[#ea580c]")} />
                                </div>
                                <div className={cn(
                                    "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                                    stat.trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                                )}>
                                    <ArrowUpRight className="w-3 h-3 mr-1" />
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity - NOW REAL DATA */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800">Recent Service Requests</h3>
                        <Link href="/admin/orders" className="text-[#ea580c] text-sm font-bold hover:underline">View All</Link>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {isLoading ? (
                            <div className="p-6 text-center text-slate-500">Loading requests...</div>
                        ) : requests.length === 0 ? (
                            <div className="p-6 text-center text-slate-500">No requests found.</div>
                        ) : (
                            requests.slice(0, 5).map((req) => (
                                <div key={req.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                                            {req.user?.name ? req.user.name.charAt(0) : "U"}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800">{req.user?.name || "Unknown User"}</h4>
                                            <p className="text-xs text-slate-500">Submitted {req.type} Request</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md",
                                            req.status === 'PENDING' ? "bg-orange-50 text-orange-600" :
                                                req.status === 'COMPLETED' ? "bg-green-50 text-green-600" : "bg-slate-50 text-slate-600"
                                        )}>
                                            {req.status}
                                        </span>
                                        <p className="text-[10px] text-slate-400 mt-1">
                                            {new Date(req.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Quick Insights (Static for now, but complementary) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-6 h-6 text-[#ea580c]" />
                            <h3 className="text-xl font-bold">Quick Insights</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Trademark Success Rate</span>
                                    <span className="text-white font-bold">92%</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[92%]"></div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-700/50 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Avg. Order Value</span>
                                    <span className="text-white font-bold text-lg">${avgOrderValue.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Top Service</span>
                                    <span className="text-[#ea580c] font-bold uppercase tracking-wider text-xs bg-[#ea580c]/10 px-2 py-1 rounded">
                                        {topService}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
