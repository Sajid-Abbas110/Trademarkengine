"use client";

import FAQAccordion from "../FAQAccordion";

export default function ExtensionFAQ() {
    // Custom FAQ items for the Extension page
    const extensionFAQs = [
        {
            question: "What is the deadline to request an extension for a Statement of Use?",
            answer: "You must file an Extension Request before your 6-month deadline expires. The deadline is calculated from the issue date of your Notice of Allowance."
        },
        {
            question: "How many extensions can I file?",
            answer: "You can file up to 5 extension requests, each granting an additional 6 months. This gives you a maximum total of 36 months (3 years) from the Notice of Allowance date."
        },
        {
            question: "What is the cost for the Statement of Use Extension?",
            answer: "The government filing fee is $125 per class. Our service fee is affordable and transparent, helping you avoid costly attorney fees."
        },
        {
            question: "What happens if I don't file a Statement of Use or Extension?",
            answer: "If you fail to file either document before the deadline, your trademark application will be declared abandoned by the USPTO."
        },
        {
            question: "What does 'bona fide intention to use' mean?",
            answer: "It means you have a good faith intent to use the trademark in commerce in the near future. You must verify this intent each time you file an extension."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Statement of Use Extension Filing FAQs
                    </h2>
                    <p className="text-slate-600">
                        Common questions about extending your deadline.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* We reuse the FAQAccordion but we need to check if it accepts props or if we need to modify it too.
                        Assuming FAQAccordion might be hardcoded based on file name (common in this project).
                        I'll check FAQAccordion content in next step if this fails or if I need to refactor it.
                        For now, I'll inline the accordion logic if I can't pass props.
                     */}
                    {/* 
                        WAIT: I haven't refactored FAQAccordion yet. 
                        I should probably duplicate the accordion logic here for safety or refactor FAQAccordion.
                        To be safe and fast, I will implement a local accordion here.
                     */}
                    <div className="space-y-4">
                        {extensionFAQs.map((faq, index) => (
                            <details key={index} className="group border border-slate-200 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
