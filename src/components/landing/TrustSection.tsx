import { motion } from "framer-motion";
import { Award, Lock, Scale, ClipboardList } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { useIsMobile } from "@/hooks/use-mobile";

const trustCards = [
  {
    icon: Award,
    title: "Certified",
    description: "Expert care from licensed professionals.",
    bgColor: "bg-[#e0f2fe]", // sky-100
    textColor: "text-sky-900",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Your privacy is our top priority.",
    bgColor: "bg-[#dcfce7]", // green-100
    textColor: "text-green-900",
  },
  {
    icon: Scale,
    title: "Ethical",
    description: "Guided by professional integrity.",
    bgColor: "bg-[#f3e8ff]", // purple-100
    textColor: "text-purple-900",
  },
  {
    icon: ClipboardList,
    title: "Tailored",
    description: "Personalized support just for you.",
    bgColor: "bg-[#ffedd5]", // orange-100
    textColor: "text-orange-900",
  },
];

const TrustSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional & Safe Care
            </h2>
            <p className="text-muted-foreground mb-4">
              We provide confidential, ethical, and compassionate support for your mental wellness.
            </p>
          </motion.div>

          {/* Right side - CardSwap animation (Desktop) / Marquee (Mobile) */}
          <motion.div
            className="flex justify-center items-center w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isMobile ? (
              // Mobile Infinite Marquee
              <div className="w-full overflow-hidden mask-fade-sides py-4">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                >
                  {[...trustCards, ...trustCards].map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-64 p-6 rounded-2xl shadow-sm border border-border/50 ${card.bgColor}`}
                      >
                        <div className={`flex flex-col h-full ${card.textColor}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-lg">{card.title}</h3>
                          </div>
                          <p className="text-sm opacity-90 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            ) : (
              // Desktop Card Swap
              <div className="relative pt-16" style={{ height: 320, width: '100%' }}>
                <CardSwap
                  width={280}
                  height={180}
                  cardDistance={35}
                  verticalDistance={40}
                  delay={4000}
                  pauseOnHover={true}
                  skewAmount={3}
                  easing="smooth"
                >
                  {trustCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <Card
                        key={index}
                        customClass={`${card.bgColor} shadow-lg`}
                      >
                        <div className={`p-6 h-full flex flex-col ${card.textColor}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-base">
                              {card.title}
                            </h3>
                          </div>
                          <p className="text-sm opacity-90 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </Card>
                    );
                  })}
                </CardSwap>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
