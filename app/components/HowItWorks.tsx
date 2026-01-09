import { FileText, Search, Send, LucideIcon } from "lucide-react";

interface Step {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
}

interface HowItWorksProps {
    title?: string;
    description?: string;
    steps?: Step[];
}

export default function HowItWorks({
    title = "How It Works",
    description = "Get your trademark registered in just 3 simple steps locally in minutes without any legal headaches.",
    steps = [
        {
            id: 1,
            name: "Complete our Questionnaire",
            description: "Fill out our simple, user-friendly questionnaire about your mark and goods/services. It takes less than 15 minutes!",
            icon: FileText,
        },
        {
            id: 2,
            name: "Review & Application",
            description: "Our system (or attorney) reviews your information for accuracy and prepares your official application for filing.",
            icon: Search,
        },
        {
            id: 3,
            name: "File & Track Filing",
            description: "We file your application with the USPTO and help you track its status until your trademark is registered.",
            icon: Send,
        },
    ]
}: HowItWorksProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#ea580c] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300 relative">
                                <step.icon className="w-8 h-8" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.name}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
