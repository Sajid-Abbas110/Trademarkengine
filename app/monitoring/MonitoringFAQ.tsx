"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What does an applicant need to do to protect the mark after it is registered?",
        answer: "To keep a registration alive, the registrant must file specific maintenance documents with the USPTO at regular intervals. Failure to file these documents will result in the cancellation of the registration."
    },
    {
        question: "What do I do if someone is infringing?",
        answer: "If you believe someone is infringing on your trademark, you should consult with an attorney to discuss your options. Common steps include sending a cease and desist letter or filing a lawsuit."
    },
    {
        question: "Is it possible to make changes to the mark after it is filed?",
        answer: "Generally, material changes to the mark are not allowed after filing. You may be able to make minor amendments, but significant changes usually require a new application."
    },
    {
        question: "Is it possible to sell, license, or assign a trademark?",
        answer: "Yes, trademarks are intellectual property and can be bought, sold, licensed, or assigned. These transactions should be recorded with the USPTO."
    },
    {
        question: "What is Trademark Infringement?",
        answer: "Trademark infringement is the unauthorized use of a trademark or service mark on or in connection with goods and/or services in a manner that is likely to cause confusion, deception, or mistake about the source of the goods and/or services."
    },
    {
        question: "What factors go into determining whether the similarity of a mark might cause consumer confusion?",
        answer: "Factors include the strength of the mark, the proximity of the goods, the similarity of the marks, evidence of actual confusion, the marketing channels used, the type of goods and the degree of care likely to be exercised by the purchaser, the defendant's intent in selecting the mark, and the likelihood of expansion of the product lines."
    },
    {
        question: "What is trademark dilution?",
        answer: "Trademark dilution occurs when a famous mark's distinctiveness is blurred or tarnished by another's use of a similar mark, regardless of whether there is a likelihood of confusion."
    },
    {
        question: "What is the purpose of the cease and desist letter?",
        answer: "A cease and desist letter serves to formally notify an alleged infringer of your rights and demands that they stop the infringing activity. It can often resolve disputes without litigation."
    },
    {
        question: "What if I registered my mark, but someone else claims they were using it first?",
        answer: "In the US, trademark rights are based on 'first to use'. If someone can prove complexity they used the mark in commerce before you filed, they may have superior rights in their geographic area, even if you have a federal registration."
    },
    {
        question: "What remedies are available for a trademark infringement suit?",
        answer: "Remedies can include injunctions to stop the use, monetary damages (including profits lost), and in some cases, attorneys' fees and costs."
    }
];

export default function MonitoringFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg group text-left"
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
