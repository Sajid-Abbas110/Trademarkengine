"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OfficeActionLayout from "@/app/components/office-action/OfficeActionLayout";
import Step1SearchMark from "@/app/components/office-action/Step1SearchMark";
import Step2Expedite from "@/app/components/office-action/Step2Expedite";
import Step3Payment from "@/app/components/office-action/Step3Payment";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function OfficeActionQuestionnairePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        mark: null,
        speed: 'express' as 'standard' | 'express' | 'priority'
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
                    type: 'OFFICE_ACTION',
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

    // Steps 1-2 use the Office Action Layout
    if (currentStep <= 2) {
        return (
            <OfficeActionLayout currentStep={currentStep} totalSteps={3}>
                {currentStep === 1 && (
                    <Step1SearchMark
                        onMarkSelect={(mark) => setFormData(prev => ({ ...prev, mark }))}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <Step2Expedite
                        onSpeedSelect={(speed) => setFormData(prev => ({ ...prev, speed }))}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
            </OfficeActionLayout>
        );
    }

    // Step 3 (Final) uses standard layout wrapper
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#dae4ea]">
            <Navbar />
            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4">
                    <Step3Payment
                        onBack={prevStep}
                        speed={formData.speed}
                        onSubmit={handleSubmit}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
