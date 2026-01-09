"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompSearchHero from "../components/comprehensive/CompSearchHero";
import HowItWorks from "../components/HowItWorks";
import InfoSection from "../components/comprehensive/InfoSection";
import PricingSection from "../components/PricingSection";
import CompSearchFAQ from "../components/comprehensive/CompSearchFAQ";
import { Laptop, Search, FileText } from "lucide-react";
import Image from "next/image";

export default function ComprehensiveSearchPage() {

    // Custom steps for "How It Works"
    const steps = [
        {
            id: 1,
            name: "Access our supercomputer",
            description: "Our secure systems access the USPTO database and other restricted databases.",
            icon: Laptop
        },
        {
            id: 2,
            name: "Manual comment and research",
            description: "Your results are reviewed by our specialists for common law conflicts.",
            icon: Search
        },
        {
            id: 3,
            name: "Review your detailed report",
            description: "You obtain a comprehensive report that outlines potential risks.",
            icon: FileText
        }
    ];

    // Plans for Pricing Section
    const searchPlans = [
        {
            name: "Federal & State Search",
            price: "149",
            description: "Comprehensive US Coverage",
            features: [
                "USPTO Federal Database Search",
                "50 States Trademark Database Search",
                "Corporate Name Search",
                "Detailed PDF Report"
            ],
            notIncluded: [
                "Common Law Search",
                "Global Search"
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Federal, State & Common Law",
            price: "299",
            description: "Most Recommended",
            features: [
                "Everything in Federal & State Search",
                "Common Law Database Search",
                "Domain Name Search",
                "Social Media Handle Search"
            ],
            notIncluded: [
                "Global Search"
            ],
            cta: "Go Common",
            popular: true,
        },
        {
            name: "Global Search",
            price: "499",
            description: "International Brands",
            features: [
                "Everything in Common Law Search",
                "WIPO International Database Search",
                "European Union (EUIPO) Search",
                "Canadian Trademark Search"
            ],
            notIncluded: [],
            cta: "Go Global",
            popular: false,
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CompSearchHero />

                <HowItWorks
                    title="How it works"
                    description="Get your comprehensive search report in 3 easy steps."
                    steps={steps}
                />

                {/* "Why run a search" section */}
                <InfoSection
                    title="Why run a search for similar trademarks?"
                    description="Before you spend thousands on branding packages and application fees, make sure no one else has claim to your name. A comprehensive search digs deeper than a standard 'knockout' search, finding look-alike, sound-alike, and meaning-alike marks that could cause your application to be rejected."
                    items={[
                        { value: "Avoid costly rebranding later" },
                        { value: "Reduce risk of USPTO rejection" },
                        { value: "Identify potential oppositions early" }
                    ]}
                    imagePosition="right"
                    graphic={
                        <div className="relative w-full h-full bg-white flex items-center justify-center p-8">
                            {/* Abstract 'search report' graphic */}
                            <div className="space-y-4 w-full max-w-xs opacity-80">
                                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                <div className="h-32 bg-slate-100 rounded border-2 border-slate-200 mt-4 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[16px] border-[#ea580c] rounded-full opacity-20"></div>
                                    <Search className="w-12 h-12 text-[#ea580c]" />
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* "What concerns should I have" section */}
                <InfoSection
                    title="What concerns should I have with my name or logo?"
                    description="The USPTO refuses registration if a likelihood of confusion exists. This doesn't just mean identical names. It includes:"
                    items={[
                        { value: "Phonetic Similarities (e.g., 'Kwik' vs 'Quick')" },
                        { value: "Foreign Translations" },
                        { value: "Similar Logos or Designs" },
                        { value: "Related Goods or Services" }
                    ]}
                    reversed={true}
                    imagePosition="left"
                    graphic={
                        <div className="relative w-full h-full bg-white flex items-center justify-center p-8">
                            <div className="relative">
                                {/* Overlapping circles to represent 'conflict' */}
                                <div className="w-32 h-32 rounded-full border-4 border-slate-900 absolute -top-10 -left-10 bg-white/80 z-10 flex items-center justify-center text-xl font-bold text-slate-900">Brand</div>
                                <div className="w-32 h-32 rounded-full border-4 border-[#ea580c] absolute -bottom-10 -right-10 bg-[#ea580c]/10 z-0 flex items-center justify-center text-xl font-bold text-[#ea580c]">Existing</div>
                                <div className="w-4 h-4 rounded-full bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-ping"></div>
                            </div>
                        </div>
                    }
                />

                <PricingSection
                    title="Choose the search option that works best for you."
                    subtitle=" transparent pricing. No hidden fees."
                    plans={searchPlans}
                />

                <CompSearchFAQ />

                {/* Bottom CTA */}
                <div className="bg-[#1e293b] py-20 text-center text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Take action to protect your name today.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            Don't leave your brand vulnerable. Start your comprehensive search now.
                        </p>
                        <a
                            href="/registration"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            Start My Comprehensive Search
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
