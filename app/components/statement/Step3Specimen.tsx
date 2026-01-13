import { Lock, CheckCircle2 } from "lucide-react";

interface Step3SpecimenProps {
    coversAllGoods: boolean | null;
    specimenClassType: 'goods' | 'service' | 'both' | null;
    setCoversAllGoods: (val: boolean) => void;
    setSpecimenClassType: (val: 'goods' | 'service' | 'both') => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3Specimen({
    coversAllGoods,
    specimenClassType,
    setCoversAllGoods,
    setSpecimenClassType,
    onNext,
    onBack
}: Step3SpecimenProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Statement of Use Filing - <span className="text-[#3b6d8c]">Step 3</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    {/* Coverage Question */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-4">
                            Does your allegation of use cover all of the goods and/or services identified in your Notice of Allowance?
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${coversAllGoods === true ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {coversAllGoods === true && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="coversAllGoods"
                                    className="hidden"
                                    checked={coversAllGoods === true}
                                    onChange={() => setCoversAllGoods(true)}
                                />
                                <span className="text-sm text-slate-700">Yes</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${coversAllGoods === false ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {coversAllGoods === false && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="coversAllGoods"
                                    className="hidden"
                                    checked={coversAllGoods === false}
                                    onChange={() => setCoversAllGoods(false)}
                                />
                                <span className="text-sm text-slate-700">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Class Type Question */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-4">
                            <span className="text-red-500 mr-1">*</span>
                            Please specify class type for specimen.
                        </label>
                        <div className="flex items-center gap-6">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${specimenClassType === 'goods' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {specimenClassType === 'goods' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="specimenClassType"
                                    className="hidden"
                                    checked={specimenClassType === 'goods'}
                                    onChange={() => setSpecimenClassType('goods')}
                                />
                                <span className="text-sm text-slate-700">Goods</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${specimenClassType === 'service' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {specimenClassType === 'service' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="specimenClassType"
                                    className="hidden"
                                    checked={specimenClassType === 'service'}
                                    onChange={() => setSpecimenClassType('service')}
                                />
                                <span className="text-sm text-slate-700">Service</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${specimenClassType === 'both' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {specimenClassType === 'both' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="specimenClassType"
                                    className="hidden"
                                    checked={specimenClassType === 'both'}
                                    onChange={() => setSpecimenClassType('both')}
                                />
                                <span className="text-sm text-slate-700">Both</span>
                            </label>

                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-6 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
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
                            disabled={coversAllGoods === null || !specimenClassType}
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
