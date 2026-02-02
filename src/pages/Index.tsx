import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VideoSection from "@/components/landing/VideoSection";
import WhyMatters from "@/components/landing/WhyMatters";
import PersonalizedServices from "@/components/landing/PersonalizedServices";
import Statistics from "@/components/landing/Statistics";
import ServicesOverview from "@/components/landing/ServicesOverview";
import TrainingPrograms from "@/components/landing/TrainingPrograms";
import RecoveryTestimonials from "@/components/landing/RecoveryTestimonials";
import TeamSection from "@/components/landing/TeamSection";
import DovesMindAI from "@/components/landing/DovesMindAI";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import ChatbotWidget from "@/components/landing/ChatbotWidget";
import ContactModal from "@/components/landing/ContactModal";
import { ChatbotProvider } from "@/contexts/ChatbotContext";
import { ContactModalProvider } from "@/contexts/ContactModalContext";

const Index = () => {
  return (
    <ChatbotProvider>
      <ContactModalProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <WhyMatters />
            <VideoSection />
            <PersonalizedServices />
            <Statistics />
            <ServicesOverview />
            <TrainingPrograms />
            <RecoveryTestimonials />
            <DovesMindAI />
            <TeamSection />
            <TrustSection />
            <FAQSection />
          </main>
          <Footer />
          <ChatbotWidget />
          <ContactModal />
        </div>
      </ContactModalProvider>
    </ChatbotProvider>
  );
};

export default Index;
