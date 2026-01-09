"use client";

export default function CopyrightFAQ() {
    const faqs = [
        {
            question: "What can I Copyright?",
            answer: "You can copyright literary works, musical works, dramatic works, pantomimes and choreographic works, pictorial, graphic, and sculptural works, motion pictures and other audiovisual works, sound recordings, and architectural works."
        },
        {
            question: "What is a common law copyright?",
            answer: "Copyright protection exists from the moment a work is created in a fixed form. However, registration provides important benefits like the ability to sue for infringement and statutory damages."
        },
        {
            question: "What's the difference between copyright, patent and trademark?",
            answer: "Copyright protects original works of authorship. Trademarks protect brand identifiers (names, logos). Patents protect inventions and discoveries."
        },
        {
            question: "What are the benefits to registering your work with the copyright office?",
            answer: "Registration establishes a public record of your claim, allows you to file an infringement lawsuit in federal court, and if registered within 3 months of publication, allows for statutory damages and attorney fees."
        },
        {
            question: "How does an applicant decide which category to use?",
            answer: "The category depends on the nature of the work. If it's a book, it's literary. If it's a song, it's musical or sound recording. We help guide you to the correct classification."
        },
        {
            question: "How long does a copyright last?",
            answer: "Generally, for works created after January 1, 1978, copyright protection lasts for the life of the author plus an additional 70 years."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Federal Copyright Registration FAQs
                    </h2>
                    <p className="text-slate-600">
                        Common questions about protecting your creative work.
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
