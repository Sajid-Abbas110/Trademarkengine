import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import BenefitsSection from "./components/BenefitsSection";
import StatsSection from "./components/StatsSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ResourcesSection from "./components/ResourcesSection";
import SEOTextSection from "./components/SEOTextSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-[#ea580c]/20 selection:text-[#ea580c]">
      <Navbar />

      <main>
        <HeroSection />
        <HowItWorks />
        <PricingSection />
        <BenefitsSection />
        <StatsSection />
        <TestimonialCarousel />
        <ResourcesSection />
        <SEOTextSection />
      </main>

      <Footer />
    </div>
  );
}
