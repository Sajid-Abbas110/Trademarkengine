"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionnaireLayout from "@/app/components/comprehensive/QuestionnaireLayout";
import Step1MarkInfo from "@/app/components/comprehensive/Step1MarkInfo";
import Step2ContactInfo from "@/app/components/comprehensive/Step2ContactInfo";
import Step3SearchType from "@/app/components/comprehensive/Step3SearchType";
import Step4Expedite from "@/app/components/comprehensive/Step4Expedite";
import Step5Payment from "@/app/components/comprehensive/Step5Payment";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ComprehensiveSearchQuestionnairePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);

    // Form State
    const [markDetails, setMarkDetails] = useState<{
        type: 'name' | 'slogan' | 'logo';
        name: string;
    }>({
        type: 'name', // name, slogan, logo
        name: ''
    });

    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [searchType, setSearchType] = useState<'federal_state' | 'federal_state_common' | 'global'>('federal_state_common');

    const [speed, setSpeed] = useState<'standard' | 'express' | 'same_day'>('express');

    // Navigation
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    // Consolidated Data for Final Step
    const formData = {
        markDetails,
        contactInfo,
        searchType,
        speed
    };

    const handleSubmit = async (finalContactInfo: any) => {
        const submissionData = {
            ...formData,
            finalContactInfo // Override or supplement initial contact info
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'SEARCH',
                    data: submissionData
                })
            });

            if (response.ok) {
                router.push('/user');
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    // Steps 1-4 use the Questionnaire Layout
    if (currentStep <= 4) {
        return (
            <QuestionnaireLayout currentStep={currentStep} totalSteps={6}>
                {currentStep === 1 && (
                    <Step1MarkInfo
                        markDetails={markDetails}
                        onUpdate={setMarkDetails}
                        onNext={nextStep}
                    />
                )}
                {currentStep === 2 && (
                    <Step2ContactInfo
                        contactInfo={contactInfo}
                        onUpdate={setContactInfo}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {currentStep === 3 && (
                    <Step3SearchType
                        searchType={searchType}
                        setSearchType={setSearchType}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {currentStep === 4 && (
                    <Step4Expedite
                        speed={speed}
                        setSpeed={setSpeed}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
            </QuestionnaireLayout>
        );
    }

    // Step 5 (Final) uses the Standard Layout (Full Page)
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#dae4ea]">
            <Navbar />

            {/* Simple geometric header for consistency if desired, or just standard padding */}
            <div className="bg-[#3b6d8c] py-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold text-white">Comprehensive Search Report</h1>
                </div>
            </div>

            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 max-w-6xl mx-auto">
                        <Step5Payment
                            formData={formData}
                            onBack={prevStep}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
