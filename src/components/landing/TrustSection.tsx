import { motion } from "framer-motion";
import { Award, Lock, Scale, ClipboardList } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { useIsMobile } from "@/hooks/use-mobile";

const trustCards = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "All our psychologists are certified and adhere to professional standards.",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your sessions are protected with strict privacy protocols.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Scale,
    title: "Ethical Standards",
    description: "We operate with the highest ethical standards in care.",
    bgColor: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
  {
    icon: ClipboardList,
    title: "Tailored Support",
    description: "Personalized care plans for your unique situation.",
    bgColor: "bg-muted",
    textColor: "text-foreground",
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
              Compassionate & Ethical Support
            </h2>
            <p className="text-muted-foreground mb-4">
              We are committed to providing care that respects your dignity, privacy, and individual needs.
            </p>
            <p className="text-muted-foreground text-sm">
              At DovesMind Synergy, we understand that seeking help takes courage. 
              Your journey to wellness is safe with us.
            </p>
          </motion.div>

          {/* Right side - CardSwap animation */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative" style={{ height: isMobile ? 220 : 260 }}>
              <CardSwap
                width={isMobile ? 220 : 280}
                height={isMobile ? 160 : 180}
                cardDistance={isMobile ? 30 : 35}
                verticalDistance={isMobile ? 35 : 40}
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
                      <div className={`p-4 h-full flex flex-col ${card.textColor}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
