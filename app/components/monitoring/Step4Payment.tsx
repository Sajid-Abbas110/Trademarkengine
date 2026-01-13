import { useState } from "react";
import Link from "next/link";
import { Lock, FileText, Check } from "lucide-react";

interface Step4PaymentProps {
    onBack: () => void;
    onSubmit?: (contactInfo: any) => Promise<any>;
}

export default function Step4Payment({ onBack, onSubmit }: Step4PaymentProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [credentials, setCredentials] = useState<{ email: string; password: string } | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);

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
                const result = await onSubmit({ firstName, lastName, email, phone });
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
                <h3 className="text-3xl font-bold text-slate-800">Monitoring Invoice Generated!</h3>
                <p className="text-slate-600">Your monitoring request has been received. An official invoice has been generated and sent to your email for processing.</p>

                {credentials && (
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-[#ea580c]/10 text-left max-w-md mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Lock className="w-5 h-5 text-[#ea580c]" />
                            <h4 className="font-bold text-slate-800">Tracking Credentials</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-4">Use these credentials to track your monitoring status:</p>
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

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Payment Methods */}
                <div className="flex-grow space-y-4">
                    {/* Create Account Form */}
                    <div className="space-y-4 text-left border-t border-slate-200 pt-6 mt-6">
                        <h3 className="font-bold text-slate-800 text-sm mb-4">Create Your Account</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-[#ea580c] mb-1 font-bold">* First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full bg-white border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full bg-white border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-white border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:border-[#ea580c] rounded"
                            />
                        </div>
                        <label className="flex items-start gap-2 cursor-pointer mt-4">
                            <input
                                type="checkbox"
                                className="mt-0.5 w-4 h-4 accent-[#ea580c]"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <span className="text-[11px] text-slate-600 font-medium">I accept the Terms and have read the terms of service.</span>
                        </label>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-4">
                        <div className="w-16 h-16 bg-orange-100 text-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800">Invoice Generation</h4>
                        <p className="text-sm text-slate-600 max-w-xs mx-auto">
                            Instead of immediate payment, we will generate an official invoice and send it to your email and our admin for processing.
                        </p>
                    </div>

                    {/* Coupon Code */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="w-full bg-slate-100 border border-slate-300 px-4 py-3 rounded text-slate-600 outline-none focus:border-[#ea580c] transition-colors"
                        />
                    </div>
                </div>

                {/* Right Side - Order Summary Card */}
                <div className="w-full lg:w-96 shrink-0">
                    <div className="bg-slate-100 border-4 border-slate-700 rounded shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-center font-bold text-slate-800 text-lg mb-6">My Order Details</h3>

                            <div className="space-y-4 text-sm text-slate-700 border-b border-slate-300/50 pb-6 mb-4">
                                <div className="flex justify-between">
                                    <span>Trademark Monitoring (Quarterly)</span>
                                    <span className="font-mono">$199.00</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <span>Subtotal</span>
                                    <span className="font-mono">$199.00</span>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">MY TOTAL</div>
                                <div className="text-3xl font-bold text-[#ea580c]">$199.00*</div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={isLoading}
                                className="w-full bg-[#ea580c] text-white font-bold py-3 rounded shadow hover:bg-[#c2410c] transition-all flex items-center justify-center gap-2 mb-4 disabled:opacity-50"
                            >
                                {isLoading ? "Processing..." : "Generate Invoice & Submit"}
                                {!isLoading && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>}
                            </button>

                            <p className="text-[10px] text-slate-500 text-center leading-tight">
                                By placing your order, you agree to Trademark Engine's Terms of Service and the applicable subscription terms.
                            </p>
                        </div>

                        <div className="bg-[#2c3746] py-3 text-center">
                            <div className="flex items-center justify-center gap-2 text-slate-300 text-xs font-semibold">
                                <FileText className="w-3 h-3" />
                                Official Invoice Generation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
