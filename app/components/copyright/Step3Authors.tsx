import { Lock } from "lucide-react";

interface Step3AuthorsProps {
    authorName: string;
    setAuthorName: (name: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3Authors({ authorName, setAuthorName, onNext, onBack }: Step3AuthorsProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Copyright Registration - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-6">Author Information</h3>

                    <div className="max-w-xl">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            <span className="text-red-500 mr-1">*</span>
                            Who is the primary author of this work?
                        </label>
                        <p className="text-xs text-slate-500 mb-3">Provide the full legal name of the individual or organization.</p>

                        <input
                            type="text"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                            placeholder="Full Legal Name"
                            required
                        />
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-8 mb-8">
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
