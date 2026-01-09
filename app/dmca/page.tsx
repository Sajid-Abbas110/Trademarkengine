"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DMCAHero from "../components/dmca/DMCAHero";
import HowItWorks from "../components/HowItWorks";
import DMCAInfo from "../components/dmca/DMCAInfo";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Copy, FileText, LayoutTemplate, ShieldCheck } from "lucide-react";

export default function DMCAPage() {

    // Custom steps for DMCA
    const steps = [
        {
            id: 1,
            name: "Answer a brief questionnaire about the stolen work.",
            description: "", // Description is empty in design, main text is the step name
            icon: LayoutTemplate
        },
        {
            id: 2,
            name: "We'll craft a DMCA takedown notice for you.",
            description: "",
            icon: FileText
        },
        {
            id: 3,
            name: "You protect your copyright worry-free!",
            description: "",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <DMCAHero />
                <HowItWorks
                    title=""
                    description=""
                    steps={steps}
                />
                <DMCAInfo />
                <TestimonialCarousel />

                {/* Bottom CTA */}
                <div id="start" className="bg-[#1e293b] py-20 text-center text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Take action to protect your name <br /> today.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            Thousands have protected their brand by monitoring their trademark.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            Start Your DMCA Takedown Today
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
