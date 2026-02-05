import { Button } from "@/components/ui/button";
import { Phone, Bot } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useChatbot } from "@/contexts/ChatbotContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroYouthSupport from "@/assets/hero-youth-support.jpg";
import heroRecoveryHope from "@/assets/hero-recovery-hope.jpg";
import heroQuitDrugs from "@/assets/hero-quit-drugs.jpg";
import heroReachHelp from "@/assets/hero-reach-help.jpg";
import heroCounseling from "@/assets/hero-counseling.jpg";

const cards = [
  { image: heroYouthSupport, title: "Youth Support Groups Save Lives" },
  { image: heroRecoveryHope, title: "Recovery is Possible" },
  { image: heroQuitDrugs, title: "Break Free from Addiction" },
  { image: heroReachHelp, title: "Reach Out for Help Today" },
  { image: heroCounseling, title: "Professional Counseling Works" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { openChat } = useChatbot();

  const navigate = useNavigate();

  // Duplicate cards for infinite loop effect on all devices
  const loopCards = [...cards, ...cards, ...cards, ...cards];

  const handleConsultantClick = () => {
    navigate("/team");
    // Optional: add hash scroll logic if needed, but simple nav is first step
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-background min-h-screen flex flex-col">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-narrow relative z-10 pt-24 md:pt-32 lg:pt-40 flex-1 flex flex-col justify-center">
        {/* Main headline section */}
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Break Free from{" "}
            <motion.span
              className="text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Addiction.
            </motion.span>{" "}Reclaim Your{" "}
            <motion.span
              className="text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Life.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive support and evidence-based strategies to help you overcome substance dependency and build a healthier future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-dove-teal text-primary-foreground hover:bg-dove-teal-light font-semibold text-base px-8 py-6 rounded-full"
                onClick={handleConsultantClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Talk with a Consultant
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-semibold text-base px-8 py-6 rounded-full"
                onClick={openChat}
              >
                <Bot className="mr-2 h-5 w-5" />
                Chat with Dove AI
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tilted Cards Section - Infinite Loop */}
      <motion.div
        className="relative z-20 overflow-hidden mt-auto pb-8 md:pb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="flex items-end animate-marquee w-max">
          {loopCards.map((card, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 mx-2 md:mx-3 group cursor-pointer"
              whileHover={{ scale: 1.08, zIndex: 30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 sm:w-40 md:w-48 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 sm:h-52 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                    {card.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
