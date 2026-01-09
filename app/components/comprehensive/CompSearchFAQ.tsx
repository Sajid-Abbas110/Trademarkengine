"use client";

export default function CompSearchFAQ() {
    const faqs = [
        {
            question: "Why run a search for similar trademarks?",
            answer: "Running a search helps identify any existing trademarks that might conflict with yours. This saves you the time and money of filing an application that is likely to be rejected by the USPTO."
        },
        {
            question: "What makes a good name?",
            answer: "A good trademark name is distinctive, not descriptive. Fanciful (made-up words like Exxon) or Arbitrary (common words used in unrelated context like Apple) marks are the strongest."
        },
        {
            question: "What are the different types of marks?",
            answer: "Trademarks can be word marks (standard characters), design marks (logos), or even sound or scent marks. The most common are standard character marks and stylized/design marks."
        },
        {
            question: "What does it mean for a mark to infringe?",
            answer: "Infringement occurs when a mark is likely to cause confusion among consumers as to the source of goods or services. It doesn't have to be identical; 'confusingly similar' is enough."
        },
        {
            question: "What is a trademark and what does it do?",
            answer: "A trademark is a brand identifier (name, logo, slogan) that distinguishes your goods/services from others. It gives you exclusive rights to use that mark in your industry."
        },
        {
            question: "What is a common law trademark and why bother to register a mark?",
            answer: "Common law rights are based on use in a specific geographic area. Federal registration grants nationwide rights, the presumption of ownership, and the ability to sue in federal court."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Comprehensive Trademark Search FAQs
                    </h2>
                    <p className="text-slate-600">
                        Common questions about the search process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border border-slate-200 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden bg-white shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </summary>
                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
