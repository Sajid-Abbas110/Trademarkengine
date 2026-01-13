import { FileText, Lock, CreditCard, Phone, Check } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";
import { ADMIN_EMAIL, CONTACT_PHONE, CONTACT_HOURS } from "../../lib/constants";

interface Step5PaymentProps {
    onBack: () => void;
    onSubmit?: (contactInfo: any) => Promise<any>;
}

export default function Step5Payment({ onBack, onSubmit }: Step5PaymentProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [credentials, setCredentials] = useState<{ email: string; password: string } | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);

    const renewalFee = 299.00;
    const governmentFee = 650.00;
    const expressFee = 50.00;
    const total = renewalFee + governmentFee + expressFee;

    const formatPrice = (p: number) => p.toFixed(2);

    const handlePlaceOrder = async () => {
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
            try {
                const result = await (onSubmit({ firstName, lastName, email, phone }) as any);
                if (result && result.success) {
                    if (result.credentials) {
                        setCredentials(result.credentials);
                    }
                    setIsSuccess(true);
                }
            } catch (error) {
                console.error("Submission failed", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isSuccess) {
        return (
            <div className="space-y-8 text-center py-12 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Renewal Invoice Generated!</h3>
                <p className="text-slate-600">Your renewal request has been received. An official invoice has been generated and sent to your email for processing.</p>

                {credentials && (
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-[#ea580c]/10 text-left max-w-md mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Lock className="w-5 h-5 text-[#ea580c]" />
                            <h4 className="font-bold text-slate-800">Tracking Credentials</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">Use these credentials to track your renewal status:</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Email</span>
                                <span className="text-sm font-bold text-slate-800">{credentials.email}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                                <span className="text-xs font-bold text-slate-400 uppercase">Temp Password</span>
                                <span className="text-sm font-bold text-blue-600 select-all">{credentials.password}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="pt-6">
                    <Link href="/login" className="inline-block px-8 py-3 bg-[#ea580c] text-white rounded-md font-bold hover:bg-[#c2410c] transition-all">
                        Go to Login & Track Status
                    </Link>
                </div>
            </div>
        );
    }

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
                                <div className="flex justify-between items-start">
                                    <span>Trademark Renewal Fee</span>
                                    <span className="font-mono">${formatPrice(renewalFee)}</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <span>Trademark Renewal - USPTO<br />Government Filing Fee</span>
                                    <span className="font-mono">${formatPrice(governmentFee)}</span>
                                </div>
                                <div className="flex justify-between items-start text-[#ea580c]">
                                    <button className="text-[10px] font-bold underline hover:text-red-600" onClick={onBack}>Edit</button>
                                    <div className="flex justify-between w-full pl-4 text-slate-700">
                                        <span>Express Processing</span>
                                        <span className="font-mono">${formatPrice(expressFee)}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start text-[#ea580c]">
                                    <button className="text-[10px] font-bold underline hover:text-red-600">Edit</button>
                                    <div className="flex justify-between w-full pl-4 text-slate-700">
                                        <span>Trademark Monitoring Subscription</span>
                                        <span className="font-mono text-[10px] pt-1 text-red-500">Free 10-day Trial **</span>
                                    </div>
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

                                <p className="text-[10px] text-slate-500 leading-tight">
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
                **After your 10 day free trial, you will be charged $175 quarterly until cancelled for the Trademark Monitoring Service.
                You may cancel your subscription form at any time by initiating the process in your account or contacting Trademark Engine's customer support team.
                If you cancel before the end of a subscription period, you will not receive a partial refund. If you do not cancel, your subscription will renew on the same terms.
            </div>
        </div>
    );
}
