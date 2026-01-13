import { Lock, Clock, CheckCircle2 } from "lucide-react";

interface Step7ExpediteProps {
    processingSpeed: 'standard' | 'express';
    setProcessingSpeed: (speed: 'standard' | 'express') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step7Expedite({ processingSpeed, setProcessingSpeed, onNext, onBack }: Step7ExpediteProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Final Details - <span className="text-[#3b6d8c]">Step 7</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-2">File your Copyright even faster!</h3>
                    <p className="text-slate-600 text-sm mb-6 max-w-2xl">
                        Standard filings are first come, first served. Need your Copyright faster? File your application at the earliest date with expedited filing*.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Standard Option */}
                        <div
                            className={`relative border rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all ${processingSpeed === 'standard' ? 'bg-[#fcebe1] border-[#ea580c] shadow-md' : 'bg-white border-slate-300 hover:border-[#ea580c] hover:shadow-sm'}`}
                            onClick={() => setProcessingSpeed('standard')}
                        >
                            <div className="text-[#ea580c] font-bold text-lg mb-2">Standard</div>
                            <div className="text-slate-600 text-sm mb-4 font-medium">Processing time: Up to 3 weeks</div>
                            <div className="bg-slate-200 text-slate-600 font-bold px-4 py-1 rounded-full text-sm mb-6 inline-block">$0</div>

                            <div className={`w-full py-2 rounded border flex items-center justify-center gap-2 text-sm font-bold ${processingSpeed === 'standard' ? 'bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                {processingSpeed === 'standard' ? (
                                    <><CheckCircle2 className="w-4 h-4" /> I'll wait for standard processing</>
                                ) : (
                                    <>Select Standard</>
                                )}
                            </div>
                        </div>

                        {/* Express Option */}
                        <div
                            className={`relative border rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all ${processingSpeed === 'express' ? 'bg-[#fcebe1] border-[#ea580c] shadow-md' : 'bg-white border-slate-300 hover:border-[#ea580c] hover:shadow-sm'}`}
                            onClick={() => setProcessingSpeed('express')}
                        >
                            <div className="absolute -top-3 bg-[#fcebe1] border border-[#ea580c] text-[#ea580c] text-xs font-bold px-3 py-1 rounded-full">Recommended</div>

                            <div className="text-[#ea580c] font-bold text-lg mb-2 mt-2">Express</div>
                            <div className="text-slate-600 text-sm mb-4 font-medium">Processing time: Up to 5 business days</div>
                            <div className="bg-[#fcebe1] text-[#ea580c] font-bold px-4 py-1 rounded-full text-sm mb-6 inline-block">$50</div>

                            <div className={`w-full py-2 rounded border flex items-center justify-center gap-2 text-sm font-bold ${processingSpeed === 'express' ? 'bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                {processingSpeed === 'express' ? (
                                    <><CheckCircle2 className="w-4 h-4" /> File Faster</>
                                ) : (
                                    <>Select Express</>
                                )}
                            </div>
                        </div>
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

                    <p className="text-[10px] text-slate-400 mt-6 leading-tight">
                        *Our processing times are calculated based on business days and exclude government processing times. Once we prepare your application documents, we'll submit your application to the eCO.
                    </p>

                </form>
            </div>
        </div>
    );
}
