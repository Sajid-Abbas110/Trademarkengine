import { Lock, Info, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Step4ExpediteProps {
    onNext: () => void;
    onBack: () => void;
}

type Speed = 'standard' | 'express' | 'same-day';

export default function Step4Expedite({ onNext, onBack }: Step4ExpediteProps) {
    const [speed, setSpeed] = useState<Speed>('express');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Renewal Registration Process - <span className="text-[#3b6d8c]">Step 4</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <h3 className="text-[#3b6d8c] font-bold text-xl mb-2 text-center">File your Trademark Renewal even faster!</h3>
                <p className="text-slate-600 mb-8 text-sm text-center max-w-2xl mx-auto">
                    Standard filings are first come, first served. Need your Trademark Renewal faster? File your application at the earliest date with expedited filing*.
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
                                <div className="text-sm font-semibold text-slate-700 mb-6">Processing time: Up to 5 days</div>
                                <div className="inline-block bg-[#fbdabb] text-[#ea580c] px-4 py-1 rounded-full text-sm font-bold mb-6">$50</div>
                                <div className={`w-full py-3 rounded border text-sm font-bold flex items-center justify-center gap-2 ${speed === 'express' ? 'bg-[#fbdabb] text-[#ea580c] border-[#ea580c]' : 'bg-white text-slate-500 border-slate-300'}`}>
                                    {speed === 'express' && <CheckCircle className="w-4 h-4" />}
                                    File Faster
                                </div>
                            </div>
                        </label>

                        {/* Same Day */}
                        <label
                            className={`relative border rounded-xl p-6 cursor-pointer bg-white transition-all ${speed === 'same-day' ? 'border-[#ea580c] ring-1 ring-[#ea580c]' : 'border-slate-300 hover:border-slate-400'}`}
                            onClick={() => setSpeed('same-day')}
                        >
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 mb-4">
                                    <h4 className="font-bold text-[#ea580c]">SAME DAY</h4>
                                </div>

                                <div className="text-sm font-semibold text-slate-700 mb-6 flex items-center justify-center gap-1">
                                    Same-day processing <Info className="w-3 h-3 text-red-500" />
                                </div>
                                <div className="inline-block bg-[#fbdabb] text-[#ea580c] px-4 py-1 rounded-full text-sm font-bold mb-6">$100</div>
                                <div className={`w-full py-3 rounded border text-sm flex items-center justify-center gap-2 ${speed === 'same-day' ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-500'}`}>
                                    {speed === 'same-day' ? <div className="w-3 h-3 bg-white border border-slate-400 rounded-full" /> : <div className="w-3 h-3 bg-white border border-slate-300 rounded-full" />}
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

            <div className="text-[10px] text-slate-500 mt-4 leading-relaxed">
                *Our processing times are calculated based on business days and exclude government processing times. Once we prepare your application documents, we'll submit your application to the USPTO.
            </div>
        </div>
    );
}
