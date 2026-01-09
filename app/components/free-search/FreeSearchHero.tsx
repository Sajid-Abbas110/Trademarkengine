import { Search } from "lucide-react";

export default function FreeSearchHero() {
    return (
        <section className="bg-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Search millions of <br />
                    Trademarks for Free
                </h1>
                <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                    Search millions of trademarks that are live or pending with the USPTO.
                </p>

                <div className="max-w-3xl mx-auto relative group">
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Enter a keyword or phrase..."
                            className="w-full pl-16 pr-32 py-5 rounded-full border border-slate-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent text-lg transition-all hover:shadow-lg"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 rounded-full font-bold transition-colors">
                            Search
                        </button>
                    </div>
                    {/* Helper text under search bar */}
                    <div className="mt-4 text-xs text-slate-400">
                        Try searching for generic terms or specific brand names.
                    </div>
                </div>
            </div>
        </section>
    );
}
