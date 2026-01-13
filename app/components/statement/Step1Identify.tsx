import { useState } from "react";
import { Lock, Search } from "lucide-react";

interface Step1IdentifyProps {
    serialNumber: string;
    setSerialNumber: (sn: string) => void;
    onNext: () => void;
}

// Mock Data matching the screenshot
const MOCK_RESULTS = [
    { id: 1, name: "YES, MA'AM MAN", owner: "ASDF HOLDING COMPANY, LLC", filed: "September 06, 2023", serial: "98377961", type: "text" },
    { id: 2, name: "ASDF LLC", owner: "ASDF LLC", filed: "November 06, 2022", serial: "97664947", type: "text" },
    { id: 3, name: "WHEREAT", owner: "ASDF, LLC", filed: "February 23, 2023", serial: "97808336", type: "text" },
    { id: 4, name: "ASDFDS", owner: "asdfsad", filed: "January 11, 2019", serial: "87751836", type: "text" },
    { id: 5, name: "ASDF", owner: "John Jang", filed: "December 17, 2009", serial: "79078883", type: "logo" }, // Using logo placeholder
    { id: 6, name: "ASDF", owner: "Shenzhen Jiawei International Trading Co.,Ltd.", filed: "April 04, 2019", serial: "88370661", type: "text" },
    { id: 7, name: "ASDF Cutra", owner: "Tengteng Zhang", filed: "May 27, 2026", serial: "99202860", type: "text" },
    { id: 8, name: "ASDFB", owner: "Lin Jinhua", filed: "September 21, 2020", serial: "90196067", type: "text" },
    { id: 9, name: "ASDFER", owner: "Liu zhenbing", filed: null, serial: "88440837", type: "text" },
    { id: 10, name: "ASDFG", owner: "Chen Ya Yan", filed: "September 08, 2020", serial: "90165015", type: "text" },
];

export default function Step1Identify({ serialNumber, setSerialNumber, onNext }: Step1IdentifyProps) {
    // We use serialNumber to track selection, as it's unique
    const [searchTerm, setSearchTerm] = useState("");

    // Auto-select based on passed prop if exists
    const [selectedSerial, setSelectedSerial] = useState(serialNumber);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedSerial) {
            setSerialNumber(selectedSerial);
            onNext();
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                Statement of Use Filing - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            {/* Search Bar */}
            <h3 className="text-[#ea580c] font-bold text-sm mb-2">Search For your mark</h3>
            <div className="flex gap-0 mb-8">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter your mark name, serial number, or owner name"
                    className="flex-grow bg-[#fff] px-4 py-3 rounded-l border border-slate-300 focus:border-[#ea580c] outline-none text-slate-700 text-sm"
                />
                <button className="bg-[#ea580c] px-6 py-2 rounded-r text-white hover:bg-[#c2410c] transition-colors font-bold flex items-center gap-1 text-sm">
                    Search <span className="text-xs">›</span>
                </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wide">Trademark Search Results</h3>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[800px] overflow-y-auto pr-2">
                        {MOCK_RESULTS.map((mark) => (
                            <label
                                key={mark.id}
                                className={`border rounded-lg p-4 cursor-pointer flex items-start gap-4 transition-all relative ${selectedSerial === mark.serial ? 'border-[#ea580c] bg-[#fdf5f0] shadow-sm' : 'border-slate-300 bg-[#eaeaeb] hover:bg-slate-200'}`}
                            >
                                <div className="mt-1">
                                    <input
                                        type="radio"
                                        name="markSelection"
                                        className="w-4 h-4 text-[#ea580c] focus:ring-[#ea580c] accent-[#ea580c]"
                                        checked={selectedSerial === mark.serial}
                                        onChange={() => setSelectedSerial(mark.serial)}
                                    />
                                </div>
                                <div className="space-y-1 flex-1">
                                    <div className="text-xs text-slate-500 mb-1">This is my trademark</div>

                                    {/* Mark Preview - Visual vs Text */}
                                    <div className="mb-2">
                                        {mark.type === 'logo' || mark.name === 'ASDF' && mark.serial === '79078883' ? (
                                            <div className="text-3xl font-serif">{mark.name}</div>
                                        ) : (
                                            <div className="font-serif text-lg text-slate-800">{mark.name}</div>
                                        )}
                                    </div>

                                    <div className="text-[10px] text-slate-600 leading-tight">
                                        <span className="font-bold">Owned by:</span><br />
                                        <span className="font-bold">{mark.owner}</span>
                                    </div>
                                    {mark.filed && (
                                        <div className="text-[10px] text-slate-600 mt-1">
                                            Filed: {mark.filed}
                                        </div>
                                    )}
                                    <div className="text-[10px] text-slate-600">
                                        Serial Number: <span className="font-bold text-slate-900">{mark.serial}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-8 mb-4">
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-slate-300 rounded-full text-white hover:bg-slate-400 transition-colors" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <span className="text-slate-500 text-xs font-bold px-2">1</span>
                        <span className="text-slate-400 text-xs hover:text-slate-600 cursor-pointer px-2">2</span>
                        <span className="text-slate-400 text-xs hover:text-slate-600 cursor-pointer px-2">3</span>
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-[#2c3746] rounded-full text-white hover:bg-slate-700 transition-colors shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>

                    {/* Navigation/Submit */}
                    <div className="flex items-center gap-2 text-slate-600 text-[10px] mb-4 mt-8">
                        <Lock className="w-3 h-3" />
                        <span>Click on "Continue" to save your application.</span>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!selectedSerial}
                            className={`bg-[#ea580c] text-white font-bold py-3 px-10 rounded shadow hover:bg-[#c2410c] transition-colors flex items-center gap-2 uppercase text-xs tracking-wider ${!selectedSerial ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Continue
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Trustpilot Box */}
            <div className="bg-slate-50 rounded p-4 border border-slate-200 text-xs text-slate-600 max-w-[250px] absolute top-[280px] right-[-280px] hidden xl:block shadow-sm">
                <div className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-sm">
                    <span className="text-[#00b67a]">★</span> Trustpilot
                </div>
                <div className="flex bg-[#00b67a] w-fit px-1 py-0.5 rounded text-white gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[10px]">★</span>)}
                </div>
                <div className="font-bold text-[10px] text-slate-800 mb-4">TrustScore 4.8 | 8,420 reviews</div>

                <div className="flex items-start gap-2 mb-2">
                    <div className="min-w-[12px] h-[12px] rounded-full border border-blue-500 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="leading-tight text-[10px]">Join the 120,000 business owners who have trusted us to file their trademarks since 2016.</span>
                </div>
                <div className="flex items-start gap-2 mb-4">
                    <div className="min-w-[12px] h-[12px] rounded-full border border-blue-500 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="leading-tight text-[10px]">95% of customers recommend our services.</span>
                </div>

                <div className="bg-[#f0f0f0] p-3 rounded text-[10px] italic leading-relaxed mb-1 relative">
                    "I am really happy working with Trademark Engine. Trademark Engine helped me through all the steps for applying for my trademark and it was very simple and easy... I strongly recommend."
                </div>
                <div className="font-bold text-[10px] text-slate-800">- Shameh</div>
            </div>

        </div>
    );
}
