"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Clock, HelpCircle, CheckCircle2 } from "lucide-react";
import ServicePricingCard from "@/app/components/ServicePricingCard";
import FAQAccordion from "@/app/components/FAQAccordion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function RegistrationPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-[#ea580c]/20 selection:text-[#ea580c]">
            <Navbar />
            <main className="pt-20 pb-0 bg-slate-50">
                {/* Hero Section */}
                <section className="bg-white">
                    <div className="container mx-auto px-4 py-16 md:py-24">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                            <div className="w-full md:w-1/2">
                                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                    Register your name, slogan, or logo today.
                                </h1>
                                <p className="text-base md:text-lg text-slate-600 mb-8">
                                    Protect your brand online in just minutes using our simplified trademark application. It's fast, easy, and affordable.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Trusted by over 100,000 businesses</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>5-star rated support team</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Secure & confidential process</span>
                                    </div>
                                </div>
                                <Link
                                    href="/registration/new"
                                    className="block md:inline-block md:w-auto w-full text-center bg-[#ea580c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:bg-[#c2410c] transition-colors"
                                >
                                    Start My Application
                                </Link>

                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <div className="flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-sm">
                                        <span className="font-bold text-slate-900 text-xl mr-2">4.8</span>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <span className="text-slate-400 text-sm ml-2">Google Reviews</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
                                <div className="absolute inset-0 bg-slate-200">
                                    {/* Placeholder for Hero Image - Woman in shop */}
                                    <Image
                                        src="/hero.png"
                                        alt="Business owner in shop"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="bg-[#1e293b] py-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Start protecting your business today
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Choose the package that fits your needs. All packages include a direct hit search of the USPTO database.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <ServicePricingCard
                                title="Basic Package"
                                description="Direct Hit Search & Filing"
                                price={49}
                                buttonText="Get Started"
                                features={[
                                    "Direct Hit Search of the Federal USPTO Database",
                                    "Preparation of your Trademark Application",
                                    "Electronic Filing of your Application",
                                    "Email Support",
                                    "Secure Online Account"
                                ]}
                            />
                            <ServicePricingCard
                                title="Standard Package"
                                description="Comprehensive Search & Filing"
                                price={299}
                                isPopular={true}
                                buttonText="Get Started"
                                features={[
                                    "Comprehensive Federal, State & Common Law Search",
                                    "Preparation of your Trademark Application",
                                    "Electronic Filing of your Application",
                                    "Priority Email & Phone Support",
                                    "Secure Online Account",
                                    "Lifetime Customer Support",
                                    "Cease & Desist Letter Template"
                                ]}
                            />
                            <ServicePricingCard
                                title="Platinum Package"
                                description="Our Most Complete Package"
                                price={539}
                                buttonText="Get Started"
                                features={[
                                    "Extensive Search + Application Review",
                                    "Preparation of your Trademark Application",
                                    "Electronic Filing of your Application",
                                    "Dedicated Case Manager",
                                    "Expedited Processing (24 Hours)",
                                    "Trademark Monitoring Service (1 Year)",
                                    "Customized Application Draft"
                                ]}
                            />
                        </div>

                        <div className="mt-12 text-center">
                            <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
                                <p className="text-slate-800 font-semibold text-sm">
                                    Trademark Engine is rated <span className="font-extrabold text-[#ea580c]">4.8 out of 5</span> based on <span className="underline decoration-slate-300 decoration-2 underline-offset-4">31,500 reviews</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Get A Trademark */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="w-full md:w-1/2">
                                {/* Abstract Graphic */}
                                <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg">
                                    <div className="flex gap-4 mb-4">
                                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
                                        <div className="h-3 w-full bg-slate-100 rounded"></div>
                                        <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                                    </div>
                                    {/* Floating Elements */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border border-orange-100 w-48 h-48 flex flex-col items-center justify-center text-center">
                                        <div className="text-4xl font-bold text-[#ea580c] mb-1">Brand</div>
                                        <div className="text-xs text-slate-500">Goes here</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why get a trademark?</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Most of the branding experts will tell you that a brand is your business's face. Your brand helps you attract your ideal customer and makes you stand out in a crowd. But protecting all of those qualities can be challenging. A registered trademark is the only way to ensure not only that you have the right to use your name, but also that you can stop others from using it.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
                                        Protects validity and exclusivity of your brand
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
                                        Adds a valuable asset to your business
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
                                        Gives you nationwide protection
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Run Search */}
                <section className="py-16 md:py-24 bg-slate-50 from-slate-50 to-white bg-gradient-to-b">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                            <div className="w-full md:w-1/2 text-center md:text-right pt-8 md:pt-0">
                                {/* Clock Graphic */}
                                <div className="relative inline-block">
                                    <Clock className="w-64 h-64 text-slate-200" strokeWidth={1} />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="text-center">
                                            <div className="text-xs text-slate-400 font-mono tracking-widest">TIME IS MONEY</div>
                                        </div>
                                    </div>
                                    {/* Calendar Grid BG Element */}
                                    <div className="absolute -z-10 top-0 -right-20 opacity-10 font-mono text-8xl text-slate-300 font-bold">
                                        25 26 27 <br /> 28 29 30
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why run a search for similar marks?</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    The first step in the trademark registration process should always be a comprehensive search. Why? Because the USPTO will reject your application if it is "confusingly similar" to an existing mark. This means you could lose your filing fees (which are non-refundable) and months of time.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Even if you think your name is unique, there might be a similar name already registered in a related industry. A proper search helps you identify these risks before you file.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Highlight */}
                <TestimonialCarousel />

                {/* FAQs */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Federal Trademark Registration FAQs</h2>
                            <p className="text-slate-500">Do you have questions? Most of our clients do! Here are some of the most common ones.</p>
                        </div>

                        <FAQAccordion items={[
                            {
                                question: "What is a trademark and what does it do?",
                                answer: "A trademark is a word, phrase, symbol, or design that identifies and distinguishes the source of the goods of one party from those of others. It protects your brand name and logo from being used by competitors."
                            },
                            {
                                question: "What is a common law trademark and why bother to register a mark?",
                                answer: "Common law rights are based on actual use of the mark in commerce within a specific geographic area. Federal registration provides nationwide protection, a legal presumption of ownership, and the right to sue for infringement in federal court."
                            },
                            {
                                question: "Should non-profits trademark their name/logo?",
                                answer: "Yes, non-profits should protect their brand just like any other entity. It prevents others from confusing donors or the public by using a similar name."
                            },
                            {
                                question: "A company has a domain name, so why does it need a trademark?",
                                answer: "A domain name registration does not provide trademark rights. You can own a domain but still infringe on someone else's trademark. Registration secures your right to use the name in commerce."
                            },
                            {
                                question: "Who owns my slogan, do companies usually register that?",
                                answer: "You own the slogan if you use it in commerce to identify your goods or services. Registering it adds a layer of legal protection and exclusivity."
                            },
                            {
                                question: "What information will I need?",
                                answer: "You'll need the owner's name and address, a clear representation of the mark (standard character or logo), the goods/services associated with the mark, and the date of first use."
                            }
                        ]} />
                    </div>
                </section>

                <div className="container mx-auto px-4 max-w-5xl pb-20 text-gray-600 items-center">
                    <span>
                        *The law firm responsible for the portion of this page constituting an advertisement is Swyft Legal, LLC who can be reached at
                        <span className="text-orange-500">sajid.abbas.mme@gmail.com</span>. Swyft Legal, LLC is licensed by the Arizona Supreme Court under license number 70173. <br />All legal services provided in connection with the attorney-led trademark process are provided by Swyft Legal, LLC. Trademark Engine is an affiliate of Swyft Legal, LLC.
                        *After a 7-day free trial, your Brand Protection+ subscription will automatically renew at $199 quarterly.

                        *The USPTO charges a government filing fee of $350 per class. If your application uses a custom description instead of entries from the USPTO's ID Manual, the fee increases to $550 per class. Swyft Legal also charges a $100 legal fee per class for attorney review and class-specific legal services. This legal fee is separate from—and in addition to—the cited package price and any government filing fees.
                    </span>
                </div>

                {/* Final CTA */}
                <section className="py-20 bg-[#1e293b] text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Take action to protect your name today.
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">The easiest way to secure the brand you've built.</p>
                        <Link
                            href="#pricing"
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
