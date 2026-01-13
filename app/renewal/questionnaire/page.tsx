"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RenewalLayout from "@/app/components/renewal/RenewalLayout";
import Step1SearchMark from "@/app/components/renewal/Step1SearchMark";
import Step2OwnerInfo from "@/app/components/renewal/Step2OwnerInfo";
import Step3ReviewClasses from "@/app/components/renewal/Step3ReviewClasses";
import Step4Expedite from "@/app/components/renewal/Step4Expedite";
import Step5Payment from "@/app/components/renewal/Step5Payment";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RenewalQuestionnairePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        mark: null,
        ownerInfo: null,
        classes: [],
        speed: 'express'
    });

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const handleSubmit = async (contactInfo: any) => {
        const submissionData = {
            ...formData,
            contactInfo
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'RENEWAL',
                    data: submissionData
                })
            });

            const result = await response.json();
            return { success: response.ok, ...result };
        } catch (error) {
            console.error("Error submitting form:", error);
            return { success: false, error: "An error occurred." };
        }
    };

    // Steps 1-4 use the Renewal Layout
    if (currentStep <= 4) {
        return (
            <RenewalLayout currentStep={currentStep} totalSteps={5}>
                {currentStep === 1 && (
                    <Step1SearchMark
                        onMarkSelect={(mark) => setFormData(prev => ({ ...prev, mark }))}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <Step2OwnerInfo
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {currentStep === 3 && (
                    <Step3ReviewClasses
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {currentStep === 4 && (
                    <Step4Expedite
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
            </RenewalLayout>
        );
    }

    // Step 5 (Final) uses the Standard Layout
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#dae4ea]">
            <Navbar />
            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4">
                    <Step5Payment
                        onBack={prevStep}
                        onSubmit={handleSubmit}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
