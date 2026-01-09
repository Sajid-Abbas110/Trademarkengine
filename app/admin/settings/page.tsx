"use client";

import React from "react";
import {
    User,
    Bell,
    Shield,
    Lock,
    Monitor,
    Mail,
    Smartphone,
    Globe,
    Save
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminSettings() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl pb-12">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
                <p className="text-slate-500 text-sm">Manage your account preferences and system configuration</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-100 p-4 space-y-1">
                        {[
                            { label: "Profile", icon: User, active: true },
                            { label: "Notifications", icon: Bell },
                            { label: "Security", icon: Lock },
                            { label: "Role & Access", icon: Shield },
                            { label: "System", icon: Monitor },
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                className={cn(
                                    "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                    item.active
                                        ? "bg-orange-50 text-[#ea580c]"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                                )}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="flex-1 p-6 md:p-8">
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b border-slate-100">
                                <div className="w-20 h-20 rounded-2xl bg-[#ea580c] flex items-center justify-center text-white text-2xl font-bold">
                                    AU
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">Admin User</h3>
                                    <p className="text-xs text-slate-500 mt-1">Super Admin • Joined 2 months ago</p>
                                    <button className="text-xs font-bold text-[#ea580c] mt-2 hover:underline">Change photo</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="text" defaultValue="Admin User" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ea580c] outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="email" defaultValue="admin@trademarkengine.com" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ea580c] outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                                    <div className="relative">
                                        <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input type="text" defaultValue="+1 (555) 000-0000" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ea580c] outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Language</label>
                                    <div className="relative">
                                        <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <select className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#ea580c] outline-none appearance-none">
                                            <option>English (US)</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                                <button className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                    Cancel
                                </button>
                                <button className="px-6 py-2 bg-[#ea580c] text-white rounded-xl text-sm font-bold hover:bg-[#c2410c] shadow-md transition-all flex items-center gap-2">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
