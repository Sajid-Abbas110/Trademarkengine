import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCompanies() {
    const companies = [
        { name: "Amazon", id: "amazon" },
        { name: "Apple", id: "apple" },
        { name: "AT&T", id: "att" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                    Featured Companies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {companies.map((company) => (
                        <div key={company.id} className="group border border-slate-100 p-8 rounded-xl text-center hover:shadow-lg transition-all bg-white flex flex-col items-center justify-between min-h-[180px]">
                            <div className="flex-grow flex items-center justify-center w-full">
                                {/* Text logo representation for now */}
                                <span className={
                                    company.id === 'amazon' ? 'text-4xl font-bold text-slate-800 tracking-tighter' :
                                        company.id === 'apple' ? 'text-4xl font-semibold text-slate-500' :
                                            'text-4xl font-black text-blue-500 tracking-widest'
                                }>
                                    {company.name}
                                </span>
                            </div>
                            <Link href="#" className="text-blue-500 text-xs font-bold uppercase tracking-wide mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                View Classifications &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
