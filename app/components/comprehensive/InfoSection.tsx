import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoItem {
    label?: string;
    value?: string;
}

interface InfoSectionProps {
    title: string;
    description: string;
    items?: InfoItem[]; // For lists like the "Conflict" example in design
    reversed?: boolean;
    imagePosition?: "left" | "right"; // Explicit control
    graphic?: React.ReactNode; // Optional custom graphic instead of image
}

export default function InfoSection({
    title,
    description,
    items,
    reversed = false,
    graphic
}: InfoSectionProps) {
    return (
        <section className={cn("py-20 md:py-28 overflow-hidden", reversed ? "bg-slate-50" : "bg-white")}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className={cn(reversed ? "lg:order-2" : "lg:order-1")}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {description}
                        </p>

                        {items && (
                            <ul className="space-y-4">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#ea580c] mt-2.5 flex-shrink-0"></div>
                                        <span className="text-slate-700">{item.value || item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Graphic/Image Side */}
                    <div className={cn("relative flex justify-center", reversed ? "lg:order-1" : "lg:order-2")}>
                        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-lg flex items-center justify-center">
                            {graphic ? graphic : (
                                <span className="text-slate-400 font-semibold">Graphic Placeholder</span>
                            )}

                            {/* Decorative circle if needed */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper specific graphics for the page sections to keep page.tsx clean?
// Or we can just pass them as props in page.tsx. I'll pass them in page.tsx for flexibility.
