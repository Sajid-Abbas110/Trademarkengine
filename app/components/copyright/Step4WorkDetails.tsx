import { Lock, CheckCircle2 } from "lucide-react";

interface Step4WorkDetailsProps {
    details: {
        isWorkForHire: boolean | null;
        isAnonymous: boolean | null;
        isPseudonym: boolean | null;
        hasPreexistingMaterial: boolean | null;
        isRegisteredOtherName: boolean | null;
    };
    onUpdate: (details: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step4WorkDetails({ details, onUpdate, onNext, onBack }: Step4WorkDetailsProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const updateField = (field: string, value: boolean) => {
        onUpdate({ ...details, [field]: value });
    };

    const Question = ({
        label,
        field,
        value
    }: {
        label: string;
        field: string;
        value: boolean | null;
    }) => (
        <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span>{label}
            </label>
            <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${value === true ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                        {value === true && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <input
                        type="radio"
                        name={field}
                        className="hidden"
                        checked={value === true}
                        onChange={() => updateField(field, true)}
                    />
                    <span className="text-sm text-slate-700">Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${value === false ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                        {value === false && <CheckCircle2 className="w-4 h-4 text-white" />}
                        {/* Note: Screenshot shows CheckCircle for 'No' selection sometimes, or just dot. 
                            Using CheckCircle for 'No' here to match style if that's the default safe answer usually.
                            Actually screenshot 4 shows 'No' selected with Red check circle. */}
                        {value === false && <div className="w-2 h-2 bg-white rounded-full bg-white" />}
                        {/* Let's stick to consistent dot for now unless specific icon requested */}
                    </div>
                    <input
                        type="radio"
                        name={field}
                        className="hidden"
                        checked={value === false}
                        onChange={() => updateField(field, false)}
                    />
                    <span className="text-sm text-slate-700">No</span>
                </label>
            </div>
        </div>
    );

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                More About Your Work - <span className="text-[#3b6d8c]">Step 4</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <div className="bg-white/50 p-6 rounded mb-8">
                        <div className="text-xs text-slate-500 mb-4 font-mono">
                            {/* Visual placeholder for the "aaa aaa" from screenshot */}
                            Preview: Title and Author
                        </div>

                        <Question
                            label="Was this author's work made for hire?"
                            field="isWorkForHire"
                            value={details.isWorkForHire}
                        />

                        <Question
                            label="Author's work made anonymously?"
                            field="isAnonymous"
                            value={details.isAnonymous}
                        />

                        <Question
                            label="Work created under a pseudonym?"
                            field="isPseudonym"
                            value={details.isPseudonym}
                        />

                        <div className="h-px bg-slate-200 my-6" />

                        <Question
                            label="Does the work have material not created by you that pre-existed the creation of the work?"
                            field="hasPreexistingMaterial"
                            value={details.hasPreexistingMaterial}
                        />

                        <Question
                            label="Is the copyright going to be registered in a name other than the author's?"
                            field="isRegisteredOtherName"
                            value={details.isRegisteredOtherName}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-4 mb-8">
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
