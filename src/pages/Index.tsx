import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import InsightCards from "@/components/landing/InsightCards";
import VideoSection from "@/components/landing/VideoSection";
import WhyMatters from "@/components/landing/WhyMatters";
import PersonalizedServices from "@/components/landing/PersonalizedServices";
import Statistics from "@/components/landing/Statistics";
import ServicesOverview from "@/components/landing/ServicesOverview";
import TrustSection from "@/components/landing/TrustSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InsightCards />
        <VideoSection />
        <WhyMatters />
        <PersonalizedServices />
        <Statistics />
        <ServicesOverview />
        <TrustSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
