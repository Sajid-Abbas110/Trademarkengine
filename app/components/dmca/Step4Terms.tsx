import { Lock } from "lucide-react";
import Link from 'next/link';

interface Step4TermsProps {
    agreedToTerms: boolean;
    setAgreedToTerms: (val: boolean) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step4Terms({ agreedToTerms, setAgreedToTerms, onNext, onBack }: Step4TermsProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                DMCA Takedown Engine - <span className="text-[#3b6d8c]">Step 4</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <div className="mb-4">
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="mt-1"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />
                            <span className="text-sm font-bold text-slate-700">
                                <span className="text-red-500 mr-1">*</span>
                                I accept the Terms. I have read, understand, & agree to the terms of service.
                            </span>
                        </label>
                    </div>

                    <div className="bg-[#e2e8f0] border border-slate-300 rounded p-4 text-xs text-slate-600 h-64 overflow-y-auto mb-6 leading-relaxed">
                        <p className="mb-2">
                            By using the Trademark Engine.com website (the "Website"), you agree to these terms and conditions as an agreement by and between you and Trademark Engine.com and Trademark Engine, LLC (referred to as "we", "us" or "our"). This Agreement also incorporates our Privacy Policy as if set forth at length herein. If you do not wish to agree to these terms, please refrain from using the Website.
                        </p>
                        <h4 className="font-bold text-slate-800 text-sm mt-4 mb-2">We provide general information related to trademarks and provide a website that</h4>
                        <p>
                            allows you to prepare and file trademark applications. We are not a law firm and we do not provide legal advice. You should consult with an attorney if you have legal questions.
                        </p>
                        {/* Placeholder for more legal text as shown in screenshot scrollbar */}
                        <div className="h-40"></div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-6 mb-8">
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
                            disabled={!agreedToTerms}
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
