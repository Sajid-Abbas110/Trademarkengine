"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is an Office Action?",
        answer: "An Office Action is an official letter from the USPTO illustrating legal problems with your trademark application. It requires a response to avoid abandonment of your application."
    },
    {
        question: "What is the significance of an Office Action asking the applicant to move the application to the Supplemental Register?",
        answer: "It typically means the USPTO considers your mark 'descriptive' rather than 'distinctive'. Moving to the Supplemental Register allows you to register, but with fewer rights than the Principal Register."
    },
    {
        question: "What is the significance of an office action that asks an applicant to 'disclaim' part of the trademark?",
        answer: "A disclaimer is a statement that you do not claim exclusive rights to a specific generic or descriptive word within your mark (e.g., 'Coffee' in 'Bob's Coffee'). You still own the mark as a whole."
    },
    {
        question: "What percentage of trademark applications receive Office Actions?",
        answer: "Approximately 63% of trademark applications receive an initial refusal or Office Action from the USPTO."
    },
    {
        question: "What is the deadline to respond to the USPTO Office Action?",
        answer: "Currently, you typically have 3 months to respond to an Office Action. Failure to respond by the deadline results in the abandonment of your application."
    },
    {
        question: "What if an applicant does not respond to an Office Action?",
        answer: "If you do not respond by the deadline, your application will be declared 'abandoned' by the USPTO, and your application fee will not be refunded."
    }
];

export default function OfficeActionFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg group text-left shadow-sm"
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
                        <div className="p-6 pt-0 bg-slate-50 text-slate-600 rounded-b-lg">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
