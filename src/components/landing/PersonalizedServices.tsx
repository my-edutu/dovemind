import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PersonalizedServices = () => {
  return (
    <section className="relative bg-dove-teal py-16 md:py-24 overflow-hidden">
      {/* Decorative wavy lines */}
      <motion.div 
        className="absolute top-4 left-4 w-32 h-32 opacity-30"
        animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M20,30 Q35,15 35,35 Q35,55 55,55" />
          <path d="M10,50 Q25,35 25,55 Q25,75 45,75" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute top-8 right-8 w-20 h-20 opacity-40"
        animate={{ rotate: [0, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M30,50 Q50,25 70,50 Q50,75 30,50" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-12 right-1/4 w-16 h-16 opacity-30"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M15,50 Q35,25 55,50 Q75,75 95,50" />
        </svg>
      </motion.div>

      <div className="container-narrow relative z-10 text-center">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6 italic leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Personalized Mental Health<br />
          Services for a Better You
        </motion.h2>
        
        <motion.p 
          className="text-primary-foreground/80 text-sm max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-accent">✦</span> Struggling with stress, anxiety, or emotional challenges? Our certified professionals are here to help! Schedule your consultation now and take the first step towards a healthier mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedServices;
