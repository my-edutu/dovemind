import { motion } from "framer-motion";
import { Award, Lock, Scale, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustCards = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "All our psychologists are certified and adhere to professional standards.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure Sessions",
    description: "Your information and sessions are protected with strict privacy protocols.",
  },
  {
    icon: Scale,
    title: "Ethical Standards & Compliance",
    description: "We operate with the highest ethical standards in mental health care.",
  },
  {
    icon: ClipboardList,
    title: "Tailored Support Plans",
    description: "Personalized care plans designed for your unique situation and goals.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compassionate & Ethical Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing care that respects your dignity, privacy, and individual needs
          </p>
        </motion.div>

        {/* Trust cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ duration: 0.3 }}>
                  <Card className="border-border hover:border-accent/30 transition-colors h-full">
                    <CardContent className="p-6 flex gap-4">
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
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting text */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At DovesMind Synergy, we understand that seeking help takes courage. 
            That's why we've built our practice on a foundation of trust, confidentiality, 
            and unwavering ethical responsibility. Your journey to wellness is safe with us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
