import { Lock, Check, X, MessageSquare } from "lucide-react";

interface Step5PackageSelectionProps {
    packageType: 'basic' | 'deluxe';
    setPackageType: (type: 'basic' | 'deluxe') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step5PackageSelection({ packageType, setPackageType, onNext, onBack }: Step5PackageSelectionProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Choose Your Package - <span className="text-[#3b6d8c]">Step 5</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <div className="bg-slate-300/30 p-4 rounded mb-8 flex items-start gap-4">
                        <div className="bg-slate-400/20 p-2 rounded">
                            <MessageSquare className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                            <h4 className="text-[#ea580c] font-bold text-sm mb-1">Choose a package.</h4>
                            <p className="text-xs text-slate-600">All packages include lifetime customer support and satisfaction guarantee.</p>
                        </div>
                        {/* Curved arrow graphic simulated with CSS or placeholder */}
                        <div className="hidden md:block ml-auto text-[#ea580c] text-4xl rotate-90">⤵</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-300 rounded overflow-hidden mb-8 shadow-sm">
                        {/* Basic Package Header */}
                        <div className="bg-[#eef2f6] p-6 text-center border-b border-r border-slate-300">
                            <h3 className="text-slate-800 font-bold text-lg mb-2">Basic Package</h3>
                            <div className="text-xs text-slate-500 mb-1">For just</div>
                            <div className="text-4xl font-extrabold text-[#111827] mb-2">$99</div>
                            <div className="text-[10px] text-slate-500 mb-4">+ Federal filing fees*</div>
                            <button
                                type="button"
                                onClick={() => setPackageType('basic')}
                                className={`w-full py-3 rounded font-bold text-sm transition-colors ${packageType === 'basic' ? 'bg-[#1e293b] text-white shadow-lg' : 'bg-[#1e293b] text-white hover:bg-[#334155]'}`}
                            >
                                Choose Package
                            </button>
                        </div>

                        {/* Deluxe Package Header */}
                        <div className="bg-[#fcebe1] p-6 text-center border-b border-slate-300 relative overflow-hidden">
                            <h3 className="text-[#ea580c] font-bold text-lg mb-2">Deluxe Package</h3>
                            <div className="text-xs text-slate-500 mb-1">For just</div>
                            <div className="text-4xl font-extrabold text-[#ea580c] mb-2">$199</div>
                            <div className="text-[10px] text-slate-500 mb-4">+ Federal filing fees*</div>
                            <button
                                type="button"
                                onClick={() => setPackageType('deluxe')}
                                className={`w-full py-3 rounded font-bold text-sm transition-colors ${packageType === 'deluxe' ? 'bg-[#c2410c] text-white shadow-lg' : 'bg-[#ea580c] text-white hover:bg-[#c2410c]'}`}
                            >
                                Choose Package
                            </button>
                        </div>

                        {/* Features List */}
                        {[
                            "Professional Preparation",
                            "Digitalization and Formatting",
                            "Electronic Filing",
                            "Secure Online Account",
                            "Full Customer Service",
                            "A Certificate of Registration",
                            "Copyright Privacy Protection",
                            "Secure Your Brand with a Free Domain",
                            "Service as Your Copyright Correspondent",
                            "Cease and Desist Letter",
                            "Transfer and Assignment Letter",
                            "Expedited Process"
                        ].map((feature, idx) => {
                            // Determine availability based on screenshot logic
                            // Basic has first 8 checked.
                            // Deluxe has all.
                            const basicHas = idx < 8;
                            const deluxeHas = true;

                            return (
                                <>
                                    {/* Basic Cell */}
                                    <div className={`p-3 flex items-center justify-between md:justify-center border-b border-r border-slate-200 text-xs text-slate-600 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                        <span className="md:hidden font-bold mr-2 text-left w-full">{feature}</span>
                                        {basicHas ? <Check className="w-4 h-4 text-[#ea580c]" /> : <span className="w-4 h-4 block border-b border-slate-300 w-3 mx-auto"></span>}
                                    </div>
                                    {/* Deluxe Cell */}
                                    <div className={`p-3 flex items-center justify-between md:justify-center border-b border-slate-200 text-xs text-slate-600 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fff7ed]'}`}>
                                        <span className="md:hidden font-bold mr-2 text-left w-full">{feature}</span>
                                        {deluxeHas ? <Check className="w-4 h-4 text-[#ea580c]" /> : <X className="w-4 h-4 text-slate-300" />}
                                    </div>
                                </>
                            );
                        })}

                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-4 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Choose Package" to save your application.</span>
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
                    </div>

                </form>
            </div>
        </div>
    );
}
