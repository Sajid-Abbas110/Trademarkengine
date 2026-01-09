"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServicePricingCardProps {
    title: string;
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
}

export default function ServicePricingCard({
    title,
    price,
    description,
    features,
    isPopular = false,
    buttonText
}: ServicePricingCardProps) {
    return (
        <div className={cn(
            "relative flex flex-col p-6 bg-white rounded-xl border transition-all duration-300",
            isPopular
                ? "border-[#ea580c] shadow-xl scale-105 z-10"
                : "border-slate-200 shadow-sm hover:shadow-md"
        )}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ea580c] text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className={cn("text-lg font-bold mb-2", isPopular ? "text-[#ea580c]" : "text-slate-900")}>
                    {title}
                </h3>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">{description}</p>
                <div className="flex justify-center items-baseline mb-1">
                    <span className="text-4xl font-extrabold text-slate-900">${price}</span>
                </div>
                <div className="text-slate-400 text-xs">+ USPTO fee</div>
            </div>

            <Link
                href="/checkout"
                className={cn(
                    "w-full py-3 rounded-md font-bold text-sm mb-8 transition-colors text-center",
                    isPopular
                        ? "bg-[#ea580c] text-white hover:bg-[#c2410c]"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                )}
            >
                {buttonText}
            </Link>

            <div className="space-y-4 flex-1">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
