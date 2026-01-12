export default function GlassdoorSection() {
    return (
        <div className="w-full flex justify-center mt-16">
            <div className="max-w-6xl w-full p-6">
                <div className="bg-[#c9efff] rounded-2xl p-4 shadow-md">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center font-bold text-blue-600">
                            G
                        </div>
                        <span className="font-semibold text-slate-800">glassdoor</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Great working environment “This has been one of the best places I’ve
                        worked at. It is a smaller company, so we have a close-knit
                        relationship between the employees. Everyone is really helpful, and
                        management truly has an open-door policy, which is awesome! Your
                        concerns, suggestions, and comments are not only heard but also
                        taken into consideration. They have great benefits like medical,
                        dental, vision, and life insurance. And they never fail to give you
                        great kudos for a job well done, which is great motivation to
                        continue doing your best.”
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-orange-400 text-xl">★</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
