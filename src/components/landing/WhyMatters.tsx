import { motion } from "framer-motion";
import { Shield, Brain, Building, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Confidential Support",
    description: "Your privacy is our priority. All sessions and consultations are completely confidential.",
    color: "bg-rose-500",
  },
  {
    icon: Brain,
    title: "Professional Guidance",
    description: "Work with certified psychologists who specialize in addiction and mental health recovery.",
    color: "bg-amber-400",
  },
  {
    icon: Building,
    title: "Trusted Referrals",
    description: "Access to vetted treatment facilities and rehabilitation centers across Nigeria.",
    color: "bg-rose-400",
  },
  {
    icon: Heart,
    title: "Emotional Well-being",
    description: "Build lasting emotional resilience through personalized therapeutic approaches.",
    color: "bg-violet-500",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Comprehensive programs to help families understand and support their loved ones.",
    color: "bg-teal-500",
  },
];

const WhyMatters = () => {
  return (
    <section id="about" className="section-padding bg-[#f8f9fa] pt-32 md:pt-40">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[280px,1fr] gap-12 lg:gap-16">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-dove-teal" />
              <span className="text-sm text-dove-teal font-medium">Our Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Why Psychological Support Matters
            </h2>
            <p className="text-muted-foreground">
              Early intervention and ethical care are the foundations of lasting recovery.
            </p>
          </motion.div>

          {/* Right side - Cards: 2 on top, 3 on bottom */}
          <div className="flex flex-col gap-6">
            {/* Top row - 2 cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.slice(0, 2).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom row - 3 cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {benefits.slice(2, 5).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index + 2}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
