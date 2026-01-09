import Image from "next/image";
import { Star } from "lucide-react";

export default function DMCAHero() {
    return (
        <section className="bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Keep Copyright <br />
                            Content Thieves at <br />
                            Bay
                        </h1>

                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Don't let organizations or individuals steal your content and claim it as their own. Trademark Engine's DMCA Takedown service helps you safeguard your copyrighted materials with confidence.
                        </p>

                        <ul className="space-y-2 pt-2">
                            <li className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
                                <span>35,000+ five-star reviews</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
                                <span>Rated 4.8 by Forbes Advisor</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
                                <span>Rated 4.5+ on Trust Pilot</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="#start"
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                Start Your DMCA Takedown Today
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6">
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100">
                                <span className="font-bold text-4xl text-slate-900">4.8</span>
                                <div className="flex flex-col">
                                    <div className="flex text-[#facc15]">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-3 h-3 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-slate-500 font-bold">Forbes ADVISOR</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Placeholder for Inc 5000 logo which is often present */}
                                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">Inc <br /> 5000</div>
                                <div className="text-slate-500 text-[10px] leading-tight max-w-[100px]">
                                    America's Fastest Growing Private Companies
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[600px] rounded-bl-[100px] overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-slate-200">
                            {/* Placeholder for the person with headphones image */}
                            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white">
                                Person with Headphones Image Placeholder
                            </div>
                        </div>
                        {/* 
                         <Image src="/dmca-hero.jpg" fill className="object-cover" alt="Person with headphones" /> 
                         */}
                    </div>
                </div>
            </div>
            {/* Bottom tagline */}
            <div className="absolute bottom-0 w-full bg-slate-900/80 py-4 text-center backdrop-blur-sm z-20">
                <p className="text-white text-xs font-bold uppercase tracking-wider">
                    98% of customers recommend our DMCA Takedown service
                </p>
            </div>
        </section>
    );
}
