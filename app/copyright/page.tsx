"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightHero from "../components/copyright/CopyrightHero";
import HowItWorks from "../components/HowItWorks";
import CopyrightPricing from "../components/copyright/CopyrightPricing";
import CopyrightFAQ from "../components/copyright/CopyrightFAQ";
import { Copy, FileCheck, PenTool } from "lucide-react";

export default function CopyrightPage() {

    const steps = [
        {
            id: 1,
            name: "Answer a few questions",
            description: "Our simple questionnaire takes just minutes to collect the information needed to protect your work.",
            icon: PenTool
        },
        {
            id: 2,
            name: "Compile application",
            description: "We assemble your application for your review to ensure everything is correct before filing.",
            icon: Copy
        },
        {
            id: 3,
            name: "Application filing",
            description: "We review your application and file it electronically with the U.S. Copyright Office.",
            icon: FileCheck
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CopyrightHero />
                <HowItWorks
                    title="How Copyright Engine works"
                    description="Get your copyright registered in just 3 easy steps, saving you time and headaches."
                    steps={steps}
                />
                <CopyrightPricing />
                <CopyrightFAQ />

                {/* Bottom CTA */}
                <div className="bg-[#1e293b] py-20 text-center text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Take action to protect your work today.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            The sooner you protect your music, art, or book, the better.
                        </p>
                        <a
                            href="/copyright/questionnaire"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            Start My Copyright Registration
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
