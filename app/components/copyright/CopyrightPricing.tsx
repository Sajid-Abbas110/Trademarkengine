import { Check, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CopyrightPricing() {
    return (
        <section id="pricing" className="py-24 bg-[#fff7ed]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Select your Copyright Registration package.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Simple, transparent pricing.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                    {/* Basic Package */}
                    <div className="flex-1 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                        <div className="p-8 text-center border-b border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Package</h3>
                            <div className="flex justify-center items-baseline mb-2">
                                <span className="text-5xl font-extrabold text-[#1e293b]">$99</span>
                            </div>
                            <p className="text-sm text-slate-500 uppercase font-bold">+ federal filing fees</p>

                            <Link href="#" className="mt-4 text-xs text-blue-500 font-bold hover:underline flex items-center justify-center gap-1">
                                View sample details <Info className="w-3 h-3" />
                            </Link>

                            <Link href="/copyright/questionnaire" className="block w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 rounded-lg mt-8 transition-colors">
                                Get Started
                            </Link>
                        </div>
                        <div className="p-8 bg-slate-50/50 h-full">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">Professional Preparation</span>
                                        <span className="text-xs text-slate-500">We assemble your application including all necessary forms to meet the specific U.S. Copyright Office standards.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">Federal E-Filing (USPTO)</span>
                                        <span className="text-xs text-slate-500">Direct e-filing of your application to the U.S. Copyright Office with no need for mail or courier services.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">Certificate of Registration</span>
                                        <span className="text-xs text-slate-500">Electronic and/or paper certificate from the U.S. Copyright Office.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Deluxe Package */}
                    <div className="flex-1 bg-blue-50/30 rounded-xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-blue-500"></div>
                        <div className="p-8 text-center border-b border-blue-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Deluxe Package</h3>
                            <div className="flex justify-center items-baseline mb-2">
                                <span className="text-5xl font-extrabold text-[#1e293b]">$199</span>
                            </div>
                            <p className="text-sm text-slate-500 uppercase font-bold">+ federal filing fees</p>

                            <Link href="#" className="mt-4 text-xs text-blue-500 font-bold hover:underline flex items-center justify-center gap-1">
                                View sample details <Info className="w-3 h-3" />
                            </Link>

                            <Link href="/copyright/questionnaire" className="block w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 rounded-lg mt-8 transition-colors">
                                Get Started
                            </Link>
                        </div>
                        <div className="p-8 bg-white h-full">
                            <div className="mb-4 text-xs font-bold text-blue-600 uppercase tracking-wide">
                                Includes everything from Basic Package plus:
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">Cease & Desist Letter</span>
                                        <span className="text-xs text-slate-500">A professionally drafted Cease & Desist letter you can send if someone infringes on your work.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">Transfer/Assignment</span>
                                        <span className="text-xs text-slate-500">Assignment form template if you need to transfer copyright owners later.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block text-sm">24-Hour Expedited Processing</span>
                                        <span className="text-xs text-slate-500">We prioritize your order and prepare your filing within 24 hours (business days).</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
