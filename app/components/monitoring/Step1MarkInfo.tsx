import { Lock } from "lucide-react";

interface Step1MarkInfoProps {
    markName: string;
    setMarkName: (name: string) => void;
    onNext: () => void;
}

export default function Step1MarkInfo({ markName, setMarkName, onNext }: Step1MarkInfoProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Monitoring - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 max-w-2xl">
                        <div>
                            <label htmlFor="markName" className="block text-slate-800 font-bold mb-3">
                                <span className="text-red-500 mr-1">*</span>
                                Enter the mark you are wanting to monitor
                            </label>
                            <input
                                type="text"
                                id="markName"
                                value={markName}
                                onChange={(e) => setMarkName(e.target.value)}
                                className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none bg-white/50 focus:bg-white transition-all"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>

                    {/* Navigation/Submit */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Lock className="w-4 h-4" />
                            <span>Click on "Continue" to save your application.</span>
                        </div>

                        <div className="flex gap-4">
                            {/* No Previous button on Step 1 */}
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
        </div>
    );
}
