"use client";

import React, { useState } from "react";
import {
    CreditCard,
    Search,
    Download,
    ArrowUpRight,
    ArrowDownRight,
    Filter,
    MoreHorizontal,
    DollarSign,
    Wallet,
    Activity,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PaymentTracking() {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [statsData, setStatsData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    React.useEffect(() => {
        async function fetchPayments() {
            try {
                const res = await fetch("/api/admin/requests");
                const data = await res.json();
                if (data.requests) {
                    const mappedTxns = data.requests.map((req: any) => {
                        let total = 0;
                        try {
                            const parsedData = JSON.parse(req.data);
                            total = Number(parsedData.total) || 0;
                        } catch (e) { }

                        return {
                            id: `TXN-${req.id.split('-').pop()?.toUpperCase() || req.id.substring(0, 4)}`,
                            fullId: req.id,
                            customer: req.user?.name || req.user?.email || "Guest",
                            amount: `$${total.toLocaleString()}`,
                            status: req.status === "COMPLETED" ? "Successful" : (req.status === "REFUNDED" ? "Refunded" : (req.status === "REJECTED" ? "Rejected" : "Pending")),
                            method: "Invoice Payment",
                            date: new Date(req.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                            type: req.type
                        };
                    });
                    setTransactions(mappedTxns);
                }
                if (data.stats) {
                    setStatsData(data.stats);
                }
            } catch (error) {
                console.error("Failed to fetch payments", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPayments();
    }, []);

    const filteredTransactions = transactions.filter(txn =>
        txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleExportLedger = () => {
        if (transactions.length === 0) {
            alert("No transactions to export");
            return;
        }

        const headers = ["ID", "Customer", "Amount", "Status", "Method", "Date", "Type"];
        const csvContent = [
            headers.join(","),
            ...transactions.map(t => [
                t.id,
                `"${t.customer}"`,
                t.amount.replace("$", ""),
                t.status,
                t.method,
                t.date,
                t.type
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `TradeMarkEngine_Ledger_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Payment Tracking</h2>
                    <p className="text-slate-500 text-sm">Review transactions and revenue metrics</p>
                </div>
                <button
                    onClick={handleExportLedger}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    Export Ledger
                </button>
            </div>

            {/* Revenue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-[#ea580c]">
                        <DollarSign className="w-16 h-16 fill-current" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Gross Volume</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">${statsData?.totalVolume?.toLocaleString() || "0"}</h3>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            <ArrowUpRight className="w-3 h-3 mr-0.5" />
                            Live
                        </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-slate-400">
                        <p className="text-[10px] font-medium">Total accumulated across all services</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-600">
                        <Wallet className="w-16 h-16 fill-current" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Pending Invoices</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">{statsData?.pendingRequests || "0"}</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            Requests
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group text-purple-600">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Activity className="w-16 h-16" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Total Transactions</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">{statsData?.totalRequests || "0"}</h3>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            <ArrowUpRight className="w-3 h-3 mr-0.5" />
                            Active
                        </span>
                    </div>
                    <p className="mt-4 text-[10px] text-slate-400 font-medium italic">Updates in real-time</p>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        Recent Transactions
                        <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Real-time</span>
                    </h3>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="TXN ID..."
                                className="pl-8 pr-3 py-1.5 border border-slate-200 rounded text-xs outline-none focus:ring-1 focus:ring-[#ea580c] w-32 shadow-sm focus:w-48 transition-all duration-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50">
                            <Filter className="w-3.5 h-3.5 text-slate-500" />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Method</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-24 text-slate-400 text-sm italic">Loading transactions...</td>
                                </tr>
                            ) : filteredTransactions.length > 0 ? (
                                filteredTransactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-4 text-xs font-bold text-[#ea580c]">{txn.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs font-bold text-slate-800">{txn.customer}</div>
                                            <div className="text-[10px] text-slate-400">{txn.type}</div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-500">{txn.date}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-slate-800">
                                            {txn.status === "Refunded" ? (
                                                <span className="text-red-500 line-through decoration-red-500/50">{txn.amount}</span>
                                            ) : (
                                                txn.amount
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center w-fit gap-1",
                                                txn.status === "Successful" ? "bg-green-100 text-green-700" :
                                                    txn.status === "Pending" ? "bg-orange-100 text-orange-700" :
                                                        "bg-red-100 text-red-700"
                                            )}>
                                                {txn.status === "Successful" && <CheckCircle2 className="w-2.5 h-2.5" />}
                                                {txn.status === "Refunded" ? "REFUNDED" : txn.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[10px] text-slate-500">{txn.method}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {txn.status === "Successful" && (
                                                    <button
                                                        onClick={async () => {
                                                            if (!confirm(`Are you sure you want to refund order ${txn.id}? This will remove it from revenue stats.`)) return;
                                                            try {
                                                                const res = await fetch(`/api/admin/requests/${txn.fullId}`, {
                                                                    method: "PATCH",
                                                                    headers: { "Content-Type": "application/json" },
                                                                    body: JSON.stringify({ status: "REFUNDED" })
                                                                });
                                                                if (res.ok) {
                                                                    alert("Refund processed successfully");
                                                                    // Simple reload to refresh data
                                                                    window.location.reload();
                                                                } else {
                                                                    alert("Failed to process refund");
                                                                }
                                                            } catch (e) {
                                                                console.error(e);
                                                                alert("Error processing refund");
                                                            }
                                                        }}
                                                        className="px-2 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 text-[10px] font-bold border border-red-200"
                                                    >
                                                        Refund
                                                    </button>
                                                )}
                                                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-24 text-slate-400 text-sm bg-white rounded-b-xl border-dashed border-2 border-slate-100 italic">
                                        No transactions found matching "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
