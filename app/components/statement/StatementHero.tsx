import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";

export default function StatementHero() {
    return (
        <section className="bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Statement of Use
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Did you file an Intent-to-Use trademark application? <br />
                            Did the USPTO issue you a Notice of Allowance? <br />
                            Then you need to file a Statement of Use to complete your registration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="/statement-of-use/questionnaire"
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                File your Statement of Use
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6">
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100">
                                <div className="flex text-[#facc15]">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="font-bold text-slate-800">4.8/5</span>
                                <span className="text-slate-500 text-sm">Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-slate-500 text-xs font-bold leading-tight">
                                    Trusted by <br /> 50k+ Businesses
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[500px] flex items-center justify-center">
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                            {/* Placeholder for the person holding a tablet image */}
                            <Image src="/statement-hero.jpg" fill className="object-cover" alt="Business person" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
