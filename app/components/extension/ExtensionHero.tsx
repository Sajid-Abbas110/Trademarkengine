import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle } from "lucide-react";

export default function ExtensionHero() {
    return (
        <section className="bg-slate-900 relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                File Your <br />Statement of <br />
                                <span className="text-blue-400">Use Extension Online.</span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                                Secure more time to prove "Actual Use" of your mark.
                                File an Extension of Time for Filing a Statement of Use with ease.
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Extend your deadline by 6 months",
                                "Avoid losing your trademark rights",
                                "Simple, fast, and secure process"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-[#ea580c] flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/extension/form"
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all text-center text-lg"
                            >
                                Get Started Now
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-slate-700/50 mt-8">
                            <div className="flex flex-col">
                                <div className="flex text-[#facc15] mb-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-slate-400 text-sm">
                                    <span className="font-bold text-white">4.8/5</span> Average based on 50k+ reviews
                                </span>
                            </div>
                            <div className="h-10 w-px bg-slate-700"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                                    {/* Placeholder for shopper approved or trust badge */}
                                    <div className="w-full h-full bg-slate-600 rounded-full"></div>
                                </div>
                                <span className="text-slate-300 text-xs max-w-[100px] leading-tight">
                                    Secure & Trusted Filing Service
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {/* We will use a placeholder or the provided design style */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <Image
                                src="/extension-hero.jpg"
                                alt="Extension Hero"
                                fill
                                className="object-cover"
                            />
                            {/* If we had the image asset we would put <Image /> here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
