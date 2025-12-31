import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { AgentWorkflowSection } from "@/components/landing/AgentWorkflowSection";
import { PlatformsSection } from "@/components/landing/PlatformsSection";
import { MemorySection } from "@/components/landing/MemorySection";
import { HumanControlSection } from "@/components/landing/HumanControlSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <AgentWorkflowSection />
        <PlatformsSection />
        <MemorySection />
        <HumanControlSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
