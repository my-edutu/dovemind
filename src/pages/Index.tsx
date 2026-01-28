import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VideoSection from "@/components/landing/VideoSection";
import WhyMatters from "@/components/landing/WhyMatters";
import PersonalizedServices from "@/components/landing/PersonalizedServices";
import Statistics from "@/components/landing/Statistics";
import ServicesOverview from "@/components/landing/ServicesOverview";
import TrainingPrograms from "@/components/landing/TrainingPrograms";
import TeamSection from "@/components/landing/TeamSection";
import DovesMindAI from "@/components/landing/DovesMindAI";
import TrustSection from "@/components/landing/TrustSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import ChatbotWidget from "@/components/landing/ChatbotWidget";
import { ChatbotProvider } from "@/contexts/ChatbotContext";

const Index = () => {
  return (
    <ChatbotProvider>
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
          <DovesMindAI />
          <TeamSection />
          <TrustSection />
          <ContactForm />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </ChatbotProvider>
  );
};

export default Index;
