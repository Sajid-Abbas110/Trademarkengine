"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficeActionFAQ from "./OfficeActionFAQ";
import { Star, Clock, FileText, CheckCircle2 } from "lucide-react";

export default function OfficeActionPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
                    {/* Background Image - Using a fallback or generated one if available. 
                        Since generation failed, we might use a generic office one or the monitoring bg temporarily 
                        We will assume we want the 'hero' vibe. */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/monitoring-hero-bg.png" // Reusing generic office BG for now
                            alt="Office Background"
                            fill
                            className="object-cover opacity-40 mix-blend-overlay"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-12 flex items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg">
                                <h1 className="text-3xl md:text-3xl font-extrabold text-[#1e293b] mb-4 font-serif leading-tight">
                                    USPTO Office Action<br />Response
                                </h1>
                                <p className="text-slate-600 mb-6 text-sm">
                                    If you received an Office Action for your trademark application, we may be able to help you. Don't delay. Starting at $299
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "No hourly fees. Flat fee service",
                                        "Rated 4.8 by Forbes Advisor",
                                        "Issues & Procedural Help"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                                            <span className="text-slate-700 text-xs font-bold uppercase tracking-wider">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/registration"
                                    className="inline-block w-fit bg-[#ea580c] text-white font-bold py-3 px-8 rounded shadow hover:bg-[#c2410c] transition-colors mb-4 text-sm"
                                >
                                    Respond to My Office Action
                                </Link>
                            </div>
                        </div>
                        {/* Right side person image - simulated with a placeholder/fallback if generation failed */}
                        <div className="hidden lg:block w-1/2 relative h-[500px]">
                            {/* Ideally this would be the generated 'office-action-hero.png' */}
                            <Image
                                src="/about-3.jpg" /* Fallback to 'focused work' image */
                                alt="Professional working"
                                fill
                                className="object-cover rounded-l-2xl shadow-2xl border-4 border-white/10"
                            />
                        </div>
                    </div>
                </section>

                {/* Responding to Office Actions */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-6 font-serif">
                                    Responding to Office<br />Actions
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    An examining attorney sends an office action when there is a legal problem with your trademark application. You must respond to the Office Action to have a chance at getting your trademark registered. There is no guarantee that your mark will register even if you respond, but failing to respond guarantees it will be abandoned.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center text-[#ea580c]">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm">Fast Turnaround</h3>
                                    <p className="text-xs text-slate-500">Provide answers to basic information about your mark.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center text-[#ea580c]">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm">Your secure docs and files</h3>
                                    <p className="text-xs text-slate-500">Available in your secure account for easy access.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center text-[#ea580c]">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm">Handling all correspondence</h3>
                                    <p className="text-xs text-slate-500">We handle the back and forth with the USPTO.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blue Banner Section */}
                <section className="py-24 bg-[#1e293b] text-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center md:text-left flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                            <div className="border border-white/20 p-6 rounded-lg">
                                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2 block">Statistic</span>
                                <div className="text-5xl font-extrabold text-white">63%</div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
                                Receive an Office<br />Action? It's OK. We<br />May Be Able to Help.
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Over 63% of trademark applications receive an initial rejection (Office Action). Many are simple procedural issues that we can help you fix. Others are more substantive refusals based on confusion. Don't panic if you get one, but do act promptly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] font-serif mb-4">
                            Office Action Filing FAQs
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Have more questions? Call <span className="text-[#ea580c] cursor-pointer">(877) 721-4579</span> or use our live chat.
                        </p>
                    </div>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <OfficeActionFAQ />
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-[#1e293b] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <div className="text-[#ea580c] font-bold text-sm tracking-widest uppercase mb-4">Get Started</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
                            Respond to my Office Action today.
                        </h2>
                        <Link
                            href="/registration"
                            className="inline-block bg-[#ea580c] text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-[#c2410c] transition-colors"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
