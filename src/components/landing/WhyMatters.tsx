import { motion } from "framer-motion";
import { Shield, User, Building, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: Shield,
    title: "Confidential Support",
    description: "Your privacy is our priority.",
  },
  {
    icon: User,
    title: "Professional Guidance",
    description: "Work with certified psychologists.",
  },
  {
    icon: Building,
    title: "Trusted Referrals",
    description: "Access to vetted treatment facilities.",
  },
  {
    icon: Heart,
    title: "Emotional Well-being",
    description: "Build lasting emotional resilience.",
  },
];

const WhyMatters = () => {
  const isMobile = useIsMobile();
  const displayBenefits = isMobile ? benefits.slice(0, 4) : benefits;

  return (
    <section id="about" className="section-padding bg-secondary/50 pt-32 md:pt-40">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Psychological Support Matters
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Early intervention and ethical care are the foundations of lasting recovery.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-6 w-6 text-accent" />
                </motion.div>
                <h3 className="font-semibold text-card-foreground text-sm md:text-base mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
