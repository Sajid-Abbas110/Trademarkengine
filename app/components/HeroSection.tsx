import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-[#fff7ed] pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.1]">
                            On your (trade)mark, <br />
                            Get set. Start your <br />
                            engine... Register your <br />
                            mark!
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Protect your brand name, slogan, or logo today with our fast, easy, and affordable trademark registration services. Start your application in minutes!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="/registration"
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                Register My Trademark Now
                            </Link>
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
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                                    50k+
                                </div>
                                <div className="text-sm font-semibold text-slate-700">
                                    Trademarks <br /> Filed
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        {/* Abstract organic shapes background simulation */}
                        <div className="absolute -z-10 top-0 right-0 w-3/4 h-full bg-[#ffedd5] rounded-tl-[100px] rounded-br-[50px]"></div>
                        <Image
                            src="/hero.png"
                            alt="Trademark Registration"
                            width={600}
                            height={500}
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
