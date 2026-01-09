"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function CopyrightFAQList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        "What can I Copyright?",
        "What don't we copyright here on the Trademark Engine?",
        "What's the difference between copyright, patent and trademark?",
        "What is a common law copyright?",
        "What are the benefits to registering your work with the copyright office?",
        "What are statutory damages?",
        "What rights come with a copyright?",
        "What is copyright infringement?",
        "How long does a copyright last?",
        "I've heard I cannot copy a technical drawing because it is a 'useful article.' What does that mean?",
        "What is a compilation?",
        "I have a number of works that all go together. Does each work need to be independently registered or can I file one copyright for all of them?",
        "What is the 'author'? Am I the author or my company? What is a work made for hire?",
        "How do I copyright my website and why should I?",
        "What level of creativity is required?",
        "Can I copyright my database?",
        "Does my copyright filed with the Copyright Office protect me internationally?",
        "What remedies are available to me if I sue for copyright infringement?",
        "When do I need to register my copyright?",
        "What is fair use?",
        "What is meant by publication?",
        "What happens after my registration arrives?",
        "How do I submit my work to the U.S. Copyright Office?",
        "How do I copyright my music?",
        "How long will the process take to file my copyright application?",
        "Why are you charging me for copyright protection?",
        "I paid for express processing but why is my copyright application not filed?",
        "How long does copyright registration take?",
        "How does privacy work for trademarks and copyrights?"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16">
                    {/* Sticky Sidebar */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Copyright <br />
                            Registration <br />
                            FAQs
                        </h1>
                        <p className="text-slate-500 mb-6 font-medium">
                            Still have questions? Call <a href="tel:8777214579" className="text-[#ea580c] font-bold">1 (877) 721-4579</a> <br />
                            or LIVE CHAT with us for real-time <br />
                            support.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((question, index) => (
                            <div
                                key={index}
                                className="border bg-slate-50/50 border-slate-100 rounded-lg overflow-hidden transition-all hover:bg-slate-50"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                >
                                    <span className="font-bold text-slate-800 text-sm md:text-base pr-8">{question}</span>
                                    <span className={`flex-shrink-0 text-[#ea580c] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                                        <p>
                                            {/* Placeholder answer content */}
                                            This is a placeholder answer for the question "{question}". In a real application, this would contain the detailed response providing meaningful information to the user regarding copyright law and procedures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
