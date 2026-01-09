import Link from "next/link";
import { MousePointerClick } from "lucide-react";

export default function StatementCTA() {
    return (
        <section className="bg-slate-900 py-24 text-center">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Complete the Process with a Few Clicks of the Mouse
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Don't risk abandonment! If you leave, you're already past one of two filing hurdles by actually filing your trademark. Now that you are using your mark in commerce, finalize your registration with the Statement of Use so you can protect your brand in the USA.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                >
                    Get Started
                    <MousePointerClick className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
