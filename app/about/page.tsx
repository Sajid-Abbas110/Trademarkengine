"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Search, FileText, Monitor, Scale, Users, ShieldCheck, Target, ShoppingBag, ArrowRight } from "lucide-react";
import Timeline from "@/app/components/Timeline";
import TestimonialCarousel from "@/app/components/TestimonialCarousel"; // Reusing if appropriate, or create simple testimonials
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassdoorSection from "../components/GlassdoorSection";
// Assuming we want a specific layout, I'll build the sections directly.

export default function AboutPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-[#ea580c]/20 selection:text-[#ea580c]">
            <Navbar />
            <main className="pt-20 pb-0 bg-slate-50">
                {/* Hero Section */}
                <section className="bg-[#fff7ed] py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e293b] mb-6 font-serif">
                            Get to Know Trademark Engine
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-600 mb-8 text-lg">
                            The fast, easy way to protect your brand and business.
                        </p>
                        <Link
                            href="/registration"
                            className="inline-block bg-[#ea580c] text-white font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#c2410c] transition-colors mb-16"
                        >
                            Get Started
                        </Link>

                        {/* Photo Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
                            <div className=" md:col-span-1 h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-xl">
                                {/* Placeholder for first image - couple working */}
                                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                    <Image
                                        src="/about-1.jpg"
                                        alt="Team working"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Fallback if no image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 z-[-1]" />
                                </div>
                            </div>
                            <div className="md:col-span-2 grid grid-rows-2 gap-6 h-64 md:h-[490px]">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                        <Image
                                            src="/about-2.jpg"
                                            alt="Meeting"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-50 z-[-1]" />
                                    </div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                        <Image
                                            src="/about-3.jpg"
                                            alt="Working on laptop"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white z-[-1]" />
                                    </div>
                                </div>
                            </div>
                            <div className=" md:col-span-1 h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-xl">
                                {/* Placeholder for first image - couple working */}
                                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                    <Image
                                        src="/about-4.jpg"
                                        alt="Team working"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Fallback if no image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 z-[-1]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Timeline Section */}
                <Timeline />

                {/* About Text Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Trademark Engine</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-6">
                                Trademark Engine provides a fast, accurate and affordable way for small business owners to register their trademarks. We have helped over 100,000 customers protect their brands, and we are just getting started. Our mission is to empower entrepreneurs by providing them with the tools they need to secure their intellectual property.
                            </p>
                            <p className="mb-6">
                                Although Trademark Engine is not a law firm and does not provide legal advice, we provide the power of technology to make the process easier. Our automated system helps you complete the required documents for your trademark application accurately and efficiently.
                            </p>
                            <p>
                                We bring you the same quality tools that big companies use, but at a fraction of the cost. Whether you are just starting out or have been in business for years, protecting your brand is essential. We are here to help you every step of the way.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Take Action Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Take Action to Protect Your Name Today
                        </h2>
                        <p className="text-slate-600 mb-12">Protect your brand's identity and secure your business's future.</p>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-orange-300 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ea580c] group-hover:scale-110 transition-transform">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">Protect Your Mark</h3>
                                <p className="text-sm text-slate-500 mb-4">Secure your brand name and logo from competitors.</p>
                                <Link href="/registration" className="text-[#ea580c] font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-orange-300 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ea580c] group-hover:scale-110 transition-transform">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">Reduce Risk</h3>
                                <p className="text-sm text-slate-500 mb-4">Avoid costly legal battles by registering early.</p>
                                <Link href="/registration" className="text-[#ea580c] font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                                    Start now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-orange-300 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ea580c] group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">Official Filing</h3>
                                <p className="text-sm text-slate-500 mb-4">We handle the USPTO paperwork for you.</p>
                                <Link href="/registration" className="text-[#ea580c] font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                                    Get details <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-orange-300 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ea580c] group-hover:scale-110 transition-transform">
                                    <ShoppingBag className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">Amazon Registry</h3>
                                <p className="text-sm text-slate-500 mb-4">Key requirement for Amazon Brand Registry.</p>
                                <Link href="/registration" className="text-[#ea580c] font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                                    See benefits <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>


                        </div>
                        <GlassdoorSection />
                    </div>
                </section>

                {/* What We Can Do For You */}
                <section className="pb-20 -mt-52 bg-[#fff7ed]">
                    <div className="container mx-auto px-4 pt-52">
                        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                                    What Trademark Engine Can Do For You
                                </h2>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-[#ea580c] mb-2">
                                            <Search className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">Comprehensive Search</h3>
                                        <p className="text-sm text-slate-600">Deep dive into federal, state, and common law records.</p>
                                    </div>
                                    <div>
                                        <div className="text-[#ea580c] mb-2">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">Application Preparation</h3>
                                        <p className="text-sm text-slate-600">We draft and file your application directly with the USPTO.</p>
                                    </div>
                                    <div>
                                        <div className="text-[#ea580c] mb-2">
                                            <Monitor className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">Application Tracking</h3>
                                        <p className="text-sm text-slate-600">Track your application status in real-time via your secure account.</p>
                                    </div>
                                    <div>
                                        <div className="text-[#ea580c] mb-2">
                                            <Scale className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">Office Action Help</h3>
                                        <p className="text-sm text-slate-600">Resources and support if the USPTO issues an Office Action.</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Link href="/registration" className="font-bold text-[#ea580c] hover:text-[#c2410c] flex items-center gap-2">
                                        Start your search <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                {/* Abstract representation of dashboard */}
                                {/* <div className="bg-white p-6 rounded-2xl shadow-xl w-full border border-slate-100 flex flex-col gap-4">
                                    <div className="h-4 w-1/3 bg-slate-100 rounded"></div>
                                    <div className="h-8 w-2/3 bg-slate-200 rounded mb-4"></div>
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full bg-orange-50 flex-shrink-0"></div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                                    <div className="h-2 w-2/3 bg-slate-50 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50 z-[-1]"></div>
                                </div> */}
                                <Image src="/search.png" alt="Dashboard" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dedicated Reps */}
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="w-full md:w-1/3">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Dedicated Trademark Representatives
                                </h2>
                                <p className="text-slate-300 mb-8">
                                    Our team is committed to your success. We are here to answer your questions and guide you through the process.
                                </p>
                            </div>
                            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300 text-sm">
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">Knowledgeable Support</h4>
                                    <p>Our team understands the trademark process inside and out. We stay up to date on the latest USPTO rules and regulations so you don't have to.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">Customer Satisfaction</h4>
                                    <p>We pride ourselves on our high customer satisfaction ratings. We work hard to ensure that every customer has a positive experience.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">Peace of Mind</h4>
                                    <p>Knowing that your trademark is in good hands gives you peace of mind. You can focus on running your business while we handle the paperwork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-20"></div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-[#1e293b] text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Take action to protect your name today.
                        </h2>
                        <p className="text-slate-400 mb-8">Don't risk losing your brand. Register your trademark now.</p>
                        <Link
                            href="/registration"
                            className="inline-block bg-[#ea580c] text-white font-bold py-3 px-8 rounded-md shadow-lg hover:bg-[#c2410c] transition-colors"
                        >
                            Register Now
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
