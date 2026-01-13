import { Lock } from "lucide-react";

interface Step3ReviewClassesProps {
    onNext: () => void;
    onBack: () => void;
}

export default function Step3ReviewClasses({ onNext, onBack }: Step3ReviewClassesProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Renewal Registration Process - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <h3 className="text-[#ea580c] font-bold text-xl mb-4">Review Your Trademark Classes</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Your trademark is registered under the following classes. Please check each class (category of goods or services) that you would like to keep active on your registration.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Class Selection */}
                    <div className="bg-[#e5e7eb] border border-slate-300 rounded p-6 mb-8 shadow-inner">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="w-5 h-5 text-[#ea580c] rounded border-slate-400 focus:ring-[#ea580c]"
                            />
                            <span className="font-bold text-slate-800 text-sm">
                                Service 035 - Advertising and Business Management and Office Functions
                            </span>
                        </label>
                    </div>

                    <p className="text-slate-500 text-xs mb-8 italic">
                        The USPTO requires separate fees for each class you choose to renew.
                    </p>

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

            <div className="text-[10px] text-slate-500 mt-6 leading-relaxed">
                Later in the process, Trademark Engine collects and pays the government a filing fee of $325 per class for the Declaration of Use and/or Excusable Nonuse under Section 8 of the Trademark Act if you are filing between the fifth and sixth year, or a filing fee of $425 per class if filing a Combined Declaration of Use and/or Excusable Nonuse/Application for Renewal under Sections 8 & 9 for the tenth year anniversary of your registration or any ten year anniversary afterwards.
            </div>
        </div>
    );
}
