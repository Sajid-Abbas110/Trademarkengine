"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FreeSearchHero from "../components/free-search/FreeSearchHero";
import SearchFeatures from "../components/free-search/SearchFeatures";
import FeaturedCompanies from "../components/free-search/FeaturedCompanies";
import SearchCategories from "../components/free-search/SearchCategories";
import FreeSearchFAQ from "../components/free-search/FreeSearchFAQ";

export default function FreeSearchPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <FreeSearchHero />
                <SearchFeatures />
                <FeaturedCompanies />
                <SearchCategories />
                <FreeSearchFAQ />

                {/* Bottom CTA */}
                <div className="bg-[#1e293b] py-20 text-center text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Take action to protect your name <br /> today.
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                            Millions of smarter applications start with a simple search.
                        </p>
                        <a
                            href="/registration"
                            className="inline-block bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-md shadow-lg hover:shadow-xl transition-all"
                        >
                            Start My Free Search
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
