"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    showText?: boolean;
}

export default function Logo({ className, iconClassName, textClassName, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {/* Custom SVG Logo Motif: TE integrated with Gear/Engine */}
            <svg
                viewBox="0 0 100 100"
                className={cn("w-10 h-10 drop-shadow-sm", iconClassName)}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Gear Outer Ring */}
                <path
                    d="M50 10V20M50 80V90M10 50H20M80 50H90M21.7 21.7L28.8 28.8M71.2 71.2L78.3 78.3M21.7 78.3L28.8 71.2M71.2 28.8L78.3 21.7"
                    stroke="#ea580c"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="30" stroke="#0f172a" strokeWidth="8" />

                {/* Stylized TE */}
                <path
                    d="M35 40H65M50 40V65M65 52H50"
                    stroke="#ea580c"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M40 65H60"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

            {showText && (
                <span className={cn("text-xl font-bold tracking-tight text-slate-800", textClassName)}>
                    trademark <span className="text-[#ea580c]">engine</span>
                </span>
            )}
        </div>
    );
}
