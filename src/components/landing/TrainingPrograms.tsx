import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

import serviceTraining from "@/assets/service-training.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceRehabilitation from "@/assets/service-rehabilitation.jpg";
import heroAwareness from "@/assets/hero-awareness.jpg";

const programs = [
  {
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    image: serviceTraining,
    bgColor: "bg-[#e8f4e8]",
  },
  {
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    image: serviceConsultation,
    bgColor: "bg-[#fff9e6]",
  },
  {
    title: "NGOs & Community",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    image: serviceRehabilitation,
    bgColor: "bg-[#e6f3ff]",
  },
  {
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    image: heroAwareness,
    bgColor: "bg-[#fce8ec]",
  },
];

const TrainingPrograms = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="training" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-2">Our Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Training Programs
          </h2>
        </motion.div>

        {/* Cards */}
        <div className={`${isMobile ? 'flex flex-col gap-4' : 'flex gap-4'}`}>
          {programs.map((program, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                className={`${program.bgColor} rounded-3xl cursor-pointer overflow-hidden`}
                onClick={() => handleClick(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  width: isMobile ? "100%" : isExpanded ? "400px" : "200px",
                  minWidth: isMobile ? "100%" : isExpanded ? "400px" : "200px",
                }}
                animate={{
                  width: isMobile ? "100%" : isExpanded ? 400 : 200,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                layout
              >
                <div className="p-6 h-full flex flex-col min-h-[280px]">
                  {/* Title */}
                  <motion.h3 
                    className="font-bold text-lg text-foreground"
                    layout="position"
                  >
                    {program.title}
                  </motion.h3>

                  {/* Content - only show when expanded */}
                  <div className="flex-1 mt-3">
                    <AnimatePresence mode="wait">
                      {(isExpanded || isMobile) && (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-4 h-full"
                        >
                          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                            {program.description}
                          </p>
                          <motion.div 
                            className="w-28 h-32 rounded-2xl overflow-hidden flex-shrink-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <img 
                              src={program.image} 
                              alt={program.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <motion.div 
                    className="flex items-center justify-between mt-4 pt-3"
                    layout="position"
                  >
                    <span className="text-sm text-muted-foreground">Read More</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded ? "bg-dove-teal text-white" : "bg-white/70 text-muted-foreground"
                    }`}>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-dove-teal text-primary-foreground hover:bg-dove-teal/90"
            asChild
          >
            <Link to="/trainings">
              Request Training
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
