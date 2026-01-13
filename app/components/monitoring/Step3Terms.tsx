import { Lock } from "lucide-react";

interface Step3TermsProps {
    accepted: boolean;
    setAccepted: (val: boolean) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3Terms({ accepted, setAccepted, onNext, onBack }: Step3TermsProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (accepted) {
            onNext();
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Monitoring - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6 min-h-[300px] flex flex-col justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start gap-3 mb-6">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                                className="mt-1 w-5 h-5 text-[#ea580c] border-slate-300 rounded focus:ring-[#ea580c]"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-slate-700 leading-relaxed">
                                <span className="text-red-500 mr-1">*</span>
                                I accept the Terms. I have read, understand, & agree to the terms of service.
                            </label>
                        </div>

                        <div className="bg-white border border-slate-300 rounded p-4 h-48 overflow-y-auto text-xs text-slate-600 mb-8 shadow-inner">
                            <p className="mb-2">
                                By using the Trademark Engine.com website (the "Website"), you agree to these terms and conditions as an agreement by and between you and Trademark Engine.com and Trademark Engine, LLC (referred to as "we", "us" or "our"). This Agreement also incorporates our Privacy Policy as if set forth at length herein. If you do not wish to agree to these terms, please refrain from using the Website.
                            </p>
                            <h4 className="font-bold text-slate-800 text-sm my-2">We provide general information related to trademarks and provide a website that</h4>
                            <p>
                                allows you to monitor your trademark application status and other related services. We are not a law firm and do not provide legal advice.
                            </p>
                            {/* Add more filler text to match scrollbar appearance if needed */}
                        </div>
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
                                disabled={!accepted}
                                className={`bg-[#ea580c] text-white font-bold py-3 px-8 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-sm tracking-wide ${!accepted ? 'opacity-50 cursor-not-allowed' : ''}`}
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
