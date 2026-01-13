import { Lock } from "lucide-react";

export interface DMCAFormData {
    companyName: string;
    companyAddress: string;
    email: string; // infringing notice email
    websiteUrl: string; // where infringing material found
    personSigning: string;
    titleSigning: string;
    infringingUrls: string; // new line separated
    originalUrls: string;
    ownerCompany: string;
    ownerEmail: string; // owner email
    ownerPhone: string;
}

interface Step1DetailsProps {
    data: DMCAFormData;
    updateData: (fields: Partial<DMCAFormData>) => void;
    onNext: () => void;
}

export default function Step1Details({ data, updateData, onNext }: Step1DetailsProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2 border-b pb-4">
                DMCA Takedown Engine - <span className="text-[#3b6d8c]">Step 1</span>
            </h2>

            <div className="py-6">
                <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded border border-slate-200 space-y-4">

                    {/* Notice Recipient Info */}
                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Name of company where notice is being sent</label>
                        <input
                            type="text"
                            placeholder="Name of company"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.companyName}
                            onChange={(e) => updateData({ companyName: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Address of company where it is being sent</label>
                        <input
                            type="text"
                            placeholder="Address of company"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.companyAddress}
                            onChange={(e) => updateData({ companyAddress: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-slate-700 mb-1 font-bold">Email (optional) of where the notice is being sent</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.email}
                            onChange={(e) => updateData({ email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Name of website where infringing material is located</label>
                        <input
                            type="text"
                            placeholder="Name of website"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.websiteUrl}
                            onChange={(e) => updateData({ websiteUrl: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Name of person signing the takedown notice</label>
                        <input
                            type="text"
                            placeholder="Name of person"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.personSigning}
                            onChange={(e) => updateData({ personSigning: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* Title of person signing the takedown notice</label>
                        <input
                            type="text"
                            placeholder="Title of person"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.titleSigning}
                            onChange={(e) => updateData({ titleSigning: e.target.value })}
                            required
                        />
                    </div>

                    {/* Infringing Material */}
                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* List of urls where the infringing content is located</label>
                        <textarea
                            placeholder="Urls where..."
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c] min-h-[80px]"
                            value={data.infringingUrls}
                            onChange={(e) => updateData({ infringingUrls: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="block text-sm font-bold text-slate-700 w-1/3">Screen shots of the infringing material</label>
                        <div className="flex-1 border-2 border-dashed border-slate-300 rounded p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                            <span className="text-xs text-slate-500">Drop files here or click to upload.</span>
                        </div>
                    </div>

                    {/* Original Material */}
                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* List of urls where your material is located</label>
                        <textarea
                            placeholder="Urls where..."
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c] min-h-[80px]"
                            value={data.originalUrls}
                            onChange={(e) => updateData({ originalUrls: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="block text-sm font-bold text-slate-700 w-1/3">Screen shots of your material you believe is being copied</label>
                        <div className="flex-1 border-2 border-dashed border-slate-300 rounded p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                            <span className="text-xs text-slate-500">Drop files here or click to upload.</span>
                        </div>
                    </div>

                    {/* Owner Info */}
                    <div>
                        <label className="block text-xs text-slate-700 mb-1 font-bold">Name of the company that owns the copyrighted material<br />(skip if individual)</label>
                        <input
                            type="text"
                            placeholder="Name of the company"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.ownerCompany}
                            onChange={(e) => updateData({ ownerCompany: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* An email for the person sending the notice</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.ownerEmail}
                            onChange={(e) => updateData({ ownerEmail: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-[#ea580c] mb-1 font-bold">* A phone number for the person sending the notice</label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="w-full bg-[#e2e8f0] border-b border-slate-300 py-2 px-3 text-sm outline-none focus:border-[#ea580c]"
                            value={data.ownerPhone}
                            onChange={(e) => updateData({ ownerPhone: e.target.value })}
                            required
                        />
                    </div>


                    <div className="flex justify-end pt-6">
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
