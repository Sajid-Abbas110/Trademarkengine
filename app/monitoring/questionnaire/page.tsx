"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import QuestionnaireLayout from "@/app/components/monitoring/QuestionnaireLayout";
import Step1MarkInfo from "@/app/components/monitoring/Step1MarkInfo";
import Step2ContactInfo from "@/app/components/monitoring/Step2ContactInfo";
import Step3Terms from "@/app/components/monitoring/Step3Terms";
import Step4Payment from "@/app/components/monitoring/Step4Payment";

export default function QuestionnairePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        markName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        termsAccepted: false,
    });

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    // Steps 1-3 use the special Questionnaire Layout
    if (currentStep <= 3) {
        return (
            <QuestionnaireLayout currentStep={currentStep} totalSteps={5}>
                {currentStep === 1 && (
                    <Step1MarkInfo
                        markName={formData.markName}
                        setMarkName={(val) => updateFormData("markName", val)}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <Step2ContactInfo
                        contactInfo={{
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: formData.phone,
                        }}
                        setContactInfo={(info) => {
                            setFormData(prev => ({ ...prev, ...info }));
                        }}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {currentStep === 3 && (
                    <Step3Terms
                        accepted={formData.termsAccepted}
                        setAccepted={(val) => updateFormData("termsAccepted", val)}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
            </QuestionnaireLayout>
        );
    }

    const handleSubmit = async (contactInfo: any) => {
        const submissionData = {
            ...formData,
            ...contactInfo
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'MONITORING',
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

    // Step 4 (Final) uses the Standard Layout
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#dae4ea]">
            {/* Using a background color that matches the provided image for the final step which looks like a light blue/grey */}
            <Navbar />
            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4">
                    <Step4Payment
                        onBack={prevStep}
                        onSubmit={handleSubmit}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
