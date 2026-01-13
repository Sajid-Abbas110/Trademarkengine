import Image from "next/image";
import { Star } from "lucide-react";

export default function CompSearchHero() {
    return (
        <section className="bg-[#1e293b] pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
            {/* Abstract world map or grid could go here as bg */}

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block bg-[#ea580c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                            Advanced Search Tools
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Comprehensive <br />
                            Trademark Search
                        </h1>
                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Before you file, make sure your mark is truly unique. Minimize your risk of rejection with our deep dive search into Federal, State, and Common Law records.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Deep Federal & State Analysis</h4>
                                    <p className="text-slate-400 text-sm">We check more than just the USPTO database.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Common Law Coverage</h4>
                                    <p className="text-slate-400 text-sm">Find unregistered marks that could still block you.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Detailed Report in PDF</h4>
                                    <p className="text-slate-400 text-sm">Receive a clear, actionable report within days.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a href="/comprehensive-search/questionnaire" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all inline-block">
                                Start Your Comprehensive Search
                            </a>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex text-[#facc15]">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-slate-400 text-sm">
                                Trusted by over <span className="text-white font-bold">50,000+</span> businesses
                            </span>
                        </div>
                    </div>

                    {/* Right Image Placeholder - Laptop showing search results */}
                    <div className="relative lg:h-[500px] flex items-center justify-center">
                        <div className="relative w-full aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center group">
                            {/* Decorative UI elements mimicking the search dashboard */}
                            <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-4 w-1/2 h-4 bg-slate-700 rounded-full opacity-50"></div>
                            </div>
                            <Image src="/search.png" fill className="object-cover" alt="comprehensive-search-dashboard" />
                            {/* <Image src="/search-dashboard.png" fill className="object-cover" /> if available */}
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">Status</div>
                                    <div className="font-bold text-slate-900">Search Complete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
