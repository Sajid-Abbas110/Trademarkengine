"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, FileText, Search, ShieldAlert, RefreshCw, Copyright, AlertTriangle, Scale, User, Settings, BookOpen, CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    };

    const services = [
        { name: "Trademark Registration", href: "/registration" },
        { name: "Trademark Monitoring", href: "/monitoring" },
        { name: "Trademark Renewal", href: "/renewal" },
        { name: "Office Action Response", href: "/office-action" },
        { name: "Filing an Extension", href: "/extension" },
        { name: "Comprehensive Trademark Search", href: "/comprehensive-search" },
        { name: "Free Trademark Search", href: "/free-search" },
        { name: "Copyright Registration", href: "/copyright" },
        { name: "Statement of Use", href: "/statement-of-use" },
        { name: "DMCA Takedown Engine", href: "/dmca" },
    ];

    // Split services into two columns
    const midPoint = Math.ceil(services.length / 2);
    const leftColumn = services.slice(0, midPoint);
    const rightColumn = services.slice(midPoint);

    // Determine CTA Button Text and Link based on standard pathname
    const getCtaInfo = () => {
        if (pathname?.includes("/comprehensive-search")) {
            return { text: "Start Comprehensive Search", href: "/comprehensive-search#pricing" };
        }
        if (pathname?.includes("/copyright")) {
            return { text: "Start Copyright Registration", href: "/copyright#pricing" };
        }
        if (pathname?.includes("/statement-of-use")) {
            return { text: "File Statement of Use", href: "/statement-of-use#process" };
        }
        if (pathname?.includes("/dmca")) {
            return { text: "Start DMCA Takedown", href: "/dmca#start" };
        }
        if (pathname?.includes("/extension")) {
            return { text: "File an Extension", href: "/extension#pricing" };
        }
        if (pathname?.includes("/renewal")) {
            return { text: "File Trademark Renewal", href: "/renewal" };
        }
        if (pathname?.includes("/monitoring")) {
            return { text: "Start Trademark Monitoring", href: "/monitoring" };
        }
        if (pathname?.includes("/office-action")) {
            return { text: "Respond to Office Action", href: "/office-action" };
        }

        // Default
        return { text: "Register my trademark", href: "/registration/new" };
    };

    const ctaInfo = getCtaInfo();

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-200",
                scrolled ? "shadow-md py-2" : "py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
                {/* Left Section: Logo & Nav */}
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Logo Icon approximation */}
                        <div className="text-[#ea580c]">
                            <Settings className="w-8 h-8 fill-current" />
                        </div>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">
                            trademark <span className="text-slate-600">engine</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Our Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={cn(
                                    "flex items-center gap-1 font-semibold text-sm transition-colors py-2",
                                    openDropdown === "services" ? "text-[#ea580c]" : "text-slate-600 hover:text-[#ea580c]"
                                )}
                            >
                                Our Services
                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", openDropdown === "services" ? "rotate-180" : "")} />
                            </button>

                            {/* Dropdown Menu */}
                            {openDropdown === "services" && (
                                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-slate-100 p-8 grid grid-cols-2 gap-x-12 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="col-span-2 flex items-center gap-2 text-[#ea580c] font-bold mb-6 border-b border-slate-100 pb-4">
                                        <FileText className="w-5 h-5" />
                                        Our Services
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {leftColumn.map((item) => (
                                            <Link key={item.name} href={item.href} className="text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {rightColumn.map((item) => (
                                            <Link key={item.name} href={item.href} className="text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter("resources")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={cn(
                                    "flex items-center gap-1 font-semibold text-sm transition-colors py-2",
                                    openDropdown === "resources" ? "text-[#ea580c]" : "text-slate-600 hover:text-[#ea580c]"
                                )}
                            >
                                Resources
                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", openDropdown === "resources" ? "rotate-180" : "")} />
                            </button>

                            {/* Dropdown Menu */}
                            {openDropdown === "resources" && (
                                <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-slate-100 p-8 grid grid-cols-2 gap-x-12 animate-in fade-in zoom-in-95 duration-200">
                                    {/* Learn Column */}
                                    <div>
                                        <div className="flex items-center gap-2 text-[#ea580c] font-bold mb-4">
                                            <BookOpen className="w-5 h-5" />
                                            Learn
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Link href="/blog" className="text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                                                Blog
                                            </Link>
                                        </div>
                                    </div>

                                    {/* FAQs Column */}
                                    <div>
                                        <div className="flex items-center gap-2 text-[#ea580c] font-bold mb-4">
                                            <CircleHelp className="w-5 h-5" />
                                            FAQs
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Link href="/trademark-faqs" className="text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                                                Trademark FAQS
                                            </Link>
                                            <Link href="/copyright-faqs" className="text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                                                Copyright FAQS
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="font-semibold text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                            About us
                        </Link>
                    </div>
                </div>

                {/* Right Section: Account & CTA */}
                <div className="flex items-center gap-6">
                    <Link href="/login" className="hidden md:block font-semibold text-slate-600 hover:text-[#ea580c] text-sm transition-colors">
                        My Account
                    </Link>
                    <Link
                        href={ctaInfo.href}
                        className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        {ctaInfo.text}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

