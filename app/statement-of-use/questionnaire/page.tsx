"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionnaireLayout from "../../components/statement/QuestionnaireLayout";

// Steps
import Step1Identify from "../../components/statement/Step1Identify";
import Step2Changes from "../../components/statement/Step2Changes";
import Step3Specimen from "../../components/statement/Step3Specimen";
import Step4Dates from "../../components/statement/Step4Dates";
import Step5Speed from "../../components/statement/Step5Speed";
import Step6Payment from "../../components/statement/Step6Payment";

export default function StatementOfUseQuestionnairePage() {
    const router = useRouter(); // Initialize router
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;

    // Form State
    const [serialNumber, setSerialNumber] = useState("");
    const [selectedMark, setSelectedMark] = useState<any>(null); // Track selected mark

    const [changeAddress, setChangeAddress] = useState<boolean | null>(null);
    const [changeDrawing, setChangeDrawing] = useState<boolean | null>(null);

    const [coversAllGoods, setCoversAllGoods] = useState<boolean | null>(null);
    const [specimenClassType, setSpecimenClassType] = useState<'goods' | 'service' | 'both' | null>(null);

    const [dateFirstUseCommerce, setDateFirstUseCommerce] = useState({ year: '', month: '', day: '' });
    const [dateFirstUseAnywhere, setDateFirstUseAnywhere] = useState({ year: '', month: '', day: '' });

    const [processingSpeed, setProcessingSpeed] = useState<'standard' | 'express' | 'sameday'>('standard');

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

    // Submission Handler
    const handleSubmit = async (contactInfo: any) => {
        const formData = {
            serialNumber,
            selectedMark,
            changeAddress,
            changeDrawing,
            coversAllGoods,
            specimenClassType,
            dateFirstUseCommerce,
            dateFirstUseAnywhere,
            processingSpeed,
            contactInfo // Passed from Step 6 form
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'SOU',
                    data: formData
                })
            });

            if (response.ok) {
                // Redirect to success or dashboard
                router.push('/user');
            } else {
                console.error("Submission failed");
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
                    <Step1Identify
                        serialNumber={serialNumber}
                        setSerialNumber={setSerialNumber}
                        onNext={nextStep}
                    />
                );
            case 2:
                return (
                    <Step2Changes
                        changeAddress={changeAddress}
                        changeDrawing={changeDrawing}
                        setChangeAddress={setChangeAddress}
                        setChangeDrawing={setChangeDrawing}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 3:
                return (
                    <Step3Specimen
                        coversAllGoods={coversAllGoods}
                        specimenClassType={specimenClassType}
                        setCoversAllGoods={setCoversAllGoods}
                        setSpecimenClassType={setSpecimenClassType}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 4:
                return (
                    <Step4Dates
                        dateFirstUseCommerce={dateFirstUseCommerce}
                        dateFirstUseAnywhere={dateFirstUseAnywhere}
                        setDateFirstUseCommerce={setDateFirstUseCommerce}
                        setDateFirstUseAnywhere={setDateFirstUseAnywhere}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 5:
                return (
                    <Step5Speed
                        processingSpeed={processingSpeed}
                        setProcessingSpeed={setProcessingSpeed}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 6:
                return (
                    <Step6Payment
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
