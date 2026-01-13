import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Lock, ShieldCheck } from "lucide-react";
import Footer from "../Footer";

interface QuestionnaireLayoutProps {
    children: React.ReactNode;
    currentStep: number;
    totalSteps: number;
}

export default function QuestionnaireLayout({
    children,
    currentStep,
    totalSteps,
}: QuestionnaireLayoutProps) {
    const progressPercentage = Math.round((currentStep / totalSteps) * 100);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            {/* Top Bar */}
            <div className="bg-[#334155] text-white text-xs py-2 px-4 shadow-sm z-50">
                <div className="container mx-auto flex justify-end items-center gap-6">
                    <Link href="/guarantee" className="hover:text-slate-200 transition-colors">
                        Our Guarantee
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                        <Lock className="w-3 h-3" />
                        My Account
                    </Link>
                    <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <Link href="/contact" className="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex items-center gap-1 opacity-80">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="font-semibold">Norton SECURED</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-slate-100 py-4 shadow-sm z-40 relative">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#ea580c] rounded-full flex items-center justify-center text-white font-bold text-lg">
                            <span className="relative top-px rotate-[-15deg]">R</span>
                        </div>
                        <span className="text-xl font-bold text-slate-700 tracking-tight">
                            trademark <span className="text-slate-900">engine</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
                        <Link href="/services" className="hover:text-[#ea580c]">Our Services</Link>
                        <Link href="/blog" className="hover:text-[#ea580c]">Blog</Link>
                        <Link href="/about" className="hover:text-[#ea580c]">About Us</Link>
                        <Link href="/faqs" className="hover:text-[#ea580c]">FAQs</Link>
                        <Link href="/search" className="bg-[#ea580c] text-white px-5 py-2.5 rounded hover:bg-[#c2410c] transition-colors shadow-md">
                            Free Trademark Search
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Progress Header Section with Geometric Background */}
            <div className="relative bg-[#3b6d8c] py-16 overflow-hidden">
                {/* Geometric Overlay Pattern (CSS Implementation or Image) */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77aa7777 25%, transparent 25.5%, transparent 75%, #77aa7777 75%, #77aa7777), linear-gradient(60deg, #77aa7777 25%, transparent 25.5%, transparent 75%, #77aa7777 75%, #77aa7777)`,
                        backgroundSize: '80px 140px',
                        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
                    }}>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
                        Trademark Monitoring Questionnaire
                    </h1>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                        Complete your application in 7 minutes. Have questions? Call <span className="font-bold">1 (877) 721-4579</span> or <span className="font-bold cursor-pointer hover:underline">LIVE CHAT</span> for real-time support.
                    </p>

                    {/* Progress Bar */}
                    <div className="max-w-2xl mx-auto bg-white/30 rounded-full h-8 backdrop-blur-sm p-1 flex items-center shadow-inner relative overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-l from-orange-500 to-orange-700 rounded-full shadow-lg transition-all duration-500 ease-out relative flex items-center justify-end px-3"
                            style={{ width: `${progressPercentage}%` }}
                        >
                            {/* Striped Pattern on Bar */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }} />
                            <span className="text-white text-xs font-bold drop-shadow-md relative z-10">{progressPercentage}%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Card Area */}
            <main className="flex-grow container mx-auto px-4 -mt-10 relative z-20 pb-20">
                <div className="bg-white rounded shadow-xl border border-slate-200 min-h-[400px] max-w-4xl mx-auto p-8 relative">
                    {children}
                </div>
            </main>

            {/* Accessibility Icon (Bottom Left Floating) */}
            <div className="fixed left-6 bottom-6 z-50">
                <button className="w-10 h-10 bg-[#ea580c] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 14.14 14.14" /><path d="m14.83 9.17-2.83-2.83-2.83 2.83" /></svg>
                </button>
            </div>

            {/* Chat Icon (Bottom Right Floating) */}
            <div className="fixed right-6 bottom-6 z-50">
                <button className="w-14 h-14 bg-[#ea580c] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#c2410c] transition-colors">
                    <MessageSquare className="w-7 h-7" />
                </button>
            </div>

            <Footer />
        </div>
    );
}
