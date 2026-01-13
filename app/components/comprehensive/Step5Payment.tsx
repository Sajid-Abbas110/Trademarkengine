import { Lock, CreditCard, Phone, FileText } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";
import { ADMIN_EMAIL, CONTACT_PHONE, CONTACT_HOURS } from "../../lib/constants";

interface Step5PaymentProps {
    formData: any;
    onBack: () => void;
    onSubmit?: (contactInfo: any) => void;
}

export default function Step5Payment({ formData, onBack, onSubmit }: Step5PaymentProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState(formData.contactInfo?.firstName || "");
    const [lastName, setLastName] = useState(formData.contactInfo?.lastName || "");
    const [email, setEmail] = useState(formData.contactInfo?.email || "");
    const [phone, setPhone] = useState(formData.contactInfo?.phone || "");
    const [agreed, setAgreed] = useState(false);

    // Calculate totals
    const searchPrices = {
        'federal_state': 149,
        'federal_state_common': 299,
        'global': 499
    };

    const searchPrice = searchPrices[formData.searchType as keyof typeof searchPrices] || 0;

    const speedPrices = {
        'standard': 0,
        'express': 50,
        'same_day': 100
    };
    const speedPrice = speedPrices[formData.speed as keyof typeof speedPrices] || 0;

    const total = searchPrice + speedPrice;

    // Helper to get readable package name
    const getPackageName = (type: string) => {
        if (type === 'federal_state') return "Federal & State Search";
        if (type === 'federal_state_common') return "Comprehensive Federal, State, & Common Law Search";
        if (type === 'global') return "Global Comprehensive U.S. and International Search";
        return "Search Package";
    };

    const getSpeedName = (s: string) => {
        if (s === 'express') return 'Express Processing';
        if (s === 'same_day') return 'Same Day Processing';
        return 'Standard Processing';
    };

    const formatPrice = (p: number) => p.toFixed(2);

    const handlePlaceOrder = () => {
        if (!firstName || !lastName || !email || !phone) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!agreed) {
            alert("Please agree to the Terms of Service.");
            return;
        }

        if (onSubmit) {
            setIsLoading(true);
            onSubmit({ firstName, lastName, email, phone });
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
                Order Summary & Invoice Generation
            </h2>

            <h3 className="font-bold text-slate-800 mb-4 text-sm">Create Your Account</h3>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Forms */}
                <div className="flex-grow space-y-6">

                    {/* Create Account Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Your First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Your Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="bg-[#e4e4e7] border border-slate-300 rounded p-4 text-xs text-slate-600 leading-relaxed mt-4">
                        Use of Trademark Engine website and any products or services to be provided by Trademark Engine are subject to the <Link href="/terms" className="text-[#ea580c] hover:underline">Terms of Service</Link> of Trademark Engine
                        <br /><br />
                        <label className="flex items-start gap-2 cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                className="mt-0.5 w-4 h-4 accent-[#ea580c]"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <span className="font-bold text-slate-800">I accept the Terms. I have read, understand & agree to the terms of service.</span>
                        </label>
                        <br />
                        <label className="flex items-start gap-2 cursor-pointer mt-2">
                            <input type="checkbox" className="mt-0.5 w-4 h-4 accent-[#ea580c]" defaultChecked />
                            <span className="font-bold text-slate-800">This is a fictional service for demonstration. I understand no actual trademark search will be performed.</span>
                        </label>
                    </div>

                    {/* Coupon Code */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="w-full bg-[#e4e4e7] border border-slate-300 px-4 py-3 rounded text-slate-600 outline-none focus:border-[#ea580c] transition-colors"
                        />
                    </div>
                </div>

                {/* Right Side - Order Summary Card */}
                <div className="w-full lg:w-96 shrink-0">
                    <div className="bg-[#e4e4e7] border-[4px] border-[#334155] rounded shadow-xl overflow-hidden sticky top-24">
                        <div className="bg-[#e4e4e7] py-4 text-center border-b border-slate-300">
                            <h3 className="font-bold text-slate-800 text-lg">My Order Details</h3>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4 text-xs font-semibold text-slate-700 border-b border-slate-300/50 pb-6 mb-4">
                                <div className="flex justify-between items-start gap-2">
                                    <div className="flex items-center gap-2">
                                        <button className="text-[10px] font-bold text-[#ea580c] text-left hover:underline" onClick={onBack}>Edit</button>
                                        <span>{getPackageName(formData.searchType)}</span>
                                    </div>
                                    <span className="font-mono">${formatPrice(searchPrice)}</span>
                                </div>

                                <div className="flex justify-between items-start gap-2 text-slate-700">
                                    <div className="flex items-center gap-2">
                                        <button className="text-[10px] font-bold text-[#ea580c] text-left hover:underline" onClick={onBack}>Edit</button>
                                        <span>{getSpeedName(formData.speed)}</span>
                                    </div>
                                    <span className="font-mono">${formatPrice(speedPrice)}</span>
                                </div>

                                <div className="flex justify-between font-bold pt-2 border-t border-slate-300/50">
                                    <span>Subtotal</span>
                                    <span className="font-mono">${formatPrice(total)}</span>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">MY TOTAL</div>
                                <div className="text-3xl font-bold text-[#ea580c] mb-6">${formatPrice(total)}*</div>

                                <button
                                    onClick={handlePlaceOrder}
                                    disabled={isLoading}
                                    className="w-full bg-[#ea580c] text-white font-bold py-3 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center justify-center gap-2 mb-4 uppercase text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Generating Invoice..." : "Generate Invoice & Submit ›"}
                                </button>

                                <p className="text-[9px] text-slate-500 leading-tight">
                                    By placing your order, you agree to Trademark Engine's Terms of Service and the applicable subscription terms.
                                </p>
                            </div>

                        </div>

                        <div className="bg-[#334155] py-3 text-center">
                            <div className="flex items-center justify-center gap-2 text-slate-300 text-[10px] font-bold tracking-wide">
                                <FileText className="w-3 h-3" />
                                Official Invoice Generation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center max-w-4xl mx-auto">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Satisfaction Guarantee</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                    We want every customer to be satisfied, so we will work with any customer who has any questions or concerns about their filings. Our customer service team is made up of dedicated trademark representatives with one goal - to meet each client's needs in a friendly, caring, and efficient manner. If you do not think we have met this goal, let us know and we will be happy to make every effort to resolve the issue(s). If we make an error on your filing, we will make the changes needed as soon as we can at no additional cost to you.
                </p>

                <div className="flex items-center justify-center gap-2 text-[#5e7c8d] font-bold text-xl inline-flex mx-auto">
                    <Phone className="w-6 h-6 fill-current" />
                    {CONTACT_PHONE}
                    <div className="flex flex-col items-start ml-1">
                        <span className="text-[9px] text-[#5e7c8d] font-bold uppercase tracking-wide leading-none">{CONTACT_HOURS}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-[10px] text-slate-400 leading-relaxed max-w-4xl">
                Trademark Engine is not a law firm and does not provide legal advice. Any communication between you and Trademark Engine is not protected by the attorney-client privilege.
            </div>
        </div>
    );
}
