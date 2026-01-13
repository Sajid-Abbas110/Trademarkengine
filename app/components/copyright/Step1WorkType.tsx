import { Lock, BookOpen, Music, Video, Image as ImageIcon, Mic } from "lucide-react";

interface Step1WorkTypeProps {
    workType: string;
    setWorkType: (type: string) => void;
    onNext: () => void;
}

export default function Step1WorkType({ workType, setWorkType, onNext }: Step1WorkTypeProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const types = [
        { id: 'literary', label: 'Literary Work', icon: BookOpen, desc: 'Books, poetry, articles, blogs' },
        { id: 'visual', label: 'Visual Arts', icon: ImageIcon, desc: 'Photos, paintings, logos, designs' },
        { id: 'sound', label: 'Sound Recording', icon: Mic, desc: 'Music tracks, podcasts, audiobooks' },
        { id: 'performing', label: 'Performing Arts', icon: Music, desc: 'Lyrics, scripts, choreography' },
        { id: 'motion', label: 'Motion Picture', icon: Video, desc: 'Movies, videos, TV shows' },
    ];

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                Copyright Registration - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200">

                    <h3 className="text-[#3b6d8c] font-bold text-lg mb-6">Type of Work</h3>
                    <p className="text-slate-700 text-sm mb-6">Select the category that best describes your work.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {types.map((type) => {
                            const Icon = type.icon;
                            const isSelected = workType === type.id;

                            return (
                                <div
                                    key={type.id}
                                    onClick={() => setWorkType(type.id)}
                                    className={`cursor-pointer p-4 rounded-lg border flex flex-col items-center text-center transition-all ${isSelected ? 'bg-white border-[#ea580c] ring-1 ring-[#ea580c] shadow-md' : 'bg-white border-slate-300 hover:border-[#ea580c]'}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isSelected ? 'bg-[#ea580c] text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="font-bold text-slate-800 text-sm">{type.label}</div>
                                    <div className="text-xs text-slate-500 mt-1">{type.desc}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-6 mb-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#ea580c] text-white font-bold py-3 px-10 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-xs tracking-wider"
                            disabled={!workType}
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
