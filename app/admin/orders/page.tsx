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
    X,
    Download,
    DollarSign,
    BarChart3,
    ArrowUpDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const statusStyles = {
    "Processing": "bg-blue-100 text-blue-700",
    "Active": "bg-emerald-100 text-emerald-700",
    "Pending": "bg-orange-100 text-orange-700",
    "Completed": "bg-slate-100 text-slate-700",
    "Action Required": "bg-red-100 text-red-700",
};

export default function OrderTracking() {
    const [orders, setOrders] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeOrder, setActiveOrder] = useState<any | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Filter & Sort State
    const [filterStatus, setFilterStatus] = useState("All");
    const [sortOrder, setSortOrder] = useState("newest");

    // Management form state
    const [editStatus, setEditStatus] = useState("");
    const [editPriority, setEditPriority] = useState("Medium");
    const [editNotes, setEditNotes] = useState("");

    // Modal states
    const [viewDocOrder, setViewDocOrder] = useState<any | null>(null);
    const [showNotificationOrder, setShowNotificationOrder] = useState<any | null>(null);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [isNotifying, setIsNotifying] = useState(false);

    // View View State
    const [showHistory, setShowHistory] = useState(false);
    const [showReports, setShowReports] = useState(false);

    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/requests");
            const data = await res.json();
            if (data.requests) {
                // Map API requests to UI orders
                const mappedOrders = data.requests.map((req: any) => {
                    const statusMap: Record<string, string> = {
                        "PENDING": "Pending",
                        "PROCESSING": "Processing",
                        "COMPLETED": "Completed",
                        "REFUNDED": "Refunded",
                        "REJECTED": "Action Required",
                        "INVOICE_GENERATED": "Pending"
                    };

                    return {
                        id: req.id.split('-').pop()?.toUpperCase() || req.id.substring(0, 8),
                        fullId: req.id,
                        customer: req.user?.name || req.user?.email || "Guest",
                        service: req.type === "TRADEMARK" ? "Trademark Registration" : (req.type === "MONITORING" ? "Trademark Monitoring" : req.type),
                        date: new Date(req.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                        status: statusMap[req.status] || "Active",
                        progress: req.status === "COMPLETED" ? 100 : (req.status === "PROCESSING" ? 60 : 15),
                        stage: req.status === "COMPLETED" ? "Finalized" : (req.status === "PROCESSING" ? "Filing" : "Researching"),
                        priority: "Medium",
                        userId: req.userId,
                        rawData: req.data ? JSON.parse(req.data) : {}
                    };
                });
                setOrders(mappedOrders);
            }
        } catch (error) {
            console.error("Failed to fetch admin requests", error);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const handleUpdateOrder = async () => {
        if (!activeOrder) return;

        setIsUpdating(true);
        try {
            // Reverse status mapping
            const reverseStatusMap: Record<string, string> = {
                "Pending": "PENDING",
                "Processing": "PROCESSING",
                "Completed": "COMPLETED",
                "Action Required": "REJECTED",
                "Active": "PROCESSING"
            };

            const response = await fetch(`/api/admin/requests/${activeOrder.fullId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: reverseStatusMap[editStatus] || "PENDING",
                    notes: editNotes
                })
            });

            const data = await response.json();

            if (response.ok) {
                setActiveOrder(null);
                fetchOrders();
            } else {
                alert(`Failed to update order: ${data.error || "Unknown error"}\n${data.details || ""}`);
            }
        } catch (error: any) {
            console.error("Error updating order", error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsUpdating(false);
        }
    };

    const openManageModal = (order: any) => {
        setActiveOrder(order);
        setEditStatus(order.status);
        setEditPriority(order.priority);
        setEditNotes(""); // Could fetch from API if we add a notes field
    };

    const filteredOrders = orders.filter((order: any) => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.service.toLowerCase().includes(searchTerm.toLowerCase());

        // New Filter Logic
        let matchesFilter = true;
        if (filterStatus === "Active") matchesFilter = (order.status === "Active" || order.status === "Processing" || order.status === "Pending");
        if (filterStatus === "Pending") matchesFilter = order.status === "Pending" || order.status === "Processing";
        if (filterStatus === "Action Required") matchesFilter = order.status === "Action Required";
        if (filterStatus === "Completed") matchesFilter = order.status === "Completed";

        // If showHistory is toggled ON, strictly show completed. 
        if (showHistory && filterStatus === "All") {
            matchesFilter = order.status === "Completed";
        }

        return matchesSearch && matchesFilter;
    }).sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    // Report Calculations
    const totalRevenue = orders.reduce((acc, order) => {
        if (order.status === "Action Required" || order.status === "Refunded") return acc;
        return acc + (order.rawData?.total || 0);
    }, 0);
    const completedOrders = orders.filter(o => o.status === "Completed").length;
    const pendingOrders = orders.filter(o => o.status === "Pending" || o.status === "Processing").length;

    const downloadCSV = () => {
        const headers = ["Order ID", "Date", "Customer", "Service", "Status", "Total Amount"];
        const rows = orders.map(o => [
            o.id,
            o.date,
            o.customer,
            o.service,
            o.status,
            `"${o.rawData?.total || 0}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8,"
            + headers.join(",") + "\n"
            + rows.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `orders_report_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Order Tracking</h2>
                    <p className="text-slate-500 text-sm">Monitor registration stages and service delivery</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className={cn(
                            "px-4 py-2 border rounded-lg text-sm font-bold transition-colors flex items-center gap-2",
                            showHistory
                                ? "bg-slate-800 text-white border-slate-800"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        )}
                    >
                        <History className="w-4 h-4" />
                        {showHistory ? "Active Orders" : "Order History"}
                    </button>
                    <button
                        onClick={() => setShowReports(true)}
                        className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
                    >
                        <TrendingUp className="w-4 h-4" />
                        Reports
                    </button>
                </div>
            </div>

            {/* Stats Mini Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Active Orders", value: orders.filter(o => o.status === "Active" || o.status === "Processing").length, icon: Package, color: "text-blue-600", filter: "Active" },
                    { label: "Pending Review", value: orders.filter(o => o.status === "Pending").length, icon: Clock, color: "text-orange-600", filter: "Pending" },
                    { label: "Action Required", value: orders.filter(o => o.status === "Action Required").length, icon: AlertCircle, color: "text-red-600", filter: "Action Required" },
                    { label: "Completed Today", value: orders.filter(o => o.status === "Completed").length, icon: CheckCircle2, color: "text-emerald-600", filter: "Completed" }, // Note: "Today" logic would require date parsing, keeping simple count for now or matching label intent
                ].map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setFilterStatus(filterStatus === item.filter ? "All" : item.filter);
                            setShowHistory(false); // Reset history toggle if clicking specific filter
                        }}
                        className={cn(
                            "p-4 rounded-xl border shadow-sm flex items-center gap-4 transition-all text-left",
                            filterStatus === item.filter
                                ? "border-[#ea580c] ring-1 ring-[#ea580c] bg-orange-50/30"
                                : "border-slate-200 bg-white hover:border-[#ea580c]/50"
                        )}
                    >
                        <div className={cn("p-2 rounded-lg bg-slate-50", item.color)}>
                            <item.icon className="w-5 h-5 shadow-sm" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                            <p className="text-lg font-bold text-slate-800">{item.value}</p>
                        </div>
                    </button>
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
                <div className="flex gap-2 w-full md:w-auto items-center">
                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="appearance-none pl-9 pr-8 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 focus:ring-2 focus:ring-[#ea580c] outline-none cursor-pointer"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                        <ArrowUpDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <button
                        onClick={() => setFilterStatus("All")}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium w-full md:w-auto justify-center transition-colors",
                            filterStatus === "All"
                                ? "bg-slate-800 text-white border-slate-800"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        )}
                    >
                        <Filter className="w-4 h-4" />
                        Status: {filterStatus}
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
                                    <button
                                        onClick={() => setShowNotificationOrder(order)}
                                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Add internal note"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewDocOrder(order)}
                                        className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all" title="View documents"
                                    >
                                        <FileText className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => openManageModal(order)}
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

            {/* Manage Modal */}
            {activeOrder && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">Order Management</h3>
                                <p className="text-sm text-[#ea580c] font-bold">#{activeOrder.id}</p>
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
                                    <select
                                        value={editStatus}
                                        onChange={(e) => setEditStatus(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium"
                                    >
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Action Required</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Priority Level</h4>
                                    <select
                                        value={editPriority}
                                        onChange={(e) => setEditPriority(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium"
                                    >
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
                                    value={editNotes}
                                    onChange={(e) => setEditNotes(e.target.value)}
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
                                onClick={handleUpdateOrder}
                                disabled={isUpdating}
                                className="px-8 py-2 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] hover:shadow-orange-200 transition-all text-sm disabled:opacity-50"
                            >
                                {isUpdating ? "Updating..." : "Update Order"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* View Documents (Premium Invoice) Modal */}
            {viewDocOrder && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
                        {/* Control Header */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded">Draft Invoice</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => window.print()}
                                    className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg transition-all" title="Print Invoice"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                                </button>
                                <button onClick={() => setViewDocOrder(null)} className="p-2 hover:bg-white text-slate-400 hover:text-slate-600 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Invoice Content */}
                        <div className="p-12 overflow-y-auto bg-white" id="printable-invoice">
                            {/* Branding & Header */}
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 bg-[#ea580c] rounded-xl flex items-center justify-center text-white">
                                            <Package className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-xl font-black text-slate-900 tracking-tight underline decoration-[#ea580c] decoration-4 underline-offset-4">TradeMarkEngine</h2>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        123 Intellectual Way<br />
                                        Suite 500, Legal Plaza<br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                                <div className="text-right">
                                    <h1 className="text-4xl font-black text-slate-200 uppercase tracking-tighter mb-2">Invoice</h1>
                                    <p className="text-sm font-bold text-slate-800">Order ID: #{viewDocOrder.id.substring(0, 8).toUpperCase()}</p>
                                    <p className="text-sm text-slate-500 mt-1">Date: {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Billing Info */}
                            <div className="grid grid-cols-2 gap-12 mb-12 py-8 border-y border-slate-100">
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Billed To</h4>
                                    <p className="text-sm font-bold text-slate-800">{viewDocOrder.customer}</p>
                                    <p className="text-sm text-slate-500 mt-1">{viewDocOrder.rawData?.contactInfo?.email || "No email provided"}</p>
                                    <p className="text-sm text-slate-500">{viewDocOrder.rawData?.contactInfo?.phone || ""}</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Service Details</h4>
                                    <p className="text-sm font-bold text-slate-800">{viewDocOrder.service}</p>
                                    <p className="text-sm text-slate-500 mt-1">Priority: {viewDocOrder.priority}</p>
                                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-md text-[10px] font-bold border border-green-100 uppercase">
                                        Status: {viewDocOrder.status}
                                    </div>
                                </div>
                            </div>

                            {/* Service Items Table */}
                            <table className="w-full mb-12">
                                <thead>
                                    <tr className="border-b-2 border-slate-900">
                                        <th className="py-4 text-left text-xs font-black text-slate-900 uppercase tracking-widest">Description</th>
                                        <th className="py-4 text-center text-xs font-black text-slate-900 uppercase tracking-widest">Qty</th>
                                        <th className="py-4 text-right text-xs font-black text-slate-900 uppercase tracking-widest">Price</th>
                                        <th className="py-4 text-right text-xs font-black text-slate-900 uppercase tracking-widest">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-6">
                                            <p className="text-sm font-bold text-slate-800">{viewDocOrder.service} Application</p>
                                            <p className="text-xs text-slate-500 mt-1">Full professional filing and search for {viewDocOrder.rawData?.markName || "specified mark"}</p>
                                        </td>
                                        <td className="py-6 text-center text-sm text-slate-600">1</td>
                                        <td className="py-6 text-right text-sm text-slate-600">${(viewDocOrder.rawData?.total || 0).toLocaleString()}</td>
                                        <td className="py-6 text-right text-sm font-bold text-slate-800">${(viewDocOrder.rawData?.total || 0).toLocaleString()}</td>
                                    </tr>
                                    {viewDocOrder.rawData?.additionalMarkFees > 0 && (
                                        <tr>
                                            <td className="py-6">
                                                <p className="text-sm font-bold text-slate-800">Additional Class Fees</p>
                                                <p className="text-xs text-slate-500 mt-1">Government filing fees for additional classes</p>
                                            </td>
                                            <td className="py-6 text-center text-sm text-slate-600">1</td>
                                            <td className="py-6 text-right text-sm text-slate-600">${viewDocOrder.rawData?.additionalMarkFees.toLocaleString()}</td>
                                            <td className="py-6 text-right text-sm font-bold text-slate-800">${viewDocOrder.rawData?.additionalMarkFees.toLocaleString()}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Totals Section */}
                            <div className="flex justify-end pt-8">
                                <div className="w-64 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Subtotal:</span>
                                        <span className="font-bold text-slate-800">${(viewDocOrder.rawData?.total || 0).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Processing Fee:</span>
                                        <span className="font-bold text-slate-800">$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t-2 border-slate-900">
                                        <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Grand Total</span>
                                        <span className="text-2xl font-black text-[#ea580c]">${(viewDocOrder.rawData?.total || 0).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="mt-20 pt-12 border-t border-slate-100 text-center">
                                <p className="text-xs text-slate-400 font-medium">Thank you for choosing TradeMarkEngine. This is a computer-generated document and does not require a physical signature.</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={() => setViewDocOrder(null)}
                                className="px-10 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all text-sm"
                            >
                                Close Document
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Notification Modal */}
            {showNotificationOrder && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-800">Send Notification</h3>
                            <button onClick={() => setShowNotificationOrder(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-sm text-slate-500">To: <span className="font-bold text-slate-800">{showNotificationOrder.customer}</span></p>
                            <textarea
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] min-h-[150px] text-sm"
                                placeholder="Write your message here..."
                                value={notificationMessage}
                                onChange={(e) => setNotificationMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button
                                onClick={() => setShowNotificationOrder(null)}
                                className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={async () => {
                                    if (!notificationMessage.trim()) return;
                                    setIsNotifying(true);
                                    try {
                                        const res = await fetch("/api/admin/messages", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({
                                                serviceRequestId: showNotificationOrder.fullId,
                                                receiverId: showNotificationOrder.userId,
                                                content: notificationMessage
                                            })
                                        });

                                        if (res.ok) {
                                            alert(`Notification sent successfully to ${showNotificationOrder.customer}`);
                                            setShowNotificationOrder(null);
                                            setNotificationMessage("");
                                        } else {
                                            const error = await res.json();
                                            alert(`Failed to send: ${error.error || "Unknown error"}`);
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        alert("An error occurred while sending the notification.");
                                    } finally {
                                        setIsNotifying(false);
                                    }
                                }}
                                disabled={isNotifying || !notificationMessage.trim()}
                                className="px-10 py-2 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all text-sm disabled:opacity-50"
                            >
                                {isNotifying ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Reports Modal */}
            {showReports && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">Performance Reports</h3>
                                <p className="text-sm text-slate-500">Overview of order metrics and financial data</p>
                            </div>
                            <button onClick={() => setShowReports(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="p-8">
                            {/* Key Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <Package className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Orders</span>
                                    </div>
                                    <p className="text-3xl font-black text-slate-800">{orders.length}</p>
                                    <div className="mt-2 text-xs font-medium text-slate-500 flex gap-2">
                                        <span className="text-emerald-600 font-bold">{completedOrders} Completed</span>
                                        <span>•</span>
                                        <span className="text-orange-600 font-bold">{pendingOrders} Active</span>
                                    </div>
                                </div>

                                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Revenue</span>
                                    </div>
                                    <p className="text-3xl font-black text-slate-800">${totalRevenue.toLocaleString()}</p>
                                    <p className="text-xs text-slate-500 mt-1">Gross revenue from all orders</p>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Conversion</span>
                                    </div>
                                    <p className="text-3xl font-black text-slate-800">
                                        {orders.length > 0 ? Math.round((completedOrders / orders.length) * 100) : 0}%
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">Completion rate</p>
                                </div>
                            </div>

                            {/* Export Section */}
                            <div className="bg-slate-900 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-lg font-bold">Export Order Data</h4>
                                    <p className="text-slate-400 text-sm mt-1">Download a complete CSV report of all orders, including status and financial details.</p>
                                </div>
                                <button
                                    onClick={downloadCSV}
                                    className="px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-orange-900/20"
                                >
                                    <Download className="w-5 h-5" />
                                    Download CSV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
