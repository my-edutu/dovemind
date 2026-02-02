import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Users, Landmark, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import serviceTraining from "@/assets/service-training.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceRehabilitation from "@/assets/service-rehabilitation.jpg";
import heroAwareness from "@/assets/hero-awareness.jpg";

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors",
    image: serviceTraining,
    bgColor: "bg-emerald-50",
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives",
    image: serviceConsultation,
    bgColor: "bg-amber-50",
  },
  {
    icon: Users,
    title: "NGOs & Community",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers",
    image: serviceRehabilitation,
    bgColor: "bg-sky-50",
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers",
    image: heroAwareness,
    bgColor: "bg-rose-50",
  },
];

const TrainingPrograms = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="training" className="section-padding bg-background relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-sm text-muted-foreground mb-2">Our Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Training Programs
            </h2>
          </div>
          <Link 
            to="/trainings" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            Read More 
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards Container - Horizontal scrollable on desktop */}
        <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'flex gap-4 overflow-visible'}`}>
          {programs.map((program, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                className={`relative ${program.bgColor} rounded-3xl overflow-hidden cursor-pointer flex-shrink-0`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{
                  width: isMobile ? "100%" : isExpanded ? 420 : 220,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                onClick={() => handleCardClick(index)}
                whileHover={{ y: -5 }}
                layout
              >
                <motion.div 
                  className="p-6 h-full flex flex-col min-h-[300px]"
                  layout
                >
                  {/* Title */}
                  <motion.h3 
                    className="font-bold text-lg text-foreground mb-3"
                    layout="position"
                  >
                    {program.title}
                  </motion.h3>

                  {/* Content */}
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col flex-1"
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {program.description}
                        </p>
                        
                        {/* Image */}
                        <div className="flex gap-3 mt-auto">
                          <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <img 
                              src={program.image} 
                              alt={program.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <img 
                              src={program.image} 
                              alt={program.title}
                              className="w-full h-full object-cover scale-110"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1"
                      >
                        <p className="text-muted-foreground text-sm line-clamp-4">
                          {program.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <motion.div 
                    className="flex items-center justify-between mt-4 pt-4"
                    layout="position"
                  >
                    <span className="text-sm text-muted-foreground">
                      Read More
                    </span>
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isExpanded 
                          ? "bg-dove-teal text-white" 
                          : "bg-white/80 text-muted-foreground"
                      }`}
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-dove-teal text-primary-foreground hover:bg-dove-teal/90 font-semibold text-base px-8 py-6 rounded-xl"
              asChild
            >
              <Link to="/trainings">
                Request Training Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
