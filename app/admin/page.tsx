"use client";

import React from "react";
import {
    Users,
    Package,
    CreditCard,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    {
        name: "Total Users",
        value: "1,284",
        change: "+12.5%",
        trend: "up",
        icon: Users,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        name: "Active Users",
        value: "842",
        change: "+5.2%",
        trend: "up",
        icon: Users,
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        name: "Total Orders",
        value: "452",
        change: "+18.4%",
        trend: "up",
        icon: Package,
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        name: "Revenue",
        value: "$42,500",
        change: "-2.4%",
        trend: "down",
        icon: CreditCard,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
];

const recentActivities = [
    { id: 1, user: "John Doe", action: "Registered a new trademark", time: "2 hours ago", status: "pending", statusColor: "text-orange-600 bg-orange-50" },
    { id: 2, user: "Sarah Smith", action: "Completed payment for #TRD-4521", time: "4 hours ago", status: "completed", statusColor: "text-green-600 bg-green-50" },
    { id: 3, user: "Mike Johnson", action: "Updated profile information", time: "Yesterday", status: "updated", statusColor: "text-blue-600 bg-blue-50" },
    { id: 4, user: "Apex Corp", action: "Filed for monitoring service", time: "Yesterday", status: "filed", statusColor: "text-purple-600 bg-purple-50" },
    { id: 5, user: "Elena Rodriguez", action: "Requested trademark search", time: "2 days ago", status: "pending", statusColor: "text-orange-600 bg-orange-50" },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn("p-2 rounded-xl", stat.bg)}>
                                    <Icon className={cn("w-6 h-6", stat.color)} />
                                </div>
                                <div className={cn(
                                    "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                                    stat.trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                                )}>
                                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800">Recent User Activities</h3>
                        <button className="text-[#ea580c] text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                                        {activity.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800">{activity.user}</h4>
                                        <p className="text-xs text-slate-500">{activity.action}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md", activity.statusColor)}>
                                        {activity.status}
                                    </span>
                                    <p className="text-[10px] text-slate-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Insights */}
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
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Response Time</span>
                                    <span className="text-white font-bold">4.2h</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#ea580c] w-[75%]"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Customer Satisfaction</span>
                                    <span className="text-white font-bold">4.8/5</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[96%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-700">
                        <h4 className="text-sm font-bold mb-4">Urgent Actions</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-200">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>3 Office Actions require response within 48h</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-xs text-yellow-200">
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span>8 Renewals pending for next week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
