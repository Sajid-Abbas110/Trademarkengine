import { Lock, HelpCircle, CheckCircle2, Info } from "lucide-react";

interface Step5SpeedProps {
    processingSpeed: 'standard' | 'express' | 'sameday';
    setProcessingSpeed: (speed: 'standard' | 'express' | 'sameday') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step5Speed({
    processingSpeed,
    setProcessingSpeed,
    onNext,
    onBack
}: Step5SpeedProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const OptionCard = ({
        type,
        label,
        time,
        price,
        isRecommended
    }: {
        type: 'standard' | 'express' | 'sameday';
        label: string;
        time: string;
        price: number;
        isRecommended?: boolean;
    }) => {
        const isSelected = processingSpeed === type;
        return (
            <div
                className={`flex-1 relative border rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all ${isSelected ? 'bg-[#e8ece8] border-[#ea580c] shadow-md ring-1 ring-[#ea580c]' : 'bg-white border-slate-300 hover:border-[#ea580c] hover:shadow-sm'}`}
                onClick={() => setProcessingSpeed(type)}
            >
                {isRecommended && (
                    <div className="absolute -top-3 bg-[#e8ece8] border border-[#ea580c] text-[#ea580c] text-[10px] font-bold px-3 py-1 rounded-full z-10 px-4 uppercase tracking-wider">Recommended</div>
                )}

                <div className={`text-lg font-bold mb-2 mt-4 text-[#ea580c]`}>{label}</div>
                <div className="text-slate-800 text-sm mb-4 font-medium flex items-center gap-1">
                    {time}
                    {type === 'sameday' && <Info className="w-3 h-3 text-[#ea580c]" />}
                </div>

                <div className={`font-bold px-4 py-1 rounded-full text-sm mb-6 inline-block ${isSelected ? 'bg-[#d8e0d8] text-slate-700' : 'bg-slate-200 text-slate-600'}`}>${price}</div>

                <div className={`w-full py-2 rounded-full border flex items-center justify-center gap-2 text-sm ${isSelected ? 'bg-[#d8e0d8] text-slate-700 border-[#d8e0d8]' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                    {isSelected ? <CheckCircle2 className="w-4 h-4 text-[#ea580c]" /> : <div className="w-4 h-4 rounded-full border border-slate-400"></div>}
                    {type === 'standard' && "I'll wait for standard processing"}
                    {type === 'express' && "File Faster"}
                    {type === 'sameday' && "File ASAP"}
                </div>
            </div>
        );
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Statement of Use Filing - <span className="text-[#3b6d8c]">Step 5</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-2">File your Statement of Use even faster!</h3>
                    <p className="text-slate-600 text-sm mb-8">
                        Standard filings are first come, first served. Need your Statement of Use faster? File your application at the earliest date with expedited filing*.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <OptionCard type="standard" label="Standard" time="Processing time: Up to 3 weeks" price={0} />
                        <OptionCard type="express" label="Express" time="Processing time: Up to 5 days" price={50} isRecommended={true} />
                        <OptionCard type="sameday" label="SAME DAY" time="Same-day processing" price={100} />
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-6 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
                    </div>

                    <p className="text-[10px] text-slate-500 italic mb-8">
                        *Our processing times are calculated based on business days and exclude government processing times. Once we prepare your application documents, we'll submit your application to the USPTO.
                    </p>

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
