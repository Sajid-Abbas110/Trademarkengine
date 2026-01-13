import { Lock, CheckCircle2 } from "lucide-react";

interface Step3PricingProps {
    pricingPlan: 'unlimited' | 'onetime';
    setPricingPlan: (plan: 'unlimited' | 'onetime') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3Pricing({ pricingPlan, setPricingPlan, onNext, onBack }: Step3PricingProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                DMCA Takedown Engine - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#ea580c] font-bold text-lg mb-4">Protect Your Copyright with DMCA Takedowns</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Copyrighting your work is the right choice, but what happens when it's stolen? It's not uncommon for organizations or individuals to steal copyrighted materials and claim them as their own. If someone is using your content, images, video, audio, or products without your permission, we're here to help.
                        <br /><br />
                        Trademark Engine is proud to offer its DMCA Takedown service to help safeguard your copyrighted work. When stolen content appears on the internet, our team works quickly to send notices and remove the infringing materials in minutes.
                    </p>

                    <h4 className="text-[#ea580c] font-bold text-sm mb-2">Don't let thieves use your content. You can protect your original work and get back to running your business in just a few clicks.</h4>
                    <p className="text-slate-600 text-xs mb-8">
                        If you notice that your work has been stolen, Trademark Engine is ready to jump on the case. All you have to do is answer a brief questionnaire, and we'll craft and send a DMCA Takedown Engine for you. It's affordable, fast, and easier than hiring a lawyer. Don't wait — take down your stolen content today!
                    </p>

                    <div className="space-y-4 mb-8">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${pricingPlan === 'unlimited' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                {pricingPlan === 'unlimited' && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            <input
                                type="radio"
                                name="pricingPlan"
                                className="hidden"
                                checked={pricingPlan === 'unlimited'}
                                onChange={() => setPricingPlan('unlimited')}
                            />
                            <span className="text-sm font-bold text-slate-800">Unlimited Takedowns ($4.99/month)</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${pricingPlan === 'onetime' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                {pricingPlan === 'onetime' && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            <input
                                type="radio"
                                name="pricingPlan"
                                className="hidden"
                                checked={pricingPlan === 'onetime'}
                                onChange={() => setPricingPlan('onetime')}
                            />
                            <span className="text-sm font-bold text-slate-800">One Time ($65)</span>
                        </label>
                    </div>

                    <div className="flex justify-end items-center gap-6">
                        <button
                            type="button"
                            onClick={onBack}
                            className="text-[#3b6d8c] font-bold text-xs uppercase tracking-wider hover:text-slate-700 flex items-center gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            Previous
                        </button>

                        <button
                            type="submit"
                            className="bg-[#ea580c] text-white font-bold py-3 px-10 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-xs tracking-wider"
                        >
                            Continue
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
