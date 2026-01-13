import { Lock, Info, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Step2ExpediteProps {
    onSpeedSelect: (speed: 'standard' | 'express' | 'priority') => void;
    onNext: () => void;
    onBack: () => void;
}

type Speed = 'standard' | 'express' | 'priority';

export default function Step2Expedite({ onSpeedSelect, onNext, onBack }: Step2ExpediteProps) {
    const [speed, setSpeed] = useState<Speed>('express');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSpeedSelect(speed);
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Office Action Filing - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <h3 className="text-[#3b6d8c] font-bold text-xl mb-2 text-center">File your Office Action even faster!</h3>
                <p className="text-slate-600 mb-8 text-sm text-center max-w-2xl mx-auto">
                    Standard filings are first come, first served. Need your Office Action faster? File your application at the earliest date with expedited filing*.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Standard */}
                        <label
                            className={`relative border rounded-xl p-6 cursor-pointer bg-white transition-all ${speed === 'standard' ? 'border-[#ea580c] ring-1 ring-[#ea580c]' : 'border-slate-300 hover:border-slate-400'}`}
                            onClick={() => setSpeed('standard')}
                        >
                            <div className="text-center">
                                <h4 className="font-bold text-[#ea580c] mb-4">Standard</h4>
                                <div className="text-sm font-semibold text-slate-700 mb-6">Processing time: Up to 3 weeks</div>
                                <div className="inline-block bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-sm font-bold mb-6">$0</div>
                                <div className={`w-full py-3 rounded border text-sm flex items-center justify-center gap-2 ${speed === 'standard' ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-500'}`}>
                                    {speed === 'standard' ? <div className="w-3 h-3 bg-white border border-slate-400 rounded-full" /> : <div className="w-3 h-3 bg-white border border-slate-300 rounded-full" />}
                                    I'll wait for standard processing
                                </div>
                            </div>
                        </label>

                        {/* Express (Recommended) */}
                        <label
                            className={`relative border-2 rounded-xl p-6 cursor-pointer bg-orange-50/50 transition-all ${speed === 'express' ? 'border-[#ea580c] ring-1 ring-[#ea580c]' : 'border-[#ea580c] hover:bg-orange-50'}`}
                            onClick={() => setSpeed('express')}
                        >
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#ea580c] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Recommended
                            </div>
                            <div className="text-center pt-2">
                                <h4 className="font-bold text-[#ea580c] mb-4">Express</h4>
                                <div className="text-sm font-semibold text-slate-700 mb-6">Processing time: Up to 5 days <Info className="inline w-3 h-3 text-red-500" /></div>
                                <div className="inline-block bg-[#fbdabb] text-[#ea580c] px-4 py-1 rounded-full text-sm font-bold mb-6">$50</div>
                                <div className={`w-full py-3 rounded border text-sm font-bold flex items-center justify-center gap-2 ${speed === 'express' ? 'bg-[#fbdabb] text-[#ea580c] border-[#ea580c]' : 'bg-white text-slate-500 border-slate-300'}`}>
                                    {speed === 'express' && <CheckCircle className="w-4 h-4" />}
                                    File Faster
                                </div>
                            </div>
                        </label>

                        {/* Priority */}
                        <label
                            className={`relative border rounded-xl p-6 cursor-pointer bg-white transition-all ${speed === 'priority' ? 'border-[#ea580c] ring-1 ring-[#ea580c]' : 'border-slate-300 hover:border-slate-400'}`}
                            onClick={() => setSpeed('priority')}
                        >
                            <div className="text-center">
                                <h4 className="font-bold text-[#ea580c] mb-4">Priority</h4>

                                <div className="text-sm font-semibold text-slate-700 mb-6 flex items-center justify-center gap-1">
                                    Processing time: 48 hours <Info className="w-3 h-3 text-red-500" />
                                </div>
                                <div className="inline-block bg-[#fbdabb] text-[#ea580c] px-4 py-1 rounded-full text-sm font-bold mb-6">$100</div>
                                <div className={`w-full py-3 rounded border text-sm flex items-center justify-center gap-2 ${speed === 'priority' ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-500'}`}>
                                    {speed === 'priority' ? <div className="w-3 h-3 bg-white border border-slate-400 rounded-full" /> : <div className="w-3 h-3 bg-white border border-slate-300 rounded-full" />}
                                    File ASAP
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Navigation/Submit */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 pt-4 border-t border-slate-200/50">
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Lock className="w-4 h-4" />
                            <span>Click on "Continue" to save your application.</span>
                        </div>

                        <div className="flex gap-4 items-center">
                            <button
                                type="button"
                                onClick={onBack}
                                className="text-[#3b6d8c] font-bold text-sm hover:underline uppercase tracking-wide flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Previous
                            </button>

                            <button
                                type="submit"
                                className="bg-[#ea580c] text-white font-bold py-3 px-8 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-sm tracking-wide"
                            >
                                Continue
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-[10px] text-slate-500 mt-4 leading-relaxed tracking-tight">
                *Our processing times are calculated based on business days and exclude government processing times. Requests for non-final Office Action assistance that are made less than 2 business days before the due date of the Office Action response shall be assessed the USPTO's $150 petition revival fee. Requests for final Office Action assistance that are made less than 2 business days before the due date of the Office Action response shall not be considered. Once we prepare your application documents, we'll submit your application to the USPTO. If you are concerned about a deadline, you may want to call before placing your order.
                <br /><br />
                Trademark Engine is not a law firm and does not provide legal advice. Any communication between you and Trademark Engine is not protected by the attorney-client privilege. Any information you submit through Trademark Engine during a request for attorney-assisted services will not be protected by the attorney-client privilege. To the extent legal services are provided in connection with this order, they will be provided by the lawyers at Swyft Legal and not Trademark Engine. Attorneys at Swyft Legal and their support staff will follow up with you with questions about your order.
                <br /><br />
                Powered by <span className="font-bold">swyftLegal</span>
            </div>
        </div>
    );
}
