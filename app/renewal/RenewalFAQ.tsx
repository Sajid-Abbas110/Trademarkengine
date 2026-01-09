"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Does a trademark ever need to be renewed?",
        answer: "Yes, trademarks must be renewed regularly to remain active. The first renewal is due between the 5th and 6th year after registration."
    },
    {
        question: "Who do I need to renew my trademark registration?",
        answer: "The owner of the trademark registration must file the renewal documents. If ownership has changed, you may need to record an assignment."
    },
    {
        question: "What if I miss the deadline for renewing my trademark?",
        answer: "If you miss the deadline, there is a 6-month grace period where you can still file with an additional fee. After that, your registration will be cancelled."
    },
    {
        question: "What if I use my trademark differently than what was stated in my original application?",
        answer: "You must use the mark as it was registered. If you have materially changed the mark, you may need to file a new application."
    },
    {
        question: "What information will I need to provide upon renewal?",
        answer: "You will need to provide proof of use (specimens) showing that the mark is still being used in commerce for the goods/services listed."
    },
    {
        question: "How much does it cost to renew a trademark?",
        answer: "The government filing fees vary depending on the class of goods/services. Our service fee starts at a competitive rate to handle the process for you."
    },
    {
        question: "What happens if a trademark expires?",
        answer: "If a trademark expires, you lose your federal registration rights. Someone else could potentially register the mark, and you would lose your priority."
    }
];

export default function RenewalFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors border rounded-lg group text-left"
                    >
                        <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                        <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-[#ea580c]" />
                            ) : (
                                <Plus className="w-5 h-5 text-[#ea580c]" />
                            )}
                        </span>
                    </button>
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="p-6 pt-0 bg-white border-x border-b border-t-0 text-slate-600 rounded-b-lg">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
