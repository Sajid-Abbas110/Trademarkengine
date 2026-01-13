import { Lock, CheckCircle2 } from "lucide-react";

interface Step2ChangesProps {
    changeAddress: boolean | null;
    changeDrawing: boolean | null;
    setChangeAddress: (val: boolean) => void;
    setChangeDrawing: (val: boolean) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step2Changes({
    changeAddress,
    changeDrawing,
    setChangeAddress,
    setChangeDrawing,
    onNext,
    onBack
}: Step2ChangesProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Statement of Use Filing - <span className="text-[#3b6d8c]">Step 2</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    {/* Address Question */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-4">
                            Do you need to change your address?
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${changeAddress === true ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {changeAddress === true && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="changeAddress"
                                    className="hidden"
                                    checked={changeAddress === true}
                                    onChange={() => setChangeAddress(true)}
                                />
                                <span className="text-sm text-slate-700">Yes</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${changeAddress === false ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {changeAddress === false && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="changeAddress"
                                    className="hidden"
                                    checked={changeAddress === false}
                                    onChange={() => setChangeAddress(false)}
                                />
                                <span className="text-sm text-slate-700">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Drawing Question */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-4">
                            Do you need to submit a new drawing of the mark?
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${changeDrawing === true ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {changeDrawing === true && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="changeDrawing"
                                    className="hidden"
                                    checked={changeDrawing === true}
                                    onChange={() => setChangeDrawing(true)}
                                />
                                <span className="text-sm text-slate-700">Yes</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${changeDrawing === false ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {changeDrawing === false && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input
                                    type="radio"
                                    name="changeDrawing"
                                    className="hidden"
                                    checked={changeDrawing === false}
                                    onChange={() => setChangeDrawing(false)}
                                />
                                <span className="text-sm text-slate-700">No</span>
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
                            disabled={changeAddress === null || changeDrawing === null}
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
