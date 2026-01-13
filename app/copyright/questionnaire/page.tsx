"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionnaireLayout from "../../components/copyright/QuestionnaireLayout";

// Steps
import Step1WorkType from "../../components/copyright/Step1WorkType";
import Step2Title from "../../components/copyright/Step2Title";
import Step3Authors from "../../components/copyright/Step3Authors";
import Step4WorkDetails from "../../components/copyright/Step4WorkDetails";
import Step5PackageSelection from "../../components/copyright/Step5PackageSelection";
import Step6SearchAddon from "../../components/copyright/Step6SearchAddon";
import Step7Expedite from "../../components/copyright/Step7Expedite";
import Step8Payment from "../../components/copyright/Step8Payment";

export default function CopyrightQuestionnairePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 8;

    // Form State
    const [workType, setWorkType] = useState("");

    const [title, setTitle] = useState("");

    const [authorName, setAuthorName] = useState("");

    const [workDetails, setWorkDetails] = useState({
        isWorkForHire: null,
        isAnonymous: null,
        isPseudonym: null,
        hasPreexistingMaterial: null,
        isRegisteredOtherName: null
    });

    const [packageType, setPackageType] = useState<'basic' | 'deluxe'>('basic');

    const [addSearch, setAddSearch] = useState(false);

    const [processingSpeed, setProcessingSpeed] = useState<'standard' | 'express'>('standard');

    // Navigation Helpers
    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = async (contactInfo: any) => {
        const formData = {
            workType,
            title,
            authorName,
            workDetails,
            packageType,
            addSearch,
            processingSpeed,
            contactInfo
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'COPYRIGHT',
                    data: formData
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

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Step1WorkType
                        workType={workType}
                        setWorkType={setWorkType}
                        onNext={nextStep}
                    />
                );
            case 2:
                return (
                    <Step2Title
                        title={title}
                        setTitle={setTitle}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 3:
                return (
                    <Step3Authors
                        authorName={authorName}
                        setAuthorName={setAuthorName}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 4:
                return (
                    <Step4WorkDetails
                        details={workDetails}
                        onUpdate={setWorkDetails}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 5:
                return (
                    <Step5PackageSelection
                        packageType={packageType}
                        setPackageType={(pkg) => {
                            setPackageType(pkg);
                            nextStep();
                        }}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 6:
                return (
                    <Step6SearchAddon
                        addSearch={addSearch}
                        setAddSearch={setAddSearch}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 7:
                return (
                    <Step7Expedite
                        processingSpeed={processingSpeed}
                        setProcessingSpeed={setProcessingSpeed}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 8:
                return (
                    <Step8Payment
                        packageType={packageType}
                        addSearch={addSearch}
                        processingSpeed={processingSpeed}
                        onBack={prevStep}
                        onSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <QuestionnaireLayout currentStep={currentStep} totalSteps={totalSteps}>
            {renderStep()}
        </QuestionnaireLayout>
    );
}
