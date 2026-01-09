import Link from "next/link";
import { Search } from "lucide-react";

export default function SearchCategories() {
    const goods = [
        "Chemicals", "Paints", "Cosmetics and Cleaning Products",
        "Industrial Oils and Greases", "Pharmaceuticals", "Metal Goods"
    ];

    const services = [
        "Advertising and Business", "Insurance and Financial", "Building Construction and Repair",
        "Telecommunications", "Transportation and Storage", "Treatment of Materials"
    ];

    const filingDates = [
        "2023", "2022", "2021",
        "2020", "2019", "2018",
        "2017", "2016", "2015"
    ];

    const CategoryGroup = ({ title, items, badge }: { title: string, items: string[], badge: string }) => (
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-[#ea580c] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {/* Icon placeholder logic */}
                    <span className="font-bold text-sm">?</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                    <Link
                        href="#"
                        key={idx}
                        className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg hover:shadow-md hover:border-slate-200 transition-all group"
                    >
                        <span className="text-slate-600 font-medium group-hover:text-[#ea580c] transition-colors line-clamp-1">{item}</span>
                        <Search className="w-4 h-4 text-slate-300 group-hover:text-[#ea580c]" />
                    </Link>
                ))}
            </div>
            <div className="mt-4">
                <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-bold py-2 px-6 rounded shadow transition-colors">
                    {badge}
                </button>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-[#f8fafc]">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
                    Search by Categories
                </h2>

                <CategoryGroup title="Popular Goods" items={goods} badge="View All" />
                <CategoryGroup title="Popular Services" items={services} badge="View All" />
                <CategoryGroup title="Browse by Filing Date" items={filingDates} badge="View All" />
            </div>
        </section>
    );
}
