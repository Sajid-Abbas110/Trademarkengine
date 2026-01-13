import { FileText, Lock, Phone } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";
import { ADMIN_EMAIL, CONTACT_PHONE, CONTACT_HOURS } from "../../lib/constants";

interface Step5PaymentProps {
    pricingPlan: 'unlimited' | 'onetime';
    onBack: () => void;
    onSubmit?: (contactInfo: any) => void;
}

export default function Step5Payment({ pricingPlan, onBack, onSubmit }: Step5PaymentProps) {

    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);

    const price = pricingPlan === 'unlimited' ? 4.99 : 65.00;
    const planName = pricingPlan === 'unlimited' ? 'DMCA Takedown Unlimited' : 'DMCA Takedown One Time';
    const total = price;

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
            <h2 className="text-xl font-bold text-slate-800 mb-6">
                Order Summary & Invoice Generation
            </h2>

            <h3 className="font-bold text-slate-800 mb-4 text-sm">Create Your Account</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Account Creation */}
                <div className="space-y-4">

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Your First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Your Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Email Address</label>
                        <input
                            type="email"
                            placeholder="me@example.com"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded-sm"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
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
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="w-full bg-[#e4e4e7] border border-slate-300 rounded p-3 text-sm focus:outline-none focus:border-[#ea580c]"
                        />
                    </div>
                </div>

                {/* Right Column: Order Details Card */}
                <div className="bg-[#e4e4e7] border-[4px] border-[#334155] rounded shadow-xl overflow-hidden self-start">
                    <div className="bg-[#e4e4e7] py-4 text-center border-b border-slate-300">
                        <h3 className="font-bold text-slate-800 text-lg">My Order Details</h3>
                    </div>

                    <div className="p-6 bg-[#e4e4e7]">
                        {/* Line Items */}
                        <div className="space-y-4 text-xs font-semibold text-slate-700 pb-6 border-b border-slate-300/50 mb-6">

                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <button onClick={onBack} className="text-[#ea580c] hover:underline font-bold text-[10px]">Edit</button>
                                    <span>{planName}</span>
                                </div>
                                <span>${formatPrice(price)}</span>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-slate-600">Subtotal</span>
                                <span>${formatPrice(total)}</span>
                            </div>

                        </div>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 mb-1 font-bold tracking-wide">MY TOTAL</div>
                            <div className="text-3xl font-bold text-[#ea580c] mb-6">${formatPrice(total)}*</div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={isLoading}
                                className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-6 rounded shadow-md hover:shadow-lg transition-all mb-4 uppercase text-sm tracking-widest flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Generating Invoice..." : "Generate Invoice & Submit ›"}
                            </button>

                            <p className="text-[9px] text-slate-500 leading-tight">
                                By placing your order, you agree to Trademark Engine's Terms of Service and the applicable subscription terms.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#334155] py-3 text-center text-white text-[10px] font-bold flex items-center justify-center gap-2 tracking-wide">
                        <FileText className="w-3 h-3" />
                        Official Invoice Generation
                    </div>
                </div>
            </div>

            {/* Guarantee Section */}
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

        </div>
    );
}
