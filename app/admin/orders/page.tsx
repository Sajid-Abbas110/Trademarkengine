"use client";

import React, { useState } from "react";
import {
    Package,
    Search,
    Filter,
    Clock,
    CheckCircle2,
    AlertCircle,
    FileText,
    MessageSquare,
    ChevronRight,
    TrendingUp,
    History,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";

const ordersData = [
    {
        id: "TRD-4521",
        customer: "Sarah Smith",
        service: "Trademark Registration",
        date: "Jan 05, 2024",
        status: "Processing",
        progress: 45,
        stage: "Legal Review",
        priority: "High"
    },
    {
        id: "TRD-4522",
        customer: "John Doe",
        service: "Trademark Monitoring",
        date: "Jan 06, 2024",
        status: "Active",
        progress: 100,
        stage: "Monitoring",
        priority: "Medium"
    },
    {
        id: "TRD-4523",
        customer: "Apex Corp",
        service: "Comprehensive Search",
        date: "Jan 07, 2024",
        status: "Pending",
        progress: 15,
        stage: "Researching",
        priority: "Critical"
    },
    {
        id: "TRD-4524",
        customer: "Elena Rodriguez",
        service: "DMCA Takedown",
        date: "Jan 07, 2024",
        status: "Completed",
        progress: 100,
        stage: "Finalized",
        priority: "Medium"
    },
    {
        id: "TRD-4525",
        customer: "Robert Wilson",
        service: "Trademark Renewal",
        date: "Jan 08, 2024",
        status: "Action Required",
        progress: 60,
        stage: "Awaiting Docs",
        priority: "High"
    },
];

const statusStyles = {
    "Processing": "bg-blue-100 text-blue-700",
    "Active": "bg-emerald-100 text-emerald-700",
    "Pending": "bg-orange-100 text-orange-700",
    "Completed": "bg-slate-100 text-slate-700",
    "Action Required": "bg-red-100 text-red-700",
};

export default function OrderTracking() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeOrder, setActiveOrder] = useState<null | string>(null);

    const filteredOrders = ordersData.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.service.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Order Tracking</h2>
                    <p className="text-slate-500 text-sm">Monitor registration stages and service delivery</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                        <History className="w-4 h-4" />
                        Order History
                    </button>
                    <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Reports
                    </button>
                </div>
            </div>

            {/* Stats Mini Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Active Orders", value: "24", icon: Package, color: "text-blue-600" },
                    { label: "Pending Review", value: "08", icon: Clock, color: "text-orange-600" },
                    { label: "Action Required", value: "03", icon: AlertCircle, color: "text-red-600" },
                    { label: "Completed Today", value: "12", icon: CheckCircle2, color: "text-emerald-600" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className={cn("p-2 rounded-lg bg-slate-50", item.color)}>
                            <item.icon className="w-5 h-5 shadow-sm" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                            <p className="text-lg font-bold text-slate-800">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search & Filters */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search by Order ID, Customer..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#ea580c] outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 w-full md:w-auto justify-center">
                        <Filter className="w-4 h-4" />
                        Status: All
                    </button>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-[#ea580c]/30 transition-colors">
                            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-6">
                                {/* Basic Info */}
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">#{order.id}</span>
                                        <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded", statusStyles[order.status as keyof typeof statusStyles])}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-slate-800">{order.service}</h3>
                                    <p className="text-xs font-medium text-slate-500">Customer: <span className="text-slate-700">{order.customer}</span> • {order.date}</p>
                                </div>

                                {/* Progress */}
                                <div className="flex-[1.5] space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs font-bold text-slate-700">Current Stage: {order.stage}</span>
                                        <span className="text-xs font-bold text-slate-400">{order.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={cn(
                                                "h-full transition-all duration-1000",
                                                order.status === "Action Required" ? "bg-red-500" : "bg-[#ea580c]"
                                            )}
                                            style={{ width: `${order.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 md:ml-4">
                                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Add internal note">
                                        <MessageSquare className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all" title="View documents">
                                        <FileText className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setActiveOrder(order.id)}
                                        className="flex items-center gap-1 px-4 py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-100 transition-all border border-slate-200"
                                    >
                                        Manage
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500 italic">No orders found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Manage Modal Simulation */}
            {activeOrder && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">Order Management</h3>
                                <p className="text-sm text-[#ea580c] font-bold">#{activeOrder}</p>
                            </div>
                            <button
                                onClick={() => setActiveOrder(null)}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Update Status</h4>
                                    <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium">
                                        <option>Processing</option>
                                        <option>Action Required</option>
                                        <option>Completed</option>
                                        <option>Active</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Priority Level</h4>
                                    <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium">
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Critical</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Internal Logistics Notes</h4>
                                <textarea
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] min-h-[120px] text-sm"
                                    placeholder="Provide updates or internal instructions for this filing..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button
                                onClick={() => setActiveOrder(null)}
                                className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setActiveOrder(null)}
                                className="px-8 py-2 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] hover:shadow-orange-200 transition-all text-sm"
                            >
                                Update Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
