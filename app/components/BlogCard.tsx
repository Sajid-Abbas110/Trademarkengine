"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
    title: string;
    summary: string;
    imageSrc: string;
    category: string;
    slug: string;
}

export default function BlogCard({
    title,
    summary,
    imageSrc,
    category,
    slug
}: BlogCardProps) {
    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#ea580c] uppercase tracking-wide">
                    {category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                    {summary}
                </p>
                <div className="mt-auto">
                    <Link
                        href={`/blog/${slug}`}
                        className="text-[#ea580c] font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
