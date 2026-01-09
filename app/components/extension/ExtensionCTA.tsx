import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExtensionCTA() {
    return (
        <section className="bg-slate-900 py-20">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Complete the Process with a Few Clicks.
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                    Don't let your trademark application expire. File your extension now to secure more time
                    and keep your registration process on track.
                </p>
                <Link
                    href="/extension/form"
                    className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                >
                    Start Your Extension
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
