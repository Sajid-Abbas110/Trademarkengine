import { Lock } from "lucide-react";

interface Step2ContactInfoProps {
    contactInfo: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
    setContactInfo: (info: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step2ContactInfo({ contactInfo, setContactInfo, onNext, onBack }: Step2ContactInfoProps) {
    const handleChange = (field: string, value: string) => {
        setContactInfo({ ...contactInfo, [field]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Monitoring - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <div className="mb-6">
                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-2">Contact Information</h3>
                    <p className="text-slate-600 text-sm">
                        Please provide your contact information below. We will use this information to create your account and to alert you of the results of your Comprehensive Search Report order. This information may be updated at anytime through your online Trademark Engine account
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 max-w-2xl">
                        {/* First Name */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label htmlFor="firstName" className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-sm">
                                <span className="text-red-500 mr-1">*</span> First Name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={contactInfo.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                className="md:col-span-3 w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none bg-white/50 focus:bg-white transition-all"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label htmlFor="lastName" className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-sm">
                                <span className="text-red-500 mr-1">*</span> Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={contactInfo.lastName}
                                onChange={(e) => handleChange("lastName", e.target.value)}
                                className="md:col-span-3 w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none bg-white/50 focus:bg-white transition-all"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label htmlFor="email" className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-sm">
                                <span className="text-red-500 mr-1">*</span> Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={contactInfo.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="md:col-span-3 w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none bg-white/50 focus:bg-white transition-all"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label htmlFor="phone" className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-sm">
                                <span className="text-red-500 mr-1">*</span> Phone:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={contactInfo.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className="md:col-span-3 w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none bg-white/50 focus:bg-white transition-all"
                                required
                            />
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
