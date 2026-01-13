import { Lock } from "lucide-react";

interface Step2ContactProps {
    contactData: {
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
    };
    updateContactData: (fields: Partial<{ email: string; firstName: string; lastName: string; phone: string }>) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step2Contact({ contactData, updateContactData, onNext, onBack }: Step2ContactProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                DMCA Takedown Engine - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <div className="space-y-4 max-w-2xl">
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Email:</label>
                            <input
                                type="email"
                                placeholder="me@example.com"
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                                value={contactData.email}
                                onChange={(e) => updateContactData({ email: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* First Name:</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                                value={contactData.firstName}
                                onChange={(e) => updateContactData({ firstName: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Last Name:</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                                value={contactData.lastName}
                                onChange={(e) => updateContactData({ lastName: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Phone:</label>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                                value={contactData.phone}
                                onChange={(e) => updateContactData({ phone: e.target.value })}
                                required
                            />
                        </div>
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
