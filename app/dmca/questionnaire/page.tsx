"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionnaireLayout from "../../components/dmca/QuestionnaireLayout";

// Steps
import Step1Details, { DMCAFormData } from "../../components/dmca/Step1Details";
import Step2Contact from "../../components/dmca/Step2Contact";
import Step3Pricing from "../../components/dmca/Step3Pricing";
import Step4Terms from "../../components/dmca/Step4Terms";
import Step5Payment from "../../components/dmca/Step5Payment";

export default function DMCATakedownQuestionnairePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    // Form State
    const [details, setDetails] = useState<DMCAFormData>({
        companyName: "",
        companyAddress: "",
        email: "",
        websiteUrl: "",
        personSigning: "",
        titleSigning: "",
        infringingUrls: "",
        originalUrls: "",
        ownerCompany: "",
        ownerEmail: "",
        ownerPhone: ""
    });

    const [contactData, setContactData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: ""
    });

    const [pricingPlan, setPricingPlan] = useState<'unlimited' | 'onetime'>('unlimited');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Helpers
    const updateDetails = (fields: Partial<DMCAFormData>) => {
        setDetails(prev => ({ ...prev, ...fields }));
    };

    const updateContactData = (fields: Partial<typeof contactData>) => {
        setContactData(prev => ({ ...prev, ...fields }));
    };

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

    const handleSubmit = async (finalContactInfo: any) => {
        const formData = {
            details,
            contactData, // This might be redundant if Step 5 collects it again, but usually Step 2 contact is different or preliminary
            pricingPlan,
            agreedToTerms,
            finalContactInfo // Captured at payment step
        };

        try {
            const response = await fetch('/api/service-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'DMCA',
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
                    <Step1Details
                        data={details}
                        updateData={updateDetails}
                        onNext={nextStep}
                    />
                );
            case 2:
                return (
                    <Step2Contact
                        contactData={contactData}
                        updateContactData={updateContactData}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 3:
                return (
                    <Step3Pricing
                        pricingPlan={pricingPlan}
                        setPricingPlan={setPricingPlan}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 4:
                return (
                    <Step4Terms
                        agreedToTerms={agreedToTerms}
                        setAgreedToTerms={setAgreedToTerms}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case 5:
                return (
                    <Step5Payment
                        pricingPlan={pricingPlan}
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
