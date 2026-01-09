import { BadgeCheck, Clock, FileCheck, Shield } from "lucide-react";

export default function StatementBenefits() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Graphic */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-white rounded-full shadow-xl border-4 border-slate-100 flex items-center justify-center">
                            {/* Abstract Seal Graphic */}
                            <div className="relative w-3/4 h-3/4 border-2 border-slate-200 rounded-full flex items-center justify-center p-8 text-center">
                                <div className="space-y-2">
                                    <div className="w-16 h-16 bg-[#ea580c]/10 text-[#ea580c] rounded-full mx-auto flex items-center justify-center">
                                        <BadgeCheck className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900">Official Filing</h3>
                                    <p className="text-xs text-slate-500">USPTO Certified</p>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute top-0 right-10 bg-white p-3 rounded-lg shadow-lg border border-slate-100">
                                <Clock className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-lg border border-slate-100">
                                <FileCheck className="w-6 h-6 text-green-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                            Why use Trademark Engine for your Statement of Use?
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Official Filing",
                                    description: "We file your Statement of Use directly with the USPTO."
                                },
                                {
                                    title: "Avoid Errors",
                                    description: "Our system checks for common errors that could lead to rejection."
                                },
                                {
                                    title: "Meet Deadlines",
                                    description: "Ensure you don't miss your filing deadline and lose your trademark."
                                },
                                {
                                    title: "Affordable",
                                    description: "Save hundreds compared to hiring a traditional attorney."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#ea580c]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <BadgeCheck className="w-3 h-3 text-[#ea580c]" />
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
