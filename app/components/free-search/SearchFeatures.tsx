import { ArrowRight, BarChart3, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SearchFeatures() {
    return (
        <section className="bg-[#fff7ed] py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Know More. Do Better. Save Time <br /> and Money.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                        The free search engines only cover trademarks with the USPTO. Do you need more? Check <br /> out our Comprehensive Search Reports below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#ea580c] rounded-lg flex items-center justify-center text-white mb-6">
                            <Search className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                            Direct-Hit Federal Search (Only $49)
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Identifies exact or phonetically identical matches in the USPTO database. It also finds close matches for accurate results. Best for unique names that are highly distinct.
                        </p>
                        <Link href="/registration" className="text-[#ea580c] font-bold text-sm hover:underline flex items-center gap-1">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#ea580c] rounded-lg flex items-center justify-center text-white mb-6">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                            Federal, State & Common Law (Only $149)
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Our recommended search. Scans the federal registry, all 50 state databases, and common law sources (social media, business directories, etc.) to uncover hidden risks.
                        </p>
                        <Link href="/comprehensive-search" className="text-[#ea580c] font-bold text-sm hover:underline flex items-center gap-1">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#ea580c] rounded-lg flex items-center justify-center text-white mb-6">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                            Global (WIPO) & International Search (Only $499)
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            When you are planning to expand internationally, this search covers WIPO International database, EUIPO, and Canadian trademark databases to ensure global availability.
                        </p>
                        <Link href="/comprehensive-search" className="text-[#ea580c] font-bold text-sm hover:underline flex items-center gap-1">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
