"use client";

import React from "react";
import Link from "next/link";
import { FileText, Search, Filter, X, ChevronRight } from "lucide-react";

export default function TrademarksPage() {
    const [trademarks, setTrademarks] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [selectedTrademark, setSelectedTrademark] = React.useState<any | null>(null);
    const [viewInvoice, setViewInvoice] = React.useState<any | null>(null);

    React.useEffect(() => {
        async function fetchTrademarks() {
            try {
                const res = await fetch("/api/user/requests"); // Fetch user's requests as trademarks
                const data = await res.json();
                if (data.requests) {
                    const mapped = data.requests.map((r: any) => ({
                        ...r,
                        name: JSON.parse(r.data).markName || JSON.parse(r.data).title || r.type,
                        serialNumber: JSON.parse(r.data).serialNumber || "Pending",
                        rawData: JSON.parse(r.data)
                    }));
                    setTrademarks(mapped);
                }
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
                <Link href="/registration/new" className="bg-[#ea580c] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#c2410c] transition-colors">
                    + New Application
                </Link>
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
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => setViewInvoice(tm)}
                                                className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-1"
                                            >
                                                <FileText className="w-3 h-3" />
                                                Invoice
                                            </button>
                                            <button
                                                onClick={() => setSelectedTrademark(tm)}
                                                className="text-slate-400 hover:text-[#ea580c] transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Details (Premium Invoice) Modal */}
            {selectedTrademark && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 text-left">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
                        {/* Control Header */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded">Service Receipt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => window.print()}
                                    className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg transition-all" title="Print Receipt"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                                </button>
                                <button onClick={() => setSelectedTrademark(null)} className="p-2 hover:bg-white text-slate-400 hover:text-slate-600 rounded-full transition-colors">
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
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-xl font-black text-slate-900 tracking-tight underline decoration-[#ea580c] decoration-4 underline-offset-4">TradeMarkEngine</h2>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        123 Intellectual Way<br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                                <div className="text-right">
                                    <h1 className="text-4xl font-black text-slate-200 uppercase tracking-tighter mb-2">Receipt</h1>
                                    <p className="text-sm font-bold text-slate-800">Order ID: #{selectedTrademark.id.substring(0, 8).toUpperCase()}</p>
                                    <p className="text-sm text-slate-500 mt-1">Date: {new Date(selectedTrademark.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Service Identity */}
                            <div className="mb-12 py-8 border-y border-slate-100 flex justify-between items-center">
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Trademark Mark Name</h4>
                                    <p className="text-2xl font-black text-slate-900 tracking-tight">{selectedTrademark.name}</p>
                                    <p className="text-sm text-slate-500 mt-1">Serial Number: <span className="font-mono">{selectedTrademark.serialNumber || "PENDING"}</span></p>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black border border-blue-100 uppercase tracking-widest">
                                        {selectedTrademark.status}
                                    </div>
                                </div>
                            </div>

                            {/* Service Items Table */}
                            <table className="w-full mb-12">
                                <thead>
                                    <tr className="border-b-2 border-slate-900">
                                        <th className="py-4 text-left text-xs font-black text-slate-900 uppercase tracking-widest">Service Description</th>
                                        <th className="py-4 text-right text-xs font-black text-slate-900 uppercase tracking-widest">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-6">
                                            <p className="text-sm font-bold text-slate-800">{selectedTrademark.type} Package</p>
                                            <p className="text-xs text-slate-500 mt-1">Full professional filing and handling the registration process.</p>
                                        </td>
                                        <td className="py-6 text-right text-sm font-bold text-slate-800">${(selectedTrademark.rawData?.total || 0).toLocaleString()}</td>
                                    </tr>
                                    {selectedTrademark.rawData?.additionalMarkFees > 0 && (
                                        <tr>
                                            <td className="py-6">
                                                <p className="text-sm font-bold text-slate-800">Government Class Fees</p>
                                                <p className="text-xs text-slate-500 mt-1">USPTO filing fees for additional international classes.</p>
                                            </td>
                                            <td className="py-6 text-right text-sm font-bold text-slate-800">${selectedTrademark.rawData?.additionalMarkFees.toLocaleString()}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Totals Section */}
                            <div className="flex justify-end pt-8">
                                <div className="w-64 space-y-3">
                                    <div className="flex justify-between items-center pt-4 border-t-2 border-slate-900">
                                        <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Grand Total</span>
                                        <span className="text-2xl font-black text-[#ea580c]">${(selectedTrademark.rawData?.total || 0).toLocaleString()}</span>
                                    </div>
                                    <p className="text-[10px] text-right text-slate-400 font-bold uppercase tracking-widest italic pt-2">Payment Completed</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={() => setSelectedTrademark(null)}
                                className="px-10 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all text-sm"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Invoice Modal */}
            {viewInvoice && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
                        {/* Control Header */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded">Your Invoice</span>
                            <button onClick={() => setViewInvoice(null)} className="p-2 hover:bg-white text-slate-400 hover:text-slate-600 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Invoice Content */}
                        <div className="p-12 overflow-y-auto bg-white" id="user-printable-invoice">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 bg-[#ea580c] rounded-xl flex items-center justify-center text-white font-bold">T</div>
                                        <h2 className="text-xl font-black text-slate-900 tracking-tight">TradeMarkEngine</h2>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Support: 03142281115<br />
                                        trademarkengine.com
                                    </p>
                                </div>
                                <div className="text-right">
                                    <h1 className="text-3xl font-black text-slate-200 uppercase tracking-tighter mb-2">Invoice</h1>
                                    <p className="text-sm font-bold text-slate-800 tracking-tighter">Serial No: {viewInvoice.serialNumber}</p>
                                    <p className="text-sm text-slate-500 mt-1">Date: {new Date(viewInvoice.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12 mb-12 py-8 border-y border-slate-100">
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Customer Details</h4>
                                    <p className="text-sm font-bold text-slate-800">{viewInvoice.rawData?.contactInfo?.firstName} {viewInvoice.rawData?.contactInfo?.lastName}</p>
                                    <p className="text-sm text-[#ea580c] font-black mt-1 italic underline">{viewInvoice.rawData?.contactInfo?.email}</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Service Details</h4>
                                    <p className="text-sm font-bold text-slate-800">Trademark: {viewInvoice.name}</p>
                                    <p className="text-sm text-slate-500 mt-1">Status: {viewInvoice.status}</p>
                                </div>
                            </div>

                            <table className="w-full mb-12">
                                <thead className="border-b-2 border-slate-900">
                                    <tr>
                                        <th className="py-4 text-left text-xs font-black text-slate-900 uppercase">Description</th>
                                        <th className="py-4 text-right text-xs font-black text-slate-900 uppercase">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-6">
                                            <p className="text-sm font-bold text-slate-800">Trademark Registration Fee</p>
                                            <p className="text-xs text-slate-500 mt-1">Package: {viewInvoice.rawData?.selections?.package} ({viewInvoice.rawData?.selections?.speed} Speed)</p>
                                        </td>
                                        <td className="py-6 text-right text-sm font-bold text-slate-800">${(viewInvoice.rawData?.total || 0).toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex justify-end pt-8">
                                <div className="w-64 flex justify-between items-center pt-4 border-t-2 border-slate-900">
                                    <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Grand Total</span>
                                    <span className="text-2xl font-black text-[#ea580c]">${(viewInvoice.rawData?.total || 0).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button onClick={() => window.print()} className="px-6 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-white transition-all">Print</button>
                            <button onClick={() => setViewInvoice(null)} className="px-8 py-2 bg-slate-900 text-white font-bold rounded-xl text-sm">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
