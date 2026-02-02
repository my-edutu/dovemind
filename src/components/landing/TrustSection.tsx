import { motion } from "framer-motion";
import { Award, Lock, Scale, ClipboardList } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { useIsMobile } from "@/hooks/use-mobile";

const trustCards = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "All our psychologists are certified and adhere to professional standards.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Lock,
    title: "Confidential & Secure Sessions",
    description: "Your information and sessions are protected with strict privacy protocols.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Scale,
    title: "Ethical Standards & Compliance",
    description: "We operate with the highest ethical standards in mental health care.",
    gradient: "from-accent/15 to-primary/10",
  },
  {
    icon: ClipboardList,
    title: "Tailored Support Plans",
    description: "Personalized care plans designed for your unique situation and goals.",
    gradient: "from-primary/15 to-accent/10",
  },
];

const TrustSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Compassionate & Ethical Support
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are committed to providing care that respects your dignity, privacy, and individual needs.
            </p>
            <p className="text-muted-foreground">
              At DovesMind Synergy, we understand that seeking help takes courage. 
              That's why we've built our practice on a foundation of trust, confidentiality, 
              and unwavering ethical responsibility. Your journey to wellness is safe with us.
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
            <div className="relative" style={{ height: isMobile ? 320 : 400 }}>
              <CardSwap
                width={isMobile ? 280 : 360}
                height={isMobile ? 240 : 300}
                cardDistance={isMobile ? 40 : 50}
                verticalDistance={isMobile ? 50 : 60}
                delay={4000}
                pauseOnHover={true}
                skewAmount={4}
                easing="smooth"
              >
                {trustCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <Card
                      key={index}
                      customClass={`bg-gradient-to-br ${card.gradient} border border-border/50 backdrop-blur-sm shadow-xl`}
                    >
                      <div className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                            <Icon className="h-7 w-7 text-accent" />
                          </div>
                          <h3 className="font-bold text-foreground text-xl mb-3">
                            {card.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                          <span>Learn more</span>
                          <span>→</span>
                        </div>
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
