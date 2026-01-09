"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatementHero from "../components/statement/StatementHero";
import HowItWorks from "../components/HowItWorks";
import StatementBenefits from "../components/statement/StatementBenefits";
import StatementCTA from "../components/statement/StatementCTA";
import StatementFAQ from "../components/statement/StatementFAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { FileText, Search, FileCheck } from "lucide-react";

export default function StatementOfUsePage() {

    // Custom steps
    const steps = [
        {
            id: 1,
            name: "Online Questions",
            description: "Fill out our simple, secure questionnaire online. It takes less than 10 minutes.",
            icon: FileText
        },
        {
            id: 2,
            name: "Review of Your Information",
            description: "We review your answers and specimens to ensure everything is correct before filing.",
            icon: Search
        },
        {
            id: 3,
            name: "Filed and Done!",
            description: "We file your Statement of Use with the USPTO and you receive a confirmation receipt.",
            icon: FileCheck
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <StatementHero />
                <HowItWorks
                    title="Fast and Easy Statement of Use Filing"
                    description="Three simple steps to finalizing your trademark."
                    steps={steps}
                />
                <StatementBenefits />
                <StatementCTA />
                <TestimonialCarousel />
                <StatementFAQ />

                {/* Bottom CTA */}
                <div className="bg-[#1e293b] py-20 text-center text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            File your Statement of Use today.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            Take the final step to secure your federal registration.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            File My Statement of Use
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
