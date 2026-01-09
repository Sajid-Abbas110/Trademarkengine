"use client";

import React, { useState } from "react";
import {
    Users,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    ExternalLink,
    Plus,
    ArrowUpDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Customer", joined: "2023-11-12", orders: 3, avatar: "JD" },
    { id: 2, name: "Sarah Smith", email: "sarah.s@gmail.com", status: "Active", role: "Customer", joined: "2023-10-05", orders: 1, avatar: "SS" },
    { id: 3, name: "Mike Johnson", email: "mikej@corp.com", status: "Inactive", role: "Customer", joined: "2023-09-20", orders: 0, avatar: "MJ" },
    { id: 4, name: "Elena Rodriguez", email: "elena@design.es", status: "Active", role: "Customer", joined: "2023-12-01", orders: 2, avatar: "ER" },
    { id: 5, name: "Robert Wilson", email: "rob@wilson.io", status: "Pending", role: "Staff", joined: "2024-01-02", orders: 0, avatar: "RW" },
    { id: 6, name: "Alice Brown", email: "alice@tech.com", status: "Active", role: "Customer", joined: "2023-08-15", orders: 5, avatar: "AB" },
    { id: 7, name: "David Miller", email: "david@miller.net", status: "Active", role: "Customer", joined: "2023-07-22", orders: 1, avatar: "DM" },
];

export default function UserTracking() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">User Tracking</h2>
                    <p className="text-slate-500 text-sm">Manage and monitor all system users</p>
                </div>
                <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New User
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search users by name or email..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c] outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors w-full md:w-auto">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors w-full md:w-auto">
                        <ArrowUpDown className="w-4 h-4" />
                        Sort
                    </button>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Orders</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-800">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                            user.status === "Active" ? "bg-green-100 text-green-700" :
                                                user.status === "Inactive" ? "bg-red-100 text-red-700" :
                                                    "bg-yellow-100 text-yellow-700"
                                        )}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{user.role}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                            {user.joined}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div>
                                            <span className="text-sm font-bold text-slate-700">{user.orders}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination approximation */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
                    <p>Showing {filteredUsers.length} of {usersData.length} users</p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white bg-white font-bold text-[#ea580c]">1</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
