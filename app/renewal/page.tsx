"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RenewalFAQ from "./RenewalFAQ";
import { Star, Smartphone, Check, User, ArrowRight, Quote } from "lucide-react";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function TrademarkRenewalPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-[#fffdfa] selection:bg-[#ea580c]/20 selection:text-[#ea580c]">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#fff7ed]"> {/* Light cream background */}
                    <div className="container mx-auto px-4 max-w-7xl pt-16 pb-24 md:pb-32">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Left Content */}
                            <div className="w-full md:w-1/2 z-10">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e293b] mb-6 font-serif leading-tight">
                                    Keep your trademark alive with<br />regular renewals
                                </h1>
                                <p className="text-slate-600 mb-8 max-w-lg">
                                    Your federal registration must be renewed regularly to keep it active. Don't let your brand expire!
                                </p>
                                <ul className="space-y-3 mb-10 text-sm font-medium text-slate-700">
                                    {["Mandatory maintenance deadlines", "Protect your brand identity", "Renewal packages start at just $199"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Search/Input Area */}
                                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-2 max-w-lg mb-8">
                                    <input
                                        type="text"
                                        placeholder="Enter your trademark or serial number"
                                        className="flex-1 px-4 py-3 outline-none text-slate-700 placeholder:text-slate-400"
                                    />
                                    <button className="bg-[#ea580c] text-white font-bold py-3 px-8 rounded hover:bg-[#c2410c] transition-colors">
                                        Search
                                    </button>
                                </div>
                                <div className="text-xs text-[#ea580c] font-bold mt-2 uppercase tracking-wide mb-8">
                                    Start by searching
                                </div>

                                {/* Trust Badges */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border shadow-sm">
                                        <span className="font-bold text-slate-900">4.8</span>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <span className="text-xs text-slate-500 ml-1">Google Reviews</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center p-1">
                                            <Image src="/favicon.ico" alt="Icon" width={20} height={20} className="w-full h-full object-contain opacity-50 grayscale" />
                                        </div>
                                        <span className="text-xs text-slate-500 max-w-[100px] leading-tight">
                                            Top Rated by<br />Thousands
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
                                <Image
                                    src="/renewal-hero.png" // Generated image
                                    alt="Business Owner"
                                    fill
                                    className="object-contain object-right-bottom z-10"
                                    priority
                                />
                                {/* Orange/Red Abstract shape behind */}
                                <div className="absolute top-10 right-0 w-3/4 h-3/4 bg-[#ea580c] rounded-[3rem] z-0 transform rotate-3 opacity-90" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why File Section */}
                <section className="py-24 bg-white relative">
                    <div className="absolute left-0 top-10 w-12 h-12 bg-[#ea580c] rounded-full flex items-center justify-center text-white font-bold -translate-x-1/2">
                        ?
                    </div>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-6 font-serif">
                                Why should I file a<br />trademark renewal?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-[#ea580c] font-bold text-lg mb-4">It's a requirement to keep your mark alive</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    USPTO requires you to file maintenance documents at specific intervals to prove you are still using the mark.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#ea580c] font-bold text-lg mb-4">Maintain Your Rights</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Failing to renew means your registration will be cancelled, and you lose the federal protections you worked hard to get.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#ea580c] font-bold text-lg mb-4">Prevent Expiration</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Once expired, you cannot "revive" it easily. You often have to start over with a brand new application, risking your priority date.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* When to Renew (Accordion-ish) Section */}
                <section className="py-20 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-5/12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-6 font-serif">
                                When do I need<br />to renew my<br />trademark?
                            </h2>
                            <p className="text-slate-600 mb-8 max-w-sm">
                                Keep these specific deadlines in mind. Missing them can be costly or fatal to your registration.
                            </p>
                            <Link href="/registration" className="bg-[#ea580c] text-white font-bold py-3 px-6 rounded shadow hover:bg-[#c2410c] transition-colors inline-block">
                                Start Renewal Process
                            </Link>
                        </div>
                        <div className="w-full md:w-7/12 space-y-4">
                            {/* Mock Accordion Items */}
                            {[
                                "Between the 5th & 6th Year Anniversary",
                                "Between the 9th & 10th Year Anniversary",
                                "Every 10 Years Afterward"
                            ].map((title, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                                    <span className="font-bold text-slate-800">{title}</span>
                                    <span className="text-[#ea580c] font-bold text-2xl">+</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-extrabold text-[#1e293b] mb-4 font-serif">How it Works</h2>
                        <p className="text-slate-500 mb-16">
                            Your dedicated agent works with a simple questionnaire. You answer firm-relevant<br />questions, and we take care of the heavy lifting with the USPTO.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 border-l-4 border-l-[#ea580c] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#ea580c] mb-6">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Answer a Few Questions</h3>
                                <p className="text-xs text-slate-500">Use our secure online questionnaire to provide the details of your current trademark use.</p>
                            </div>
                            <div className="p-6 border-l-4 border-l-[#ea580c] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#ea580c] mb-6">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">We File the Forms</h3>
                                <p className="text-xs text-slate-500">Our team prepares the required maintenance documents and files them electronically.</p>
                            </div>
                            <div className="p-6 border-l-4 border-l-[#ea580c] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#ea580c] mb-6">
                                    <User className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Keep Your Account</h3>
                                <p className="text-xs text-slate-500">Stay updated via your secure account folder for future periodic filings.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-[#fffdfa]">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="mb-12">
                            <h2 className="text-3xl font-extrabold text-[#1e293b] font-serif">
                                You worked hard to get your<br />trademark; we can help you keep it.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <div className="text-4xl font-extrabold text-[#ea580c] mb-2">250,000+</div>
                                <div className="text-slate-600 font-medium">trademark customers since 2010</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-[#ea580c] mb-2">35,000+</div>
                                <div className="text-slate-600 font-medium">five-star reviews</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-[#ea580c] mb-2">4.8/5</div>
                                <div className="text-slate-600 font-medium">Rated by Forbes Advisor</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trustpilot Box */}
                <section className="bg-[#fff7ed] py-20 px-4"> {/* Light beige background for contrast with dark box */}
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-[#1e293b] rounded-xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="fill-white text-white w-6 h-6" />
                                    <span className="font-bold text-xl">Trustpilot</span>
                                </div>
                                <p className="text-lg md:text-xl font-medium mb-6 max-w-2xl leading-relaxed">
                                    Trust one of the most rated industry services. We make the process of filing a trademark easier, safer and more comfortable. Also, more timely so you know what their doing! It will save you time and effort: filing documents and to get your trademark approved.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <span>Excellent</span>
                                    <div className="flex bg-[#00b67a] p-1 gap-0.5"> {/* Trustpilot green */}
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-white text-white" />)}
                                    </div>
                                    <span>4.8 out of 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <TestimonialCarousel />

                {/* FAQ */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] font-serif leading-tight">
                                Trademark<br />Renewal FAQs
                            </h2>
                            <p className="text-slate-500 mt-4 text-sm">
                                Still have questions? Call (877) 721-4579<br />Mon-Fri 8AM-6PM CST
                            </p>
                        </div>
                        <div className="w-full md:w-2/3">
                            <RenewalFAQ />
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-[#1e293b] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                            Secure your trademark protection<br />today.
                        </h2>
                        <p className="text-slate-400 mb-10 text-sm">
                            Stay protected without worrying. Join 250,000+ happy customers.
                        </p>
                        <Link
                            href="/registration"
                            className="inline-block bg-[#ea580c] text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-[#c2410c] transition-colors"
                        >
                            Renew My Trademark
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
