import { motion } from "framer-motion";
import { Shield, User, Building, Heart, TrendingDown, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Confidential & Ethical Support",
    description: "Your privacy is our priority. All sessions are completely confidential.",
  },
  {
    icon: User,
    title: "Professional Psychological Guidance",
    description: "Work with certified psychologists trained in evidence-based approaches.",
  },
  {
    icon: Building,
    title: "Trusted Rehabilitation Referrals",
    description: "Access to vetted rehabilitation centers and treatment facilities.",
  },
  {
    icon: Heart,
    title: "Improved Emotional Well-being",
    description: "Develop coping strategies and build emotional resilience.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Substance Abuse Risk",
    description: "Prevention programs that address root causes effectively.",
  },
  {
    icon: Users,
    title: "Stronger Families & Communities",
    description: "Support systems that extend beyond the individual.",
  },
];

const WhyMatters = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50 pt-32 md:pt-40">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Impact
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Psychological Support Matters
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Early intervention and ethical care are the foundations of lasting recovery. 
            Our approach focuses on prevention over punishment, empowering individuals 
            and families to build healthier futures through professional guidance.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6 text-accent" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyMatters;
