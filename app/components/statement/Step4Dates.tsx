import { Lock, HelpCircle, ChevronDown } from "lucide-react";

interface DateFields {
    year: string;
    month: string;
    day: string;
}

interface Step4DatesProps {
    dateFirstUseAnywhere: DateFields;
    dateFirstUseCommerce: DateFields;
    setDateFirstUseAnywhere: (val: DateFields) => void;
    setDateFirstUseCommerce: (val: DateFields) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step4Dates({
    dateFirstUseAnywhere,
    dateFirstUseCommerce,
    setDateFirstUseAnywhere,
    setDateFirstUseCommerce,
    onNext,
    onBack
}: Step4DatesProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const updateAnywhere = (field: keyof DateFields, value: string) => {
        setDateFirstUseAnywhere({ ...dateFirstUseAnywhere, [field]: value });
    };

    const updateCommerce = (field: keyof DateFields, value: string) => {
        setDateFirstUseCommerce({ ...dateFirstUseCommerce, [field]: value });
    };

    const DateInputGroup = ({
        label,
        values,
        onChange
    }: {
        label: string;
        values: DateFields;
        onChange: (field: keyof DateFields, value: string) => void;
    }) => (
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
                <label className="block text-sm font-bold text-slate-700">
                    {label}
                </label>
                <HelpCircle className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] text-slate-500 font-bold uppercase hover:underline cursor-pointer">Get Help</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Year */}
                <div className="relative">
                    <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Year</label>
                    <div className="relative">
                        <select
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm appearance-none outline-none focus:border-[#ea580c]"
                            value={values.year}
                            onChange={(e) => onChange('year', e.target.value)}
                        >
                            <option value="">Select</option>
                            {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {/* Month */}
                <div className="relative">
                    <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Month</label>
                    <div className="relative">
                        <select
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm appearance-none outline-none focus:border-[#ea580c]"
                            value={values.month}
                            onChange={(e) => onChange('month', e.target.value)}
                        >
                            <option value="">-Select Month-</option>
                            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {/* Day */}
                <div className="relative">
                    <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Day</label>
                    <div className="relative">
                        <select
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-3 px-3 text-sm appearance-none outline-none focus:border-[#ea580c]"
                            value={values.day}
                            onChange={(e) => onChange('day', e.target.value)}
                        >
                            <option value="">-Select Day-</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Statement of Use Filing - <span className="text-[#3b6d8c]">Step 4</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <DateInputGroup
                        label="What is the date you first used your mark in commerce?"
                        values={dateFirstUseCommerce}
                        onChange={updateCommerce}
                    />

                    <DateInputGroup
                        label="What is the date of the first use in anywhere?"
                        values={dateFirstUseAnywhere}
                        onChange={updateAnywhere}
                    />

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
