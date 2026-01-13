import { Lock, CheckCircle2 } from "lucide-react";

interface Step6SearchAddonProps {
    addSearch: boolean;
    setAddSearch: (add: boolean) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step6SearchAddon({ addSearch, setAddSearch, onNext, onBack }: Step6SearchAddonProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Comprehensive Search Report - <span className="text-[#3b6d8c]">Step 6</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#ea580c] font-bold text-lg mb-2">
                        Know before you file! Get a Comprehensive Search Report.
                    </h3>
                    <p className="text-slate-600 text-xs mb-8 leading-relaxed">
                        Embark on your creative journey with confidence by gaining valuable insights before filing your copyright application. Before paying application fees, we can give you peace of mind by searching for similar titles already registered by someone else. Understanding the landscape is crucial, and our Comprehensive Copyright Search Report offers the intelligence you need.
                        <br /><br />
                        This upgrade covers federal copyright search results, including similar titles and filing data. It also incorporates a federal trademark search, comparing your work against branded trademarks. Additionally, it monitors online usage through common law web search results, revealing existing similarities online.
                    </p>

                    <div className="bg-[#fcebe1] p-6 rounded border border-[#fbdabb] mb-6">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${addSearch ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-400 bg-white'}`}>
                                {addSearch && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            <input
                                type="radio"
                                name="addSearch"
                                className="hidden"
                                checked={addSearch}
                                onChange={() => setAddSearch(true)}
                            />
                            <div>
                                <span className="font-bold text-slate-800 text-sm">Supercharge my insights with a Comprehensive Search Report (+$99)</span>
                            </div>
                        </label>
                    </div>

                    <div className="bg-white p-6 rounded border border-slate-200 mb-8">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${!addSearch ? 'border-slate-400' : 'border-slate-300'}`}>
                                {/* Default radio look for unselected/selected false */}
                                {!addSearch && <div className="w-3 h-3 bg-slate-400 rounded-full" />}
                            </div>
                            <input
                                type="radio"
                                name="addSearch"
                                className="hidden"
                                checked={!addSearch}
                                onChange={() => setAddSearch(false)}
                            />
                            <div>
                                <span className="font-bold text-slate-800 text-sm">No thanks, I'll proceed without additional search insights</span>
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

                </form>
            </div>
        </div>
    );
}
