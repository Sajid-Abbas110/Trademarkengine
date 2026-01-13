import { Lock, CheckCircle2 } from "lucide-react";

interface Step4ExpediteProps {
    speed: 'standard' | 'express' | 'same_day';
    setSpeed: (speed: 'standard' | 'express' | 'same_day') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step4Expedite({ speed, setSpeed, onNext, onBack }: Step4ExpediteProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Comprehensive Search Report - <span className="text-[#3b6d8c]">Step 4</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-2">
                        Get your research results even faster!
                    </h3>
                    <p className="text-slate-600 text-xs mb-8">
                        Standard orders are first come, first served. Need your results even faster? Get your report at the earliest date with expedited processing*.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Standard */}
                        <label className={`cursor-pointer rounded-lg border p-6 flex flex-col items-center justify-between text-center transition-all ${speed === 'standard' ? 'bg-white border-[#3b6d8c] ring-1 ring-[#3b6d8c] shadow-md' : 'bg-[#eef2f5] border-slate-300 hover:bg-white'}`}>
                            <div className="w-full">
                                <h4 className="text-[#ea580c] font-bold mb-4">Standard</h4>
                                <div className="text-sm font-semibold text-slate-800 mb-6">Processing time: Up to 2 weeks</div>
                                <div className="inline-block bg-slate-200 text-slate-600 text-sm font-bold px-4 py-1 rounded mb-6">$0</div>
                            </div>

                            <div className="flex items-center gap-2 mt-auto">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${speed === 'standard' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-400 bg-white'}`}>
                                    {speed === 'standard' && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input type="radio" name="speed" className="hidden" checked={speed === 'standard'} onChange={() => setSpeed('standard')} />
                                <span className="text-xs text-slate-600">I'll wait for standard processing</span>
                            </div>
                        </label>

                        {/* Express */}
                        <label className={`relative cursor-pointer rounded-lg border p-6 flex flex-col items-center justify-between text-center transition-all ${speed === 'express' ? 'bg-white border-[#ea580c] ring-1 ring-[#ea580c] shadow-md' : 'bg-[#fff5f0] border-[#fbdabb] hover:bg-white'}`}>
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white border border-[#ea580c] text-[#ea580c] text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                                Recommended
                            </div>
                            <div className="w-full mt-2">
                                <h4 className="text-[#ea580c] font-bold mb-4">Express</h4>
                                <div className="text-sm font-semibold text-slate-800 mb-6">Processing time: Up to 5 days</div>
                                <div className="inline-block bg-[#fcebe1] text-[#ea580c] text-sm font-bold px-4 py-1 rounded mb-6">$50</div>
                            </div>

                            <div className="w-full mt-auto">
                                <div className={`w-full py-2 rounded flex items-center justify-center gap-2 text-sm font-bold transition-colors ${speed === 'express' ? 'bg-[#ea580c] text-white' : 'border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white'}`}>
                                    <CheckCircle2 className="w-4 h-4" />
                                    Search Faster
                                </div>
                                <input type="radio" name="speed" className="hidden" checked={speed === 'express'} onChange={() => setSpeed('express')} />
                            </div>
                        </label>

                        {/* Same Day */}
                        <label className={`cursor-pointer rounded-lg border p-6 flex flex-col items-center justify-between text-center transition-all ${speed === 'same_day' ? 'bg-white border-[#ea580c] ring-1 ring-[#ea580c] shadow-md' : 'bg-[#eef2f5] border-slate-300 hover:bg-white'}`}>
                            <div className="w-full">
                                <h4 className="text-[#ea580c] font-bold mb-4">SAME DAY</h4>
                                <div className="text-sm font-semibold text-slate-800 mb-6">Processing time: 24 hours</div>
                                <div className="inline-block bg-[#fcebe1] text-[#ea580c] text-sm font-bold px-4 py-1 rounded mb-6">$100</div>
                            </div>

                            <div className="flex items-center gap-2 mt-auto">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${speed === 'same_day' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-400 bg-white'}`}>
                                    {speed === 'same_day' && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input type="radio" name="speed" className="hidden" checked={speed === 'same_day'} onChange={() => setSpeed('same_day')} />
                                <span className="text-xs text-slate-600">Search ASAP</span>
                            </div>
                        </label>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-4 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
                    </div>

                    <div className="flex justify-end items-center gap-6">
                        <button
                            type="button"
                            onClick={onBack}
                            className="text-[#3b6d8c] font-bold text-xs uppercase tracking-wider hover:text-slate-700 flex items-center gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            Previous
                        </button>

                        <button
                            type="submit"
                            className="bg-[#ea580c] text-white font-bold py-3 px-10 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-xs tracking-wider"
                        >
                            Continue
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>

                    <p className="mt-6 text-[10px] text-slate-500">*Our processing times are calculated based on business days.</p>

                </form>
            </div>
        </div>
    );
}
