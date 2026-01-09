"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        "What is the difference between copyright, patent and trademark?",
        "What is a common law trademark and why bother to register a mark?",
        "What makes a good name?",
        "What information will I need?",
        "What are the different kinds of marks?",
        "Why run a search for similar trademarks?",
        "What is the difference between ® and TM and when to use?",
        "Should companies trademark their name or logo?",
        "The difference between a company name, a domain name using a particular name and having the name as a trademark?",
        "How does an applicant decide which category to use?",
        "How does an applicant decide what examples to use?",
        "A company has a domain name, so why does it need a trademark?",
        "Is it common to also register the web address or the phone number?",
        "What about my slogan, do companies usually register that?",
        "What is the USPTO filing fee?",
        "What happens after a mark is submitted to the USPTO? How long does it take to receive the trademark?",
        "Why would an applicant want to 'disclaim' part of the trademark?",
        "What does an applicant need to do to protect the mark after it is registered?",
        "What is the Supplemental Register?",
        "How long does a trademark last?",
        "What are the Trademark warning signs?",
        "What if the trademark office rejects us or pushes back?",
        "What is the Supplemental Register?", // Duplicate in list provided, keeping for fidelity
        "How long does a trademark last?", // Duplicate
        "What do I do if someone is infringing?",
        "What if the trademark office rejects is or pushes back?",
        "Is reliance upon it or search?",
        "Is it possible to trademark a Twitter brand?",
        "Is it possible to trademark the title of my book, theatrical or screen written script?",
        "Can you own a trademark for your own, body or surname?",
        "How about hashtags in domain?",
        "Can a non-profit, social media group or social club obtain a trademark for its name?",
        "Why did I not receive a notification about the Office Action?",
        "I paid for expedited trademark filing, why is my application still 'sent file'?",
        "When will my trademark application be registered?",
        "Where can I get copy of the receipt of for my trademark application?",
        "What does 'expedited email search' mean in the automated filing?"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16">
                    {/* Sticky Sidebar */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Trademark <br />
                            Engine FAQs
                        </h1>
                        <p className="text-slate-500 mb-6 font-medium">
                            Still have questions? Call <a href="tel:8777214579" className="text-[#ea580c] font-bold">1 (877) 721-4579</a> <br />
                            or LIVE CHAT with us for real-time <br />
                            support.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-100">
                            <a href="#" className="flex justify-between items-center text-slate-800 font-bold text-sm uppercase tracking-wide hover:text-[#ea580c] transition-colors">
                                What you must know before using this website
                                <Plus className="w-4 h-4" />
                            </a>
                        </div>

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
                                            {/* Placeholder answer content since user didn't provide answers for all of these */}
                                            This is a placeholder answer for the question "{question}". In a real application, this would contain the detailed response providing meaningful information to the user.
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
