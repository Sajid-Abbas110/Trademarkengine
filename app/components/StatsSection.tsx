"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function StatsSection() {
    const [counts, setCounts] = useState({
        applications: 0,
        registrations: 0,
        reviews: 0,
    });

    useEffect(() => {
        const targets = {
            applications: 250000,
            registrations: 3500,
            reviews: 4900,
        };

        const duration = 1500;
        const start = Date.now();

        const timer = setInterval(() => {
            const progress = Math.min((Date.now() - start) / duration, 1);

            setCounts({
                applications: Math.floor(progress * targets.applications),
                registrations: Math.floor(progress * targets.registrations),
                reviews: Math.floor(progress * targets.reviews),
            });

            if (progress === 1) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#fff7ed]">
            {/* Top Reviews */}
            <div className="container mx-auto px-4 md:px-8 py-20 text-center">
                <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm mb-4 block">
                    Client Satisfaction
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
                    Trademark Engine is rated 4.5 out of <br />
                    5 based on 31,500 reviews.
                </h2>

                <div className="bg-[#1e293b] text-white p-8 rounded-xl max-w-3xl mx-auto text-left relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                        <Star className="fill-white text-white w-6 h-6" />
                        <span className="font-bold text-xl">Trustpilot</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4">
                        "It was a really easy experience with Trademark Engine. Their dashboard is fantastic,
                        user friendly and efficient..."
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="bg-[#00b67a] w-5 h-5 flex items-center justify-center mr-1"
                                >
                                    <Star className="fill-white text-white w-3 h-3" />
                                </div>
                            ))}
                        </div>
                        <span className="text-white font-bold ml-2">Michelle</span>
                        <span>•</span>
                        <span>CA, US</span>
                    </div>
                </div>
            </div>

            {/* Stats Strip (1000px width) */}
            <div className="bg-[#1e293b] py-16 flex justify-center items-center max-w-[1200px] mx-auto">
                <div className="mx-auto max-w-[1200px] px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700 text-white">
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-2">
                                {counts.applications.toLocaleString()}+
                            </div>
                            <p className="text-slate-300 font-medium">
                                Trademark applications
                            </p>
                        </div>

                        <div className="px-4 pt-8 md:pt-0">
                            <div className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-2">
                                {counts.registrations.toLocaleString()}+
                            </div>
                            <p className="text-slate-300 font-medium">
                                Trademark registrations
                            </p>
                        </div>

                        <div className="px-4 pt-8 md:pt-0">
                            <div className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-2">
                                {counts.reviews.toLocaleString()}+
                            </div>
                            <p className="text-slate-300 font-medium">Total reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
