import { Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    notIncluded: string[];
    cta: string;
    link?: string;
    popular: boolean;
}

interface PricingSectionProps {
    title?: string;
    subtitle?: string;
    plans?: PricingPlan[];
}

export default function PricingSection({
    title = "Start protecting your business today",
    subtitle = "Choose the package that suits your needs. Transparent pricing with no hidden legal fees.",
    plans = [
        {
            name: "Basic Package",
            price: "49",
            description: "plus specialized USPTO filing fees",
            features: [
                "Direct-hit search of the Federal USPTO database",
                "Preparation & filing of your trademark application",
                "Electronic delivery of your registration certificate",
                "Lifetime customer support"
            ],
            notIncluded: [
                "Comprehensive Search",
                "Extensive functionality check"
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Standard Package",
            price: "299",
            description: "plus specialized USPTO filing fees",
            features: [
                "Everything in Basic Package",
                "Comprehensive Federal, State & Common Law Search",
                "Detailed search report PDF",
                "Priority processing of your application"
            ],
            notIncluded: [],
            cta: "Select Standard",
            popular: false,
        },
        {
            name: "Premium Package",
            price: "539",
            description: "plus specialized USPTO filing fees",
            features: [
                "Everything in Standard Package",
                "Cease & Desist Letter template",
                "Trademark Transfer/Assignment Assignment form",
                "24-hour expedited processing",
                "100% Money Back Guarantee"
            ],
            notIncluded: [],
            cta: "Choose Premium",
            popular: true,
        },
    ]
}: PricingSectionProps) {

    return (
        <section className="py-24 bg-[#1e293b] text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-left mb-16">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-[#ea580c] rounded flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm">Pricing</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h2>
                    <p className="text-slate-300 max-w-2xl text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "bg-white rounded-xl p-8 text-slate-900 border transition-transform duration-300 hover:-translate-y-2",
                                plan.popular ? "border-[#ea580c] shadow-[0_0_40px_rgba(234,88,12,0.3)] relative" : "border-transparent"
                            )}
                        >
                            {plan.popular && (
                                "popular" in plan && // Type guard kind of check or just rendering it primarily if true
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ea580c] text-white text-xs font-bold px-4 py-1 rounded-b-lg uppercase tracking-wide">
                                    Popular Choice
                                </div>
                            )}

                            <h3 className={cn("text-xl font-bold mb-4", plan.popular ? "text-[#ea580c]" : "text-[#1e293b]")}>{plan.name}</h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-5xl font-extrabold text-[#1e293b]">${plan.price}</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-8 uppercase font-semibold">{plan.description}</p>

                            <Link
                                href={plan.link || "/registration/new"}
                                className={cn(
                                    "block w-full text-center py-4 rounded-lg font-bold transition-colors mb-8",
                                    plan.popular
                                        ? "bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-lg"
                                        : "bg-[#1e293b] hover:bg-[#0f172a] text-white"
                                )}
                            >
                                {plan.cta}
                            </Link>

                            <div className="space-y-4">
                                <p className="text-xs font-bold uppercase text-slate-400">Includes:</p>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 p-1 rounded-full">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 opacity-50">
                                        <div className="mt-1 bg-slate-100 p-1 rounded-full">
                                            <X className="w-3 h-3 text-slate-500" />
                                        </div>
                                        <span className="text-sm text-slate-500 line-through">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
