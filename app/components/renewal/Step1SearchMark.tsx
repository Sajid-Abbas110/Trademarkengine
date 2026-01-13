import { useState } from "react";
import { Lock, Search } from "lucide-react";

interface Step1SearchMarkProps {
    onMarkSelect: (mark: any) => void;
    onNext: () => void;
}

// Mock Data for "Renewal" search results
const MOCK_RESULTS = [
    { id: 1, name: "HRC", owner: "TRADEMARK & COPYRIGHT MARKETING SERVICES", filed: "April 09, 1985", serial: "73531012" },
    { id: 2, name: "VALMATRIX", owner: "DOMAIN ASSETS, LLC", filed: "September 29, 1994", serial: "74579939" },
    { id: 3, name: "VALMATRIX UNIQUE VALUATION SYSTEM", owner: "DOMAIN ASSETS, LLC", filed: "September 29, 1994", serial: "74580303" },
    { id: 4, name: "VALCALC", owner: "TRADEMARK & LICENSING ASSOCIATES, INC.", filed: "October 20, 1997", serial: "75381033" },
    { id: 5, name: "BVEQ", owner: "TRADEMARK & LICENSING ASSOCIATES, INC.", filed: "October 28, 1997", serial: "75381035" },
    { id: 6, name: "DOMAIN ASSETS", owner: "TRADEMARK & LICENSING ASSOCIATES, INC.", filed: "December 01, 1997", serial: "75399732" },
    { id: 7, name: "CONSOR", owner: "DOMAIN ASSETS, LLC", filed: "May 21, 1999", serial: "75693607" },
    { id: 8, name: "IPCONSOR.COM", owner: "DOMAIN ASSETS, LLC", filed: "September 18, 2001", serial: "76313165" },
    { id: 9, name: "TRADEMARK 360*", owner: "TRADEMARK 360 CORP.", filed: "February 20, 2025", serial: "99049287" },
    { id: 10, name: "ZARING", owner: "DREES PREMIER HOMES, INC.", filed: "December 23, 1992", serial: "74342671" },
];

export default function Step1SearchMark({ onMarkSelect, onNext }: Step1SearchMarkProps) {
    const [searchTerm, setSearchTerm] = useState("trademark");
    const [selectedMarkId, setSelectedMarkId] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedMarkId) {
            const mark = MOCK_RESULTS.find(m => m.id === selectedMarkId);
            onMarkSelect(mark);
            onNext();
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Trademark Renewal Registration Process - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            {/* Search Bar */}
            <div className="mb-8">
                <label className="block text-[#ea580c] font-bold mb-2">Search for your mark</label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow bg-[#e2e8f0] px-4 py-3 rounded border border-slate-300 focus:border-[#ea580c] outline-none text-slate-700"
                    />
                    <button className="bg-[#ea580c] px-4 py-2 rounded text-white hover:bg-[#c2410c] transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-800 mb-4 text-sm">Trademark Search Results</h3>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
                        {MOCK_RESULTS.map((mark) => (
                            <label
                                key={mark.id}
                                className={`border rounded-lg p-4 cursor-pointer flex items-start gap-4 transition-all hover:shadow-md ${selectedMarkId === mark.id ? 'border-[#ea580c] bg-orange-50 ring-1 ring-[#ea580c]' : 'border-slate-300 bg-white'}`}
                            >
                                <div className="mt-1">
                                    <input
                                        type="radio"
                                        name="markSelection"
                                        className="w-4 h-4 text-[#ea580c] focus:ring-[#ea580c]"
                                        checked={selectedMarkId === mark.id}
                                        onChange={() => setSelectedMarkId(mark.id)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-bold text-slate-500 mb-1">This is my trademark</div>
                                    <h4 className="font-bold text-slate-800 text-lg uppercase">{mark.name}</h4>
                                    <div className="text-xs text-slate-600">
                                        <span className="font-bold">Owned by:</span><br />
                                        {mark.owner}
                                    </div>
                                    <div className="text-xs text-slate-600">
                                        Filed: {mark.filed}
                                    </div>
                                    <div className="text-xs text-slate-600">
                                        Serial Number: <span className="font-bold">{mark.serial}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>

                    {/* Pagination Mock */}
                    <div className="flex justify-center items-center gap-4 mt-6 text-slate-500 font-bold text-sm">
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-slate-300 rounded text-white" disabled>
                            ←
                        </button>
                        <span className="text-slate-800">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-[#2c3746] rounded text-white">
                            →
                        </button>
                    </div>

                    {/* Navigation/Submit */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 pt-4 border-t border-slate-200/50">
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Lock className="w-4 h-4" />
                            <span>Click on "Continue" to save your application.</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={!selectedMarkId}
                                className={`bg-[#ea580c] text-white font-bold py-3 px-8 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-sm tracking-wide ${!selectedMarkId ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Continue
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Trustpilot / Testimonial Side/Bottom Area */}
            <div className="bg-slate-100 rounded p-4 border border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00b67a] font-bold text-lg">★ Trustpilot</span>
                    <div className="flex bg-[#00b67a] px-1 py-0.5 rounded text-white gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                    </div>
                </div>
                <p className="italic">
                    "I am really happy working with Trademark Engine. Trademark Engine helped me through all the steps for applying for my trademark..."
                </p>
                <div className="font-bold mt-1 text-slate-800">- Shameh</div>
            </div>
        </div>
    );
}
