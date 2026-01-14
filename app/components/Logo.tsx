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
            {/* Custom SVG Logo Motif: Shield with B */}
            <svg
                viewBox="0 0 100 100"
                className={cn("w-10 h-10 drop-shadow-sm", iconClassName)}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Shield Outline */}
                <path
                    d="M50 88C50 88 18 75 18 30V15H82V30C82 75 50 88 50 88Z"
                    stroke="#ea580c"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Inner Elements / B monogram hint */}
                <path
                    d="M38 35H60C64 35 64 45 60 45H38V35Z"
                    stroke="#0f172a"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M38 45H62C66 45 66 58 62 58H38V45Z"
                    stroke="#0f172a"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {showText && (
                <span className={cn("text-xl font-bold tracking-tight text-slate-800", textClassName)}>
                    Brand <span className="text-[#ea580c]">Guard</span>
                </span>
            )}
        </div>
    );
}
