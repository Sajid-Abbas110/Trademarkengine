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

const transactions = [
    { id: "TXN-8842", customer: "Sarah Smith", amount: "$499.00", status: "Successful", method: "Visa •••• 4242", date: "Jan 07, 2024", type: "Payment" },
    { id: "TXN-8841", customer: "John Doe", amount: "$99.00", status: "Successful", method: "Mastercard •••• 5555", date: "Jan 06, 2024", type: "Renewal" },
    { id: "TXN-8840", customer: "Apex Corp", amount: "$1,200.00", status: "Pending", method: "Bank Transfer", date: "Jan 06, 2024", type: "Bulk Filing" },
    { id: "TXN-8839", customer: "Mike Johnson", amount: "$499.00", status: "Successful", method: "Visa •••• 1111", date: "Jan 05, 2024", type: "Payment" },
    { id: "TXN-8838", customer: "Elena Rodriguez", amount: "$250.00", status: "Refunded", method: "Visa •••• 4242", date: "Jan 04, 2024", type: "Refund" },
];

export default function PaymentTracking() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTransactions = transactions.filter(txn =>
        txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Payment Tracking</h2>
                    <p className="text-slate-500 text-sm">Review transactions and revenue metrics</p>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2">
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
                    <p className="text-sm font-medium text-slate-500">Monthly Revenue</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">$12,450.00</h3>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            <ArrowUpRight className="w-3 h-3 mr-0.5" />
                            12%
                        </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-slate-400">
                        <p className="text-[10px] font-medium">+14 new payments today</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-600">
                        <Wallet className="w-16 h-16 fill-current" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Pending Settlements</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">$3,200.00</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            5 items
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group text-purple-600">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <Activity className="w-16 h-16" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Refund Rate</p>
                    <div className="flex items-end gap-3 mt-1">
                        <h3 className="text-3xl font-bold text-slate-800">0.8%</h3>
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex items-center mb-1">
                            <ArrowDownRight className="w-3 h-3 mr-0.5" />
                            0.2%
                        </span>
                    </div>
                    <p className="mt-4 text-[10px] text-slate-400 font-medium italic">Performance: Optimal</p>
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
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-4 text-xs font-bold text-[#ea580c]">{txn.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs font-bold text-slate-800">{txn.customer}</div>
                                            <div className="text-[10px] text-slate-400">{txn.type}</div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-500">{txn.date}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-slate-800">{txn.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center w-fit gap-1",
                                                txn.status === "Successful" ? "bg-green-100 text-green-700" :
                                                    txn.status === "Pending" ? "bg-orange-100 text-orange-700" :
                                                        "bg-red-100 text-red-700"
                                            )}>
                                                {txn.status === "Successful" && <CheckCircle2 className="w-2.5 h-2.5" />}
                                                {txn.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[10px] text-slate-500">{txn.method}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
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
