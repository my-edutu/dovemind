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
import addictionRecovery from "@/assets/addiction-recovery.png";

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
    image: addictionRecovery,
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
      </div>

      {/* Cards - Full width scrollable with left alignment matching container */}
      <div className="w-full overflow-x-auto pb-8 -mt-4 pt-4 custom-scrollbar">
        <div
          className={`${isMobile ? 'flex flex-col gap-6 px-4' : 'flex gap-4'}`}
          style={!isMobile ? {
            paddingLeft: "max(1rem, calc((100% - 72rem) / 2 + 1rem))",
            paddingRight: "1rem"
          } : {}}
        >
          {programs.map((program, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className={`${program.bgColor} rounded-3xl cursor-pointer overflow-hidden flex-shrink-0 border border-transparent hover:border-foreground/5 transition-colors`}
                onClick={() => handleClick(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  width: isMobile ? "100%" : isExpanded ? 450 : 250,
                  height: isMobile ? (isExpanded ? "auto" : 220) : 250,
                }}
                style={{
                  width: isMobile ? "100%" : isExpanded ? "450px" : "250px",
                  height: isMobile ? (isExpanded ? "auto" : "220px") : "250px",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                layout="size"
              >
                <div className="p-7 h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      /* Collapsed state - show text */
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col h-full"
                      >
                        <h3 className="font-bold text-xl text-foreground mb-4">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {program.description}
                        </p>
                        <div className="flex items-center justify-end gap-3 mt-6">
                          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Visit</span>
                          <div className="w-10 h-10 rounded-full bg-white text-muted-foreground flex items-center justify-center shadow-sm">
                            <ArrowUpRight className="h-5 w-5" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* Expanded state - stacked on mobile, side-by-side on desktop */
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`h-full flex ${isMobile ? 'flex-col' : 'gap-4'}`}
                      // Clicking this container will bubble up to card's toggle handleClick
                      >
                        <div className="flex-1 flex flex-col">
                          <h3 className="font-bold text-xl text-foreground mb-4">
                            {program.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {program.description}
                          </p>

                          {isMobile && (
                            <motion.div
                              className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-md"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "192px" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                              <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          )}

                          <div className="mt-auto pt-2">
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-2 group"
                              onClick={(e) => {
                                e.stopPropagation(); // Clicking Visit link should navigate, not toggle card
                              }}
                            >
                              <span className="text-sm font-bold text-dove-teal uppercase tracking-wider">Visit</span>
                              <div className="w-10 h-10 rounded-full bg-dove-teal text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                                <ArrowRight className="h-5 w-5" />
                              </div>
                            </Link>
                          </div>
                        </div>
                        {!isMobile && (
                          <motion.div
                            className="w-40 h-full rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
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
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container-narrow">
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
            <Link to="/services">
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
