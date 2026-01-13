import { Lock } from "lucide-react";

interface Step2ContactInfoProps {
    contactInfo: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
    onUpdate: (info: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step2ContactInfo({ contactInfo, onUpdate, onNext, onBack }: Step2ContactInfoProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Comprehensive Search Report - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-2">Contact Information</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Please provide your contact information below. We will use this information to create your account and to alert you of the results of your Comprehensive Search Report order. This information may be updated at anytime through your online Trademark Engine account
                    </p>

                    <div className="space-y-4 max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-4">
                            <label className="text-sm font-bold text-slate-700 text-right md:text-right">
                                <span className="text-red-500 mr-1">*</span> First Name:
                            </label>
                            <input
                                type="text"
                                value={contactInfo.firstName}
                                onChange={(e) => onUpdate({ ...contactInfo, firstName: e.target.value })}
                                className="w-full px-4 py-2.5 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-4">
                            <label className="text-sm font-bold text-slate-700 text-right md:text-right">
                                <span className="text-red-500 mr-1">*</span> Last Name:
                            </label>
                            <input
                                type="text"
                                value={contactInfo.lastName}
                                onChange={(e) => onUpdate({ ...contactInfo, lastName: e.target.value })}
                                className="w-full px-4 py-2.5 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-4">
                            <label className="text-sm font-bold text-slate-700 text-right md:text-right">
                                <span className="text-red-500 mr-1">*</span> Email:
                            </label>
                            <input
                                type="email"
                                value={contactInfo.email}
                                onChange={(e) => onUpdate({ ...contactInfo, email: e.target.value })}
                                className="w-full px-4 py-2.5 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-4">
                            <label className="text-sm font-bold text-slate-700 text-right md:text-right">
                                <span className="text-red-500 mr-1">*</span> Phone:
                            </label>
                            <input
                                type="tel"
                                value={contactInfo.phone}
                                onChange={(e) => onUpdate({ ...contactInfo, phone: e.target.value })}
                                className="w-full px-4 py-2.5 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                                required
                            />
                        </div>
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
