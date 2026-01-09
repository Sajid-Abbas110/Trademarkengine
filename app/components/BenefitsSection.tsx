"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BenefitsSection(): React.JSX.Element {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            id: 0,
            title: "Trademark Registration → USPTO Filings",
            navTitle: "Trademark Registration \u2192 USPTO Filings",
            description: "No matter the trademark class, you can take the registration worries off your shoulders. Complete the contents of your application yourself or pursue an attorney-assisted trademark package and watch as your USPTO filing crosses the finish line for registration.",
            link: "/registration",
            linkText: "Learn More About Trademark Registration"
        },
        {
            id: 1,
            title: "Trademark Documents → Different Filing Types",
            navTitle: "Trademark Documents \u2192 Different Filing Types",
            description: "We handle all types of trademark documents. Whether you need to file a Statement of Use, an Extension of Time, or renew your existing trademark, our platform simplifies the complex documentation process.",
            link: "/documents",
            linkText: "Learn More About Filing Types"
        },
        {
            id: 2,
            title: "Copyright Registration",
            navTitle: "Copyright Registration",
            description: "Protect your creative works with ease. Our copyright registration service ensures your artistic, literary, and musical works are legally protected under US copyright law.",
            link: "/copyright",
            linkText: "Learn More About Copyright Registration"
        },
        {
            id: 3,
            title: "Trademark Monitoring & Maintenance",
            navTitle: "Trademark Monitoring & Maintenance",
            description: "Don't lose your trademark rights. Our monitoring service watches for potential infringements and notifies you of important maintenance deadlines to keep your registration active.",
            link: "/monitoring",
            linkText: "Learn More About Monitoring"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm mb-4 block">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
                            What can Trademark <br /> Engine do for you?
                        </h2>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-2">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        "group text-left pb-4 relative min-w-[140px] md:min-w-[160px] transition-all",
                                        activeTab === index ? "opacity-100" : "opacity-50 hover:opacity-80"
                                    )}
                                >
                                    <span className={cn(
                                        "block text-3xl font-bold mb-2 transition-colors",
                                        activeTab === index ? "text-[#ea580c]" : "text-slate-300"
                                    )}>
                                        {index + 1}.
                                    </span>
                                    <span className={cn(
                                        "block text-sm font-bold leading-tight max-w-[150px]",
                                        activeTab === index ? "text-[#ea580c]" : "text-slate-500"
                                    )}>
                                        {service.navTitle}
                                    </span>

                                    {/* Active Indicator Line */}
                                    {activeTab === index && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ea580c]"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Content */}
                        <div className="min-h-[200px] animate-in fade-in slide-in-from-bottom-4 duration-300" key={activeTab}>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {services[activeTab].description}
                            </p>

                            <Link
                                href={services[activeTab].link}
                                className="text-[#ea580c] font-bold hover:underline flex items-center gap-1 inline-flex"
                            >
                                {services[activeTab].linkText}
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image/Mockup */}
                    {/* Right Image/Mockup */}
                    <div className="relative flex justify-end">
                        {/* Background shape */}
                        <div className="absolute -z-10 top-0 right-0 w-3/4 h-full bg-[#ffedd5] rounded-tl-[100px] rounded-br-[50px]"></div>

                        <Image
                            src="/search.png"
                            alt="Trademark Registration"
                            width={600}
                            height={500}
                            className="relative z-10 max-w-[520px] w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
