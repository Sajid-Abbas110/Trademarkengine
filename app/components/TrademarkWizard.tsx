"use client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import Link from "next/link";
import {
    ChevronRight,
    ChevronLeft,
    Check,
    Shield,
    Clock,
    Star,
    Type,
    MessageSquare,
    Image as ImageIcon,
    HelpCircle,
    CreditCard,
    FileText,
    CreditCard as GooglePay,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

type MarkType = "Name" | "Slogan" | "Logo";

interface FormData {
    markType: MarkType;
    markName: string;
    markDescription: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    package: "Basic" | "Standard" | "Premium";
    searchLevel: "Free" | "Standard" | "Premium";
    speed: "Standard" | "Express" | "Priority";
}

const steps = [
    "Selection",
    "Details",
    "Contact",
    "Package",
    "Search",
    "Speed",
    "Summary",
    "Payment"
];

export default function TrademarkWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        markType: "Name",
        markName: "",
        markDescription: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        package: "Basic",
        searchLevel: "Free",
        speed: "Standard",
    });
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [serialNumber, setSerialNumber] = useState<string | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const router = useRouter();

    React.useEffect(() => {
        async function checkSession() {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.user) {
                    setCurrentUser(data.user);
                    // Pre-fill if logged in
                    const nameParts = data.user.name ? data.user.name.split(' ') : ["", ""];
                    setFormData(prev => ({
                        ...prev,
                        firstName: prev.firstName || nameParts[0] || "",
                        lastName: prev.lastName || nameParts.slice(1).join(' ') || "",
                        email: prev.email || data.user.email || ""
                    }));
                }
            } catch (e) {
                console.error("Session check failed", e);
            }
        }
        checkSession();
    }, []);


    const isStepValid = () => {
        const newErrors: string[] = [];
        if (currentStep === 2) {
            if (!formData.markName?.trim()) newErrors.push("markName");
            if (formData.markType === "Logo" && !formData.markDescription?.trim()) newErrors.push("markDescription");
        } else if (currentStep === 3) {
            if (!formData.firstName?.trim()) newErrors.push("firstName");
            if (!formData.lastName?.trim()) newErrors.push("lastName");
            if (!formData.email?.trim() || !formData.email.includes("@")) newErrors.push("email");
            if (!formData.phone?.trim()) newErrors.push("phone");
        }
        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleCheckout = async () => {
        if (!isStepValid()) return;
        try {
            setIsSubmitting(true);
            await handleSubmit();
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (!isStepValid()) return;
        if (currentStep < steps.length) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const [isNewUser, setIsNewUser] = useState<boolean>(false);
    const [credentials, setCredentials] = useState<{ email: string; password: string } | null>(null);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/service-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "TRADEMARK",
                    data: {
                        markName: formData.markName,
                        markType: formData.markType,
                        markDescription: formData.markDescription,
                        contactInfo: {
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: formData.phone
                        },
                        selections: {
                            package: formData.package,
                            searchLevel: formData.searchLevel,
                            speed: formData.speed
                        },
                        total: total
                    }
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitting(false);
                setIsNewUser(result.isNewUser);
                if (result.credentials) {
                    setCredentials(result.credentials);
                }
                if (result.serialNumber) {
                    setSerialNumber(result.serialNumber);
                }
                setIsSuccess(true);
                setCurrentStep(steps.length);
            }
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const updateFormData = (data: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const renderLeftPanel = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Let's get started!
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                        <p className="text-xl text-slate-600 font-medium">
                            What are you trying to protect?
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Great! We can help protect your {formData.markType}!
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Who will be the primary contact?
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Select your package
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Check if your name is available
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            File even faster!
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Let's protect your brand!
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                        <p className="text-xl text-slate-600 font-medium">
                            Please review your order.
                        </p>
                    </div>
                );
            case 8:
                return (
                    <div className="space-y-6">
                        <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight">
                            Generate Your Invoice
                        </h1>
                        <div className="h-1.5 w-32 bg-[#ea580c]"></div>
                        <p className="text-xl text-slate-600 font-medium whitespace-nowrap text-center">
                            We'll generate an official invoice<br /> for your records.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    const getPackagePrice = () => {
        if (formData.package === "Standard") return 299;
        if (formData.package === "Premium") return 539;
        return 49;
    };

    const getSearchPrice = () => {
        if (formData.searchLevel === "Standard") return 149;
        if (formData.searchLevel === "Premium") return 229;
        return 0;
    };

    const getSpeedPrice = () => {
        if (formData.speed === "Express") return 50;
        if (formData.speed === "Priority") return 100;
        return 0;
    };

    const total = getPackagePrice() + getSearchPrice() + getSpeedPrice();

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-800">What are you trying to protect?</h3>
                        <div className="space-y-4">
                            {[
                                { type: "Name", desc: "Protects the words used to identify your brand.", icon: Type, example: "adidas" },
                                { type: "Slogan", desc: "Protects a phrase or tagline tied to your brand.", icon: MessageSquare, example: "IMPOSSIBLE IS NOTHING" },
                                { type: "Logo", desc: "Protects your visual design or symbol.", icon: (props: any) => <Logo iconClassName={props.className} showText={false} />, example: "Logo" },
                            ].map((item) => (
                                <button
                                    key={item.type}
                                    onClick={() => updateFormData({ markType: item.type as MarkType })}
                                    className={cn(
                                        "w-full p-6 flex items-center justify-between border-2 rounded-2xl transition-all text-left group",
                                        formData.markType === item.type
                                            ? "border-[#ea580c] bg-orange-50/30"
                                            : "border-slate-100 hover:border-slate-200"
                                    )}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                            formData.markType === item.type ? "border-[#ea580c] bg-[#ea580c]" : "border-slate-300"
                                        )}>
                                            {formData.markType === item.type && <div className="w-2 h-2 rounded-full bg-white"></div>}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                                {item.type}
                                            </h4>
                                            <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-600">{item.example}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <label className="text-base font-bold text-slate-800">
                                Enter the {formData.markType} you want to protect.
                            </label>
                            <input
                                type="text"
                                value={formData.markName}
                                onChange={(e) => {
                                    updateFormData({ markName: e.target.value });
                                    if (errors.includes("markName")) setErrors(errors.filter(e => e !== "markName"));
                                }}
                                placeholder="e.g., Adidas"
                                className={cn(
                                    "w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-lg font-medium transition-all",
                                    errors.includes("markName") ? "border-red-500 bg-red-50" : "border-slate-200"
                                )}
                            />
                            {errors.includes("markName") && <p className="text-xs text-red-500 font-bold">Trademark name is required.</p>}
                        </div>
                        {formData.markType === "Logo" && (
                            <div className="space-y-4">
                                <label className="text-base font-bold text-slate-800">
                                    Describe the logo you want to protect.
                                </label>
                                <textarea
                                    value={formData.markDescription}
                                    onChange={(e) => {
                                        updateFormData({ markDescription: e.target.value });
                                        if (errors.includes("markDescription")) setErrors(errors.filter(e => e !== "markDescription"));
                                    }}
                                    placeholder="e.g., A triangle formed by three black lines"
                                    className={cn(
                                        "w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] min-h-[120px] text-lg transition-all",
                                        errors.includes("markDescription") ? "border-red-500 bg-red-50" : "border-slate-200"
                                    )}
                                />
                                {errors.includes("markDescription") && <p className="text-xs text-red-500 font-bold">Visual description is required for Logo trademarks.</p>}
                                <div className="flex items-center gap-2 text-xs text-[#ea580c] font-bold cursor-pointer">
                                    <HelpCircle className="w-4 h-4" />
                                    How should I describe my logo?
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">First Name</label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => {
                                        updateFormData({ firstName: e.target.value });
                                        if (errors.includes("firstName")) setErrors(errors.filter(e => e !== "firstName"));
                                    }}
                                    placeholder="e.g., Bob"
                                    className={cn(
                                        "w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none transition-all",
                                        errors.includes("firstName") ? "border-red-500 bg-red-50" : "border-slate-200"
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Last Name</label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => {
                                        updateFormData({ lastName: e.target.value });
                                        if (errors.includes("lastName")) setErrors(errors.filter(e => e !== "lastName"));
                                    }}
                                    placeholder="e.g., Smith"
                                    className={cn(
                                        "w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none transition-all",
                                        errors.includes("lastName") ? "border-red-500 bg-red-50" : "border-slate-200"
                                    )}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => {
                                    updateFormData({ email: e.target.value });
                                    if (errors.includes("email")) setErrors(errors.filter(e => e !== "email"));
                                }}
                                placeholder="e.g., bobsmith@example.com"
                                className={cn(
                                    "w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none transition-all",
                                    errors.includes("email") ? "border-red-500 bg-red-50" : "border-slate-200"
                                )}
                            />
                            {errors.includes("email") && <p className="text-[10px] text-red-500 font-bold">Please enter a valid email address.</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Phone Number</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => {
                                    updateFormData({ phone: e.target.value });
                                    if (errors.includes("phone")) setErrors(errors.filter(e => e !== "phone"));
                                }}
                                placeholder="(888) 888-8888"
                                className={cn(
                                    "w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none transition-all",
                                    errors.includes("phone") ? "border-red-500 bg-red-50" : "border-slate-200"
                                )}
                            />
                        </div>
                        {errors.length > 0 && currentStep === 3 && (
                            <p className="text-xs text-red-500 font-bold animate-pulse text-center">Please fill in all required contact information.</p>
                        )}
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                            <input type="checkbox" id="sms" className="mt-1 accent-[#ea580c]" />
                            <label htmlFor="sms" className="text-xs text-slate-500 leading-relaxed font-medium">
                                I consent to receiving SMS text messages and phone calls... and understand that consent is not required as a condition of purchase.
                            </label>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[
                                {
                                    id: "Basic",
                                    price: "$49",
                                    benefits: [
                                        "Check if your trademark is already in use.",
                                        "Attorney-reviewed application with recommendations.",
                                        "We'll place your trademark in the correct USPTO category."
                                    ]
                                },
                                {
                                    id: "Standard",
                                    price: "$299",
                                    benefits: [
                                        "Everything in Basic, plus more attorney support.",
                                        "Get a custom cease & desist letter to stop infringement.",
                                        "15-minute consultation with a trademark attorney.",
                                        "Support for transferring or selling your trademark."
                                    ]
                                },
                                {
                                    id: "Premium",
                                    price: "$539",
                                    benefits: [
                                        "Everything in Standard, plus more value.",
                                        "Fastest processing — priority review ensures your application gets filed fast.",
                                        "Keep your personal info (phone & email) private in the USPTO database.",
                                        "1-hour consultation with a trademark attorney."
                                    ]
                                },
                            ].map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={cn(
                                        "p-6 h-full bg-white border-2 rounded-2xl transition-all cursor-pointer flex flex-col",
                                        formData.package === pkg.id
                                            ? (pkg.id === "Standard" ? "border-blue-500 shadow-lg shadow-blue-100" : "border-[#ea580c] shadow-lg shadow-orange-100")
                                            : "border-slate-200 hover:border-slate-300"
                                    )}
                                    onClick={() => updateFormData({ package: pkg.id as any })}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className={cn("text-2xl font-bold", pkg.id === "Standard" ? "text-blue-600" : pkg.id === "Premium" ? "text-[#ea580c]" : "text-slate-800")}>
                                            {pkg.id}
                                        </h4>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-slate-800">{pkg.price}</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none">+applicable fees*</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed min-h-[40px]">
                                        {pkg.id === "Basic" && "Provides essential services to help you register your trademark."}
                                        {pkg.id === "Standard" && "Offers more comprehensive trademark registration services."}
                                        {pkg.id === "Premium" && "Offers the most extensive protection for your brand."}
                                    </p>

                                    <button className={cn(
                                        "w-full py-2.5 rounded-lg font-bold text-sm transition-all mb-6 flex items-center justify-center gap-2",
                                        formData.package === pkg.id ? "bg-[#ea580c] text-white" : "bg-slate-100 text-slate-600"
                                    )}>
                                        Continue with {pkg.id}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>

                                    <div className="space-y-4 flex-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Benefits:</div>
                                        {pkg.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Check className={cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", pkg.id === "Standard" ? "text-blue-500" : "text-[#ea580c]")} />
                                                <span className="text-[11px] text-slate-600 font-medium leading-tight">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            Show detailed comparison
                            <ChevronRight className="w-4 h-4 rotate-90" />
                        </button>
                    </div>
                );
            case 5:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                id: "Basic",
                                label: "",
                                price: "Free",
                                benefits: [
                                    "Searches federal trademarks, business names, and domains.",
                                    "Finds exact and similar matches to flag possible conflicts."
                                ]
                            },
                            {
                                id: "Standard",
                                label: "Popular",
                                price: "$149",
                                benefits: [
                                    "Everything in Basic.",
                                    "Adds state-level searches in all 50 states for extra protection."
                                ]
                            },
                            {
                                id: "Premium",
                                label: "Most comprehensive",
                                price: "$229",
                                benefits: [
                                    "Everything in Standard.",
                                    "Adds international searches (European Union + WIPO) to check availability worldwide."
                                ]
                            },
                        ].map((lvl) => (
                            <div
                                key={lvl.id}
                                className={cn(
                                    "p-6 border-2 rounded-2xl transition-all cursor-pointer flex flex-col",
                                    formData.searchLevel === lvl.id ? "border-[#ea580c] bg-white shadow-lg shadow-orange-100" : "border-slate-200"
                                )}
                                onClick={() => updateFormData({ searchLevel: lvl.id as any })}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-2xl text-slate-800">{lvl.id}</span>
                                    <span className="font-bold text-2xl text-slate-800">{lvl.price}</span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 min-h-[14px] mb-6">{lvl.label}</div>

                                <button className={cn(
                                    "w-full py-2.5 rounded-lg font-bold text-sm transition-all mb-6 flex items-center justify-center gap-2",
                                    formData.searchLevel === lvl.id ? "bg-[#ea580c] text-white" : "bg-slate-100 text-slate-600"
                                )}>
                                    Continue with {lvl.id}
                                    <ChevronRight className="w-4 h-4" />
                                </button>

                                <div className="space-y-4 flex-1">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Benefits:</div>
                                    {lvl.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <Check className="w-3.5 h-3.5 mt-0.5 text-[#ea580c] flex-shrink-0" />
                                            <span className="text-[11px] text-slate-600 font-medium leading-tight">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 6:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { id: "Standard", time: "3 weeks", price: "$0" },
                            { id: "Express", time: "5 days", price: "$50" },
                            { id: "Priority", time: "48 hours", price: "$100" },
                        ].map((spd) => (
                            <div
                                key={spd.id}
                                className={cn(
                                    "p-8 border-2 rounded-2xl flex justify-between items-center cursor-pointer transition-all",
                                    formData.speed === spd.id ? "border-[#ea580c] bg-orange-50/30" : "border-slate-100"
                                )}
                                onClick={() => updateFormData({ speed: spd.id as any })}
                            >
                                <div>
                                    <h4 className="font-bold text-slate-800">{spd.id} Processing</h4>
                                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1 font-medium">
                                        <Clock className="w-4 h-4" />
                                        Typical processing time: {spd.time}
                                    </p>
                                </div>
                                <div className="text-xl font-bold text-slate-800">{spd.id === "Standard" ? "$0" : spd.id === "Express" ? "$50" : "$100"}</div>
                            </div>
                        ))}
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-8 bg-white p-2">
                        <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                            <h3 className="text-3xl font-bold text-slate-800">My total</h3>
                            <div className="text-right">
                                <span className="text-[10px] font-bold text-slate-400 block">+applicable fees*</span>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex justify-between font-medium text-slate-600">
                                <span>{formData.package} Package</span>
                                <span>${getPackagePrice()}</span>
                            </div>
                            <div className="flex justify-between font-medium text-slate-600">
                                <span>{formData.searchLevel} Search</span>
                                <span>${getSearchPrice()}</span>
                            </div>
                            <div className="flex justify-between font-medium text-slate-600">
                                <span>{formData.speed} Processing</span>
                                <span>${getSpeedPrice()}</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-xl font-bold text-slate-800">Total</span>
                                <span className="text-3xl font-bold text-[#ea580c]">${total}</span>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl space-y-4">
                            <h4 className="font-bold text-slate-800">Satisfaction Guarantee</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                We want every customer to be satisfied... Our customer service team is made up of dedicated trademark representatives with one goal - to meet each client's needs.
                            </p>
                        </div>
                    </div>
                );
            case 8:
                if (isSuccess) {
                    return (
                        <div className="space-y-8 text-center py-12">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800">Invoice Generated!</h3>
                            <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 inline-flex flex-col items-center mx-auto">
                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest leading-none mb-1">Billed To:</span>
                                <span className="text-sm font-black text-slate-800 leading-none">{formData.email}</span>
                                <div className="mt-2 pt-2 border-t border-orange-100 w-full flex items-center justify-center gap-2">
                                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest leading-none">Serial Number:</span>
                                    <span className="text-sm font-black text-slate-800 leading-none">{serialNumber || "PENDING"}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 mt-4">
                                {isNewUser
                                    ? "Your application has been received! Use the credentials below to log into your tracking dashboard."
                                    : "Your application has been received! We've added this request to your account. You can track its progress and view the invoice directly from your dashboard."
                                }
                            </p>

                            {credentials && (
                                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-[#ea580c]/10 text-left max-w-md mx-auto animate-in zoom-in duration-500">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Lock className="w-5 h-5 text-[#ea580c]" />
                                        <h4 className="font-bold text-slate-800">Tracking Credentials</h4>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-4">You can use these credentials to track your filing status in our portal:</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm transition-all hover:border-[#ea580c]/30">
                                            <span className="text-xs font-bold text-slate-400 uppercase">Email</span>
                                            <span className="text-sm font-bold text-slate-800">{credentials.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm transition-all hover:border-[#ea580c]/30">
                                            <span className="text-xs font-bold text-slate-400 uppercase">Temp Password</span>
                                            <span className="text-sm font-bold text-blue-600 select-all font-mono">{credentials.password}</span>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-[10px] text-slate-400 italic text-center">Please save these credentials to track your application.</p>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                                <button
                                    onClick={() => alert("Downloading Invoice... This is a simulated download.")}
                                    className="w-full sm:w-auto px-8 py-3 bg-[#1e293b] text-white rounded-md font-bold hover:bg-[#0f172a] transition-all flex items-center justify-center gap-2"
                                >
                                    <FileText className="w-5 h-5 text-[#ea580c]" />
                                    Download Invoice
                                </button>

                                <Link
                                    href="/user"
                                    className="w-full sm:w-auto px-8 py-3 bg-[#ea580c] text-white rounded-md font-bold hover:bg-[#c2410c] transition-all"
                                >
                                    Go to Dashboard
                                </Link>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-4">
                        <div className="w-16 h-16 bg-orange-100 text-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800">Invoice Generation</h4>
                        <p className="text-sm text-slate-600 max-w-xs mx-auto">
                            Instead of immediate payment, we will generate an official invoice and send it to your email and our admin for processing.
                        </p>
                        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                            <span className="text-xl font-bold text-slate-800">Total Amount</span>
                            <span className="text-3xl font-bold text-[#ea580c]">${total}</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col pt-16">
            {/* Header bar */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-[60]">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </Link>
                <div className="hidden md:flex flex-col text-right" >
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest" > Questions?</span>
                    <a href="tel:03142281115" className="text-sm font-bold text-slate-600 hover:text-[#ea580c] transition-colors" > 03142281115 </a>
                </div>
                <a
                    href="https://wa.me/923142281115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-slate-100 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all"
                >
                    <MessageSquare className="w-4 h-4 text-[#ea580c]" />
                    Chat with Us
                </a>
            </div>

            <div className="flex flex-1 flex-col lg:flex-row max-w-[1600px] mx-auto w-full" >
                {/* Left Panel */}
                <div className="w-full lg:w-[40%] bg-[#F7F3EE] lg:p-24 flex flex-col justify-center animate-in slide-in-from-left duration-700" >
                    {renderLeftPanel()}
                </div>

                {/* Right Panel */}
                <div className="w-full lg:w-[60%]  lg:p-24 flex flex-col justify-center bg-white relative animate-in fade-in duration-500 delay-300" >
                    <div className={cn("w-full mx-auto space-y-12", (currentStep >= 4 && currentStep <= 6) ? "max-w-6xl" : "max-w-xl")}>
                        <div className="min-h-[400px]">
                            {renderStep()}
                        </div>

                        {/* Navigation Buttons */}
                        {!isSuccess && (
                            <div className="flex items-center gap-4 pt-12 border-t border-slate-100">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 1 || isSubmitting}
                                    className="px-8 py-3 rounded-md border-2 border-slate-100 text-slate-500 font-bold hover:bg-slate-50 disabled:opacity-0 transition-all flex items-center gap-2"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Back
                                </button>

                                {!(currentStep === steps.length && isSubmitting) && (
                                    <button
                                        onClick={() => {
                                            if (currentStep === steps.length) {
                                                handleCheckout(); // FINAL STEP → Checkout
                                            } else {
                                                nextStep(); // Normal step
                                            }
                                        }}
                                        disabled={isSubmitting}
                                        className="flex-1 py-4 bg-[#ea580c] text-white rounded-md font-bold hover:bg-[#c2410c] transition-all shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2 group disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Processing..." : currentStep === steps.length ? "Generate Invoice & Submit" : "Continue"}
                                        {!isSubmitting && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                )}

                                {isSubmitting && currentStep === steps.length && (
                                    <div className="flex-1 flex items-center justify-center py-4 text-[#ea580c] font-bold gap-2 bg-orange-50 rounded-xl border border-orange-100 animate-pulse">
                                        <Clock className="w-5 h-5 animate-spin" />
                                        Submitting Application...
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step Progress indicators */}
                        <div className="flex justify-between pt-12">
                            {steps.map((step, idx) => (
                                <div
                                    key={step}
                                    className={cn(
                                        "h-1 px-1 rounded-full flex-1 mx-0.5 transition-all duration-500",
                                        idx + 1 <= currentStep ? "bg-[#ea580c]" : "bg-slate-100"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action / Help */}
            <div className="fixed bottom-8 left-8">
                <button className="w-12 h-12 bg-[#ea580c] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <HelpCircle className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
