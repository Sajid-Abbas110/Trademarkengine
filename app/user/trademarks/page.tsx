"use client";

import React from "react";
import { FileText, Search, Filter } from "lucide-react";

export default function TrademarksPage() {
    const [trademarks, setTrademarks] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchTrademarks() {
            try {
                const res = await fetch("/api/user/trademarks");
                const data = await res.json();
                if (data.trademarks) setTrademarks(data.trademarks);
            } catch (error) {
                console.error("Failed to fetch trademarks", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTrademarks();
    }, []);

    if (isLoading) {
        return <div className="p-8 text-center text-slate-500">Loading trademarks...</div>;
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">My Trademarks</h2>
                    <p className="text-slate-500">Manage and view details of your filed trademarks.</p>
                </div>
                <button className="bg-[#ea580c] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#c2410c] transition-colors">
                    + New Application
                </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4">
                <div className="relative flex-1">
                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search by name, serial number, or status..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
                    <Filter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                        <tr>
                            <th className="px-6 py-4 font-bold">Trademark</th>
                            <th className="px-6 py-4 font-bold">Serial No.</th>
                            <th className="px-6 py-4 font-bold">Status</th>
                            <th className="px-6 py-4 font-bold">Filing Date</th>
                            <th className="px-6 py-4 font-bold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {trademarks.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                    No trademarks found. Start a new application to see it here.
                                </td>
                            </tr>
                        ) : (
                            trademarks.map((tm) => (
                                <tr key={tm.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#ea580c]">
                                                <FileText className="w-4 h-4" />
                                            </div>
                                            <span className="font-bold text-slate-800">{tm.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-mono">{tm.serialNumber || "-"}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-bold uppercase border border-blue-100">
                                            {tm.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">
                                        {new Date(tm.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-sm font-bold text-slate-400 hover:text-[#ea580c]">Details</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
