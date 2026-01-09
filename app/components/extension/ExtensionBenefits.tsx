import { Clock, Shield, Zap, Check } from "lucide-react";

export default function ExtensionBenefits() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Graphic */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 max-w-md mx-auto lg:mx-0">
                            {/* Simple CSS Clock Representation */}
                            <div className="w-48 h-48 rounded-full border-4 border-slate-100 mx-auto relative flex items-center justify-center bg-slate-50">
                                <Clock className="w-16 h-16 text-[#ea580c] opacity-80" />
                                {/* Decorative numbers */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-slate-300 font-bold">12</div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-300 font-bold">6</div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 font-bold">3</div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-300 font-bold">9</div>
                            </div>

                            <div className="mt-8 text-center">
                                <h3 className="text-xl font-bold text-slate-900">Don't Run Out of Time</h3>
                                <p className="text-slate-500 mt-2">File your extension today to preserve your rights.</p>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#ea580c]/5 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            Why use Trademark Engine for your Statement of Use Extension?
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Extend Your Time",
                                    description: "Get an additional 6 months to prove use of your mark in commerce."
                                },
                                {
                                    title: "Avoid Abandonment",
                                    description: "Failure to file a Statement of Use or Extension results in abandonment."
                                },
                                {
                                    title: "Simple Process",
                                    description: "Our intelligent questionnaire guides you through the requirements simply."
                                },
                                {
                                    title: "Expert Review",
                                    description: "Every application is reviewed for common errors before filing."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#ea580c]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check className="w-3 h-3 text-[#ea580c]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
