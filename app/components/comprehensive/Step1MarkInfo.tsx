import { Lock, HelpCircle } from "lucide-react";

interface Step1MarkInfoProps {
    markDetails: {
        type: 'name' | 'slogan' | 'logo';
        name: string;
    };
    onUpdate: (details: any) => void;
    onNext: () => void;
}

export default function Step1MarkInfo({ markDetails, onUpdate, onNext }: Step1MarkInfoProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Comprehensive Search Report - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                            Select what you are trying to protect
                            <span className="text-[#3b6d8c] text-xs font-normal flex items-center gap-1 cursor-pointer hover:underline">
                                <HelpCircle className="w-3 h-3" /> Get Help
                            </span>
                        </label>

                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${markDetails.type === 'name' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {markDetails.type === 'name' && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input
                                    type="radio"
                                    name="markType"
                                    value="name"
                                    checked={markDetails.type === 'name'}
                                    onChange={() => onUpdate({ ...markDetails, type: 'name' })}
                                    className="hidden"
                                />
                                <span className="text-slate-700 group-hover:text-slate-900">Name</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${markDetails.type === 'slogan' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {markDetails.type === 'slogan' && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input
                                    type="radio"
                                    name="markType"
                                    value="slogan"
                                    checked={markDetails.type === 'slogan'}
                                    onChange={() => onUpdate({ ...markDetails, type: 'slogan' })}
                                    className="hidden"
                                />
                                <span className="text-slate-700 group-hover:text-slate-900">Slogan</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${markDetails.type === 'logo' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-slate-300 bg-white'}`}>
                                    {markDetails.type === 'logo' && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <input
                                    type="radio"
                                    name="markType"
                                    value="logo"
                                    checked={markDetails.type === 'logo'}
                                    onChange={() => onUpdate({ ...markDetails, type: 'logo' })}
                                    className="hidden"
                                />
                                <span className="text-slate-700 group-hover:text-slate-900">Logo</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            <span className="text-red-500 mr-1">*</span>
                            Enter the name you wish to protect
                        </label>
                        <input
                            type="text"
                            value={markDetails.name}
                            onChange={(e) => onUpdate({ ...markDetails, name: e.target.value })}
                            className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-6 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
                    </div>

                    <div className="flex justify-end">
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
