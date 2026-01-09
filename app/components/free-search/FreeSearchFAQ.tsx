"use client";

export default function FreeSearchFAQ() {
    const faqs = [
        {
            question: "Why run a search for similar trademarks?",
            answer: "It's critical to ensure your mark is unique so your application isn't rejected by the USPTO for being 'confusingly similar' to an existing mark."
        },
        {
            question: "Why you may want to search more than just an exact match with the USPTO?",
            answer: "Exact matches are only part of the puzzle. The USPTO also rejects marks that sound similar, look similar, or mean the same thing. A comprehensive search finds these broader conflicts."
        },
        {
            question: "What comes with each search?",
            answer: "Our free search provides direct hits from the USPTO database. Our paid comprehensive packages include state, common law, and global search results with a detailed PDF report."
        },
        {
            question: "What is a common law trademark and why bother to register a mark?",
            answer: "Common law rights are limited to your geographic area. Federal registration gives you nationwide protection and substantial legal advantages."
        },
        {
            question: "Am I guaranteed to get revenue on my trademark if run a search and become sport-utility player?",
            answer: "No search guarantees registration or revenue. However, a proper search significantly decreases the risk of application denial and future litigation."
        },
        {
            question: "Can I sell my trademark if I want to?",
            answer: "Yes, trademarks are intellectual property and can be sold, licensed, or assigned to others."
        },
        {
            question: "How long does it take for a trademark search report?",
            answer: "Our free search is instant. Comprehensive search reports are typically delivered within 2-3 business days."
        },
        {
            question: "How can I verify if an old R-to-trademark symbol is for me?",
            answer: "You can only use the ® symbol after your mark is officially registered. Before that, you should use ™."
        },
        {
            question: "How much does it cost to register a trademark?",
            answer: "Government fees start at $250 per class of goods/services, plus usage fees for our filing service."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Trademark <br /> Engine FAQs
                        </h2>
                        <p className="text-slate-500 mb-6">
                            Find answers to commonly asked questions about trademarks and searches.
                        </p>
                        <a href="#" className="text-[#ea580c] font-bold hover:underline flex items-center gap-1">
                            Visit full help center &rarr;
                        </a>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group border border-slate-100 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden bg-white shadow-sm">
                                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                                    <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed">
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
