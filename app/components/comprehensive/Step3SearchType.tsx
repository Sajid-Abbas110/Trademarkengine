import { Lock, CheckCircle2 } from "lucide-react";

interface Step3SearchTypeProps {
    searchType: 'federal_state' | 'federal_state_common' | 'global';
    setSearchType: (type: 'federal_state' | 'federal_state_common' | 'global') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3SearchType({ searchType, setSearchType, onNext, onBack }: Step3SearchTypeProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Comprehensive Search Report - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#ea580c] font-bold text-lg mb-2">
                        What type of trademark search would you like us to conduct? Select one.
                    </h3>
                    <p className="text-slate-600 text-xs mb-6">
                        The search you choose will be conducted on the words or text within your trademark.
                    </p>

                    <div className="space-y-4 mb-8">
                        {/* Option 1 */}
                        <label className={`block cursor-pointer p-4 rounded border transition-all ${searchType === 'federal_state' ? 'bg-white border-transparent shadow-sm' : 'hover:bg-slate-50 border-transparent'}`}>
                            <div className="flex items-start gap-3">
                                <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${searchType === 'federal_state' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {searchType === 'federal_state' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-slate-800">Federal & State Search (+$149)</span>
                                        <span className="text-[#3b6d8c] text-xs font-bold uppercase">Most Popular</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-1">
                                        Provides any similar names, logos, or slogans that are registered or pending with the USPTO or in any of the 50 states
                                    </p>
                                </div>
                            </div>
                            <input type="radio" name="searchType" className="hidden" checked={searchType === 'federal_state'} onChange={() => setSearchType('federal_state')} />
                        </label>

                        {/* Option 2 */}
                        <label className={`block cursor-pointer p-4 rounded border transition-all ${searchType === 'federal_state_common' ? 'bg-white border-transparent shadow-sm' : 'hover:bg-slate-50 border-transparent'}`}>
                            <div className="flex items-start gap-3">
                                <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${searchType === 'federal_state_common' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {searchType === 'federal_state_common' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-slate-800">Federal, State & Common Law Search (+$299)</span>
                                        <span className="text-green-600 text-xs font-bold uppercase">Recommended</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-1">
                                        Same as above, but also includes a proprietary search of corporate directories, common law and domain names.
                                    </p>
                                </div>
                            </div>
                            <input type="radio" name="searchType" className="hidden" checked={searchType === 'federal_state_common'} onChange={() => setSearchType('federal_state_common')} />
                        </label>

                        {/* Option 3 */}
                        <label className={`block cursor-pointer p-4 rounded border transition-all ${searchType === 'global' ? 'bg-white border-transparent shadow-sm' : 'hover:bg-slate-50 border-transparent'}`}>
                            <div className="flex items-start gap-3">
                                <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${searchType === 'global' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {searchType === 'global' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-slate-800">Global Comprehensive U.S. and International Search (+$499)</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-1">
                                        Same as above, but also includes searches for pending and registered marks in these multi-national jurisdictions: (i) The European community; and (ii) the World Intellectual Property Organization (WIPO)
                                    </p>
                                </div>
                            </div>
                            <input type="radio" name="searchType" className="hidden" checked={searchType === 'global'} onChange={() => setSearchType('global')} />
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

                </form>
            </div>
        </div>
    );
}
