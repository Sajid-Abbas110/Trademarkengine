"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        date: "August 2016",
        title: "Trademark Engine is Founded",
        description: "Trademark Engine launches with a mission to make trademark registration easy, affordable, and accessible to small business owners.",
    },
    {
        date: "September 2019",
        title: "Trademark Engine Serves its 50,000th Customer",
        description: "A major milestone! We've helped over 50,000 entrepreneurs protect their brands and grow their businesses.",
    },
    {
        date: "March 2021",
        title: "Trademark Engine Joins the Swyfft Family",
        description: "We joined forces with Swyfft to leverage better technology and provide even more efficient services.",
    },
    {
        date: "October 2022",
        title: "Trademark Engine Named to Inc. 5000",
        description: "Recognized as one of the fastest-growing private companies in America. A testament to our team's dedication.",
    },
];

export default function Timeline() {
    return (
        <div className="relative container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                Trademark Engine Over the Years
            </h2>

            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-32 bottom-20 w-0.5 bg-orange-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex flex-col md:flex-row items-center",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        )}
                    >
                        {/* Empty side for spacing on desktop */}
                        <div className="hidden md:block w-1/2" />

                        {/* Dot on line */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#ea580c] rounded-full border-4 border-white shadow-sm -translate-x-1/2 transform translate-y-2 z-10 hidden md:block" />

                        {/* Content Card */}
                        <div className={cn(
                            "w-full md:w-1/2 pl-8 md:pl-0",
                            index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                        )}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative"
                            >
                                {/* Mobile Line & Dot (Custom implementation for mobile) */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-orange-200 -ml-4" />
                                <div className="md:hidden absolute left-0 top-8 w-3 h-3 bg-[#ea580c] rounded-full -ml-[1.15rem]" />

                                <span className="text-[#ea580c] font-bold text-sm tracking-wide uppercase block mb-2">
                                    {event.date}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {event.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {event.description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
