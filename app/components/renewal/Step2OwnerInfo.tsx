import { Lock } from "lucide-react";

interface Step2OwnerInfoProps {
    onNext: () => void;
    onBack: () => void;
}

export default function Step2OwnerInfo({ onNext, onBack }: Step2OwnerInfoProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Renewal Registration Process - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 mb-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 max-w-3xl">

                        {/* Organization Name */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Organization Name:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 bg-white/70" defaultValue="TRADEMARK & COPYRIGHT MARKETING SERVICES" />
                            </div>
                        </div>

                        {/* Organization Type */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Organization Type:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 bg-white/70" defaultValue="C Corporation" />
                            </div>
                        </div>

                        {/* State of Formation */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> State of Formation:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 bg-white/70" defaultValue="Ohio" />
                            </div>
                        </div>

                        <hr className="my-4 border-slate-300" />

                        {/* Position */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Position:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" placeholder="CEO" />
                            </div>
                        </div>

                        {/* First Name */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> First Name:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" placeholder="First Name" />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Last Name:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" placeholder="Last Name" />
                            </div>
                        </div>

                        {/* Country */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Country of Citizenship:
                            </label>
                            <div className="md:col-span-3">
                                <select className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none bg-white">
                                    <option>United States</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Address:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" defaultValue="3349 WINDSONG WAY" />
                            </div>
                        </div>

                        {/* City */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> City:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" defaultValue="MAINEVILLE" />
                            </div>
                        </div>

                        {/* State/Province */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> State/Province/Region:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" defaultValue="Ohio" />
                            </div>
                        </div>

                        {/* Zip */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Zip/Postal Code:
                            </label>
                            <div className="md:col-span-3">
                                <input type="text" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" defaultValue="45039" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Email:
                            </label>
                            <div className="md:col-span-3">
                                <input type="email" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" placeholder="me@example.com" />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-slate-700 font-bold text-right pr-4 text-xs">
                                <span className="text-red-500 mr-1">*</span> Phone:
                            </label>
                            <div className="md:col-span-3">
                                <input type="tel" className="w-full px-3 py-2 rounded border border-slate-300 focus:border-[#ea580c] outline-none" placeholder="Phone" />
                            </div>
                        </div>

                        {/* Checkbox Consent */}
                        <div className="flex items-start gap-2 mt-4 ml-4 md:ml-0">
                            <input type="checkbox" className="mt-1 w-4 h-4 text-[#ea580c] border-slate-300 rounded focus:ring-[#ea580c]" />
                            <label className="text-xs text-slate-600">
                                I consent to receiving SMS text messages and phone calls from Trademark Engine.
                            </label>
                        </div>

                        <div className="flex items-center gap-4 mt-6 ml-4 md:ml-0 text-sm">
                            <span className="text-slate-700">Do you need to change your address?</span>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="changeAddress" className="text-[#ea580c] focus:ring-[#ea580c]" />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="changeAddress" className="text-[#ea580c] focus:ring-[#ea580c]" defaultChecked />
                                    <span>No</span>
                                </label>
                            </div>
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
