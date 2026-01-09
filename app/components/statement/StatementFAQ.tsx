"use client";

export default function StatementFAQ() {
    const faqs = [
        {
            question: "What is a Statement of Use?",
            answer: "A Statement of Use is a filed document that verifies to the USPTO that you are currently using your trademark in commerce. It is required for all 'Intent-to-Use' applications before registration can be granted."
        },
        {
            question: "What are the requirements for a Statement of Use?",
            answer: "You must provide a 'specimen' showing how the trademark is used in commerce (e.g., a photo of the product with the label, a screenshot of the website service) and the date of first use."
        },
        {
            question: "What is the deadline for a Statement of Use?",
            answer: "You have 6 months from the date the USPTO issues a Notice of Allowance. If you need more time, you must file an Extension Request."
        },
        {
            question: "What is the cost of filing a Statement of Use?",
            answer: "The government fee is $100 per class of goods/services. Our service fee is separate and affordable."
        },
        {
            question: "What does it mean to use the mark in commerce?",
            answer: "It means valid sales of goods or services across state lines (interstate commerce) bearing the trademark."
        },
        {
            question: "What is a valid specimen?",
            answer: "A valid specimen shows the mark as actually used in commerce. For goods, this could be a label, tag, or packaging. For services, this could be advertising or marketing materials."
        },
        {
            question: "What does an applicant do if there is no use within six months of receiving the Notice of Allowance?",
            answer: "You must file an Extension Request to get an additional 6 months. Failure to do so will result in abandonment of the application."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Statement of Use Filing FAQs
                    </h2>
                    <p className="text-slate-600">
                        Common questions about finalizing your registration.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border border-slate-100 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden bg-slate-50 shadow-sm">
                            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-100 transition-colors">
                                <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </summary>
                            <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-200">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
