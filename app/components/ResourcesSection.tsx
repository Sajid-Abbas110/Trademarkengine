import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourcesSection() {
    const resources = [
        {
            Title: "top-10-reasons-sellers-trademark",
            title: "Top 10 Reasons Every Online Seller on Amazon, eBay, Etsy...",
            category: "Trademark Education",
            image: "/blog-1.png",
            date: "Jan 15, 2025",
        },
        {
            Title: "trademark-engine-headless-api",
            title: "Trademark Engine Launches Headless API to Power...",
            category: "Legal Guides",
            image: "/blog-2.webp",
            date: "Jan 12, 2025",
        },
        {
            Title: "top-10-ways-ai-llms-trademark",
            title: "Top 10 Ways to Use AI and LLMs to Make Trademark...",
            category: "Industry Specific",
            image: "/hero.png",
            date: "Jan 08, 2025",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm mb-2 block">
                            Knowledge Base
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Explore Our Resources
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="text-[#ea580c] font-bold hover:underline flex items-center gap-1"
                    >
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <Link
                            key={resource.Title}
                            href={`/blog/${resource.Title}`}
                            className="group block"
                        >
                            {/* Image */}
                            <div className="relative aspect-video rounded-xl mb-4 overflow-hidden">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Category badge */}
                                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                    {resource.category}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#ea580c] transition-colors leading-tight">
                                {resource.title}
                            </h3>
                            <p className="text-slate-500 text-sm">
                                {resource.date} • 5 min read
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
