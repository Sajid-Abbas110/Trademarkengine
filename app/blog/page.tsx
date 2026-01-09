"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, Copyright, Verified, Calendar, Tag, ChevronLeft } from "lucide-react";
import BlogCard from "@/app/components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Mock Data
const blogPosts = [
    {
        title: "Top 10 Reasons Every Online Seller on Amazon, eBay, Etsy, and Other Marketplaces Should Trademark and Copyright their Brand",
        summary: "Online sales are booming globally. E-commerce marketplaces and platforms like Amazon, eBay, Taobao, Tmall, Shopee, Rakuten, Walmart Marketplace...",
        imageSrc: "/hero.png",
        category: "Copyright",
        slug: "top-10-reasons-sellers-trademark"
    },
    {
        title: "Trademark Engine Launches New Brand Identity",
        summary: "Trademark Engine is happy to visually introduce our new look and feel to our customers, industry partners, and community...",
        imageSrc: "/hero.png",
        category: "News",
        slug: "trademark-engine-rebrand"
    },
    {
        title: "Top 10 Ways to Use Visual Aids to Make Trademark Registration Easier",
        summary: "It’s easier for humans to recognize and remember visuals. Visuals help customers recall your Trademark easily...",
        imageSrc: "/hero.png",
        category: "Trademark",
        slug: "visual-aids-trademark"
    },
    {
        title: "Why Should You Register Copyright?",
        summary: "Copyright allows an owner of an creative work to control how it is used. It is the legal right that grants the creator...",
        imageSrc: "/hero.png",
        category: "Copyright",
        slug: "why-register-copyright"
    },
    {
        title: "Reaching Your Trademark or Copyright Goals",
        summary: "Set goals that help to evaluate where your business is and where it is going. Write down steps leading to your...",
        imageSrc: "/hero.png",
        category: "Business",
        slug: "reaching-trademark-goals"
    },
    {
        title: "3 Cautionary Tales of Copyright Infringement",
        summary: "What happens if you don't secure your copyright? Let's take a look at 3 cautionary tales of copyright infringement...",
        imageSrc: "/hero.png",
        category: "Copyright",
        slug: "cautionary-tales-copyright"
    },
    {
        title: "Tips to Protect Your Listings on Instagram",
        summary: "Social media is a great tool for businesses to expand their reach. But it is also a place where your images can be stolen...",
        imageSrc: "/hero.png",
        category: "News",
        slug: "protect-listings-instagram"
    },
    {
        title: "How Long Does It Take to Register Your Trademark?",
        summary: "One of the most common questions we get is how long does the process take. The answer depends on a few factors...",
        imageSrc: "/hero.png",
        category: "Trademark",
        slug: "how-long-trademark"
    },
];

const categories = ["All", "Copyright", "News", "Trademark", "Business", "Infringement"];

export default function BlogPage() {
    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-[#ea580c]/20 selection:text-[#ea580c]">
            <Navbar />
            <main className="pt-24 pb-20 bg-[#f8fafc]"> {/* Light slate background */}

                {/* Header Section */}
                <section className="container mx-auto px-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Link href="/" className="hover:text-[#ea580c]">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#ea580c] font-medium">Blog</span>
                    </div>
                </section>

                {/* Featured Article layout (similar to first image section in design) */}
                <section className="container mx-auto px-4 mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-1/2">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                                    Featured
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Top 10 Reasons Every Online Seller on Amazon Should Trademark
                                </h1>
                                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                    Online global ecommerce markets are phenomenal for small businesses. However, protecting your brand on platforms like Amazon, eBay, and Etsy is crucial to avoiding copycats and IP theft.
                                </p>
                                <div className="flex items-center gap-4 text-slate-500 text-sm mb-8">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 24, 2024</span>
                                    <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> Business</span>
                                </div>
                                <Link
                                    href="/blog/featured"
                                    className="inline-block bg-[#ea580c] text-white font-bold py-3 px-8 rounded-md shadow hover:bg-[#c2410c] transition-colors"
                                >
                                    Read Full Article
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 h-[400px] relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/hero.png"
                                    alt="Featured Blog Post"
                                    fill
                                    className="object-cover"
                                />
                                {/* Fallback pattern */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 z-[-1]" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Main Content Area */}
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/4 space-y-8">
                            {/* Search */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4">Search the Blog</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
                                    />
                                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4">Blog Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((cat, i) => (
                                        <li key={i}>
                                            <Link href="#" className="flex items-center justify-between text-slate-600 hover:text-[#ea580c] group">
                                                <span>{cat}</span>
                                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#ea580c]" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter (Optional but common) */}
                            <div className="bg-[#ea580c] p-6 rounded-xl shadow-md text-white">
                                <h3 className="font-bold text-lg mb-2">Subscribe</h3>
                                <p className="text-orange-100 text-sm mb-4">Get the latest trademark news delivered to your inbox.</p>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 rounded-lg text-slate-900 mb-2 focus:outline-none"
                                />
                                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg transition-colors text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </aside>

                        {/* Blog Grid */}
                        <div className="w-full lg:w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {blogPosts.map((post, index) => (
                                    <BlogCard
                                        key={index}
                                        {...post}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ea580c] text-white font-bold shadow-md">
                                    1
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">
                                    2
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">
                                    3
                                </button>
                                <span className="flex items-end px-2 text-slate-400">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">
                                    8
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
