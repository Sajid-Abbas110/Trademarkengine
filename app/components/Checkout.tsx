"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") || "Basic";
    const price = searchParams.get("price") || "49";

    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        alert("Payment integration coming soon!");
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">

                {/* Left: Order Summary */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        Order Summary
                    </h2>

                    <div className="border rounded-xl p-4 mb-4">
                        <p className="font-semibold text-slate-700">{plan} Package</p>
                        <p className="text-slate-500 text-sm">Trademark Filing Service</p>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-[#ea580c]">${price}</span>
                    </div>
                </div>

                {/* Right: User Info */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        Billing Details
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            type="text"
                            placeholder="Business Name"
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <button
                            type="button"
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full bg-[#ea580c] text-white py-3 rounded-xl font-bold hover:bg-[#c2410c] transition"
                        >
                            {loading ? "Processing..." : `Pay $${price}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
