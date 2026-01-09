"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExtensionHero from "../components/extension/ExtensionHero";
import HowItWorks from "../components/HowItWorks";
import ExtensionBenefits from "../components/extension/ExtensionBenefits";
import ExtensionCTA from "../components/extension/ExtensionCTA";
import ExtensionFAQ from "../components/extension/ExtensionFAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { FileText, Store, FileCheck } from "lucide-react";

export default function ExtensionPage() {
    const steps = [
        {
            id: 1,
            name: "Answer a Few Questions",
            description: "We ask you a few simple questions to determine the right filing strategy for your extension.",
            icon: FileText
        },
        {
            id: 2,
            name: "Develop Your Application",
            description: "Our software automatically builds your application based on your answers.",
            icon: Store
        },
        {
            id: 3,
            name: "Application Filed",
            description: "We review your application and file it with the USPTO.",
            icon: FileCheck
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <ExtensionHero />
                <HowItWorks
                    title="Fast and Easy 3 Steps"
                    description="The easiest way to apply for a Statement of Use Extension."
                    steps={steps}
                />
                <ExtensionBenefits />
                <ExtensionCTA />
                <TestimonialCarousel />
                <ExtensionFAQ />

                {/* Bottom CTA / Final Call to Action */}
                <div className="bg-[#fff7ed] py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            File your Extension today.
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                            Don't risk abandonment of your trademark application. Secure your extension now.
                        </p>
                        <a
                            href="/extension/form"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            Extension Filing Form
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
