import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";

export default function CopyrightHero() {
    return (
        <section className="bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="bg-white inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Official Registration Service</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            You've worked <br />hard to <br />
                            create it. Now <br />
                            <span className="text-[#ea580c]">copyright it.</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Turn to Trademark Engine for your Copyright Registration needs! protecting your songs, books, pictures, and other works. Starting as low as $99 + gov fees.
                        </p>

                        <ul className="space-y-3 pt-2">
                            {[
                                "Protect your work from being copied or stolen",
                                "Establish a public record of your ownership",
                                "Sue for damages in federal court"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-[#ea580c] flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="#pricing"
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                Start My Copyright Registration
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6">
                            <div className="flex items-center gap-2">
                                <div className="flex text-[#facc15]">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="font-bold text-slate-800">4.8/5</span>
                            </div>
                            <div className="h-6 w-px bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                {/* Placeholder for Shopper Approved logo */}
                                <div className="text-slate-500 text-xs font-bold tracking-tight">
                                    SHOPPER <br /> APPROVED
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        {/* In a real app we would use the actual image of the artist painting */}
                        <div className="absolute inset-0 bg-slate-200">
                            {/* Placeholder generic connection to image tool or asset */}
                            <Image src="/copyright-hero.jpg" fill className="object-cover" alt="Artist painting" />
                        </div>
                        {/* If we had the asset: 
                         <Image src="/copyright-hero.jpg" fill className="object-cover" alt="Artist painting" /> 
                         */}
                    </div>
                </div>
            </div>
        </section>
    );
}
