"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MonitoringFAQ from "./MonitoringFAQ";
import { Star, MessageSquare } from "lucide-react";

export default function TrademarkMonitoringPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[600px] flex items-center bg-slate-100 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/monitoring-hero-bg.png"
                            alt="Office Background"
                            fill
                            className="object-cover opacity-90"
                            priority
                        />
                        <div className="absolute inset-0 bg-white/20" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-12">
                        <div className="flex flex-col lg:flex-row items-center gap-12">

                            {/* Left Card */}
                            <div className="w-full lg:w-5/12">
                                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg">
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4 font-serif">
                                        Trademark Monitoring
                                    </h1>
                                    <p className="text-slate-600 mb-6">
                                        You focus on your business while we focus on your trademark. Starting at $199
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {[
                                            "Thousands have protected their brand by monitoring their trademark.",
                                            "35,000+ five-star reviews",
                                            "Rated 4.8 by Forbes Advisor"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2 shrink-0" />
                                                <span className="text-slate-700 text-sm font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/monitoring/questionnaire"
                                        className="block w-fit bg-[#ea580c] text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-[#c2410c] transition-colors mb-8 text-sm"
                                    >
                                        Start Your Trademark Monitoring Today
                                    </Link>

                                    <div className="flex items-center gap-6 border-t pt-6">
                                        <div className="flex items-center gap-3">
                                            <span className="text-4xl font-extrabold text-slate-900">4.8</span>
                                            <div className="flex flex-col">
                                                <div className="flex text-yellow-400 text-xs">
                                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                                                </div>
                                                <span className="text-xs text-slate-500 font-bold">Forbes ADVISOR</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 border-l pl-6">
                                            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center">
                                                Inc<br />5000
                                            </div>
                                            <div className="text-[10px] text-slate-500 leading-tight">
                                                America's Fastest Growing<br />Private Companies
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image (Person) */}
                            <div className="w-full lg:w-7/12 relative h-[500px] hidden lg:block">
                                {/* Positioning the person image to look like they are sitting at a desk in the environment */}
                                <div className="absolute right-0 bottom-0 w-full h-full">
                                    <Image
                                        src="/monitoring-person.png"
                                        alt="Professional Support"
                                        fill
                                        className="object-contain object-right-bottom"
                                        priority
                                    />
                                </div>
                                {/* Floating Overlay Text if needed, skipping for clean look to match design */}
                                <div className="absolute bottom-10 right-10 text-white/90 text-sm font-bold drop-shadow-md">
                                    98% of customers recommend our Trademark Monitoring service
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="w-full lg:w-1/3">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] font-serif leading-tight">
                                    Trademark<br />Monitoring FAQs
                                </h2>
                                <div className="mt-8 relative w-12 h-12 bg-[#ea580c] rounded-full flex items-center justify-center text-white animate-pulse">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3">
                                <MonitoringFAQ />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#1e293b] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                            Focus on your business while we<br />focus on your trademark
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg">
                            Thousands have protected their brand by monitoring their trademark.
                        </p>
                        <Link
                            href="/monitoring/questionnaire"
                            className="inline-block bg-[#ea580c] text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-[#c2410c] transition-colors"
                        >
                            Start Monitoring My Trademark Today
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
