import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import serviceTraining from "@/assets/service-training.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceRehabilitation from "@/assets/service-rehabilitation.jpg";
import heroAwareness from "@/assets/hero-awareness.jpg";

const programs = [
  {
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors",
    image: serviceTraining,
    bgColor: "bg-[#e8f5e9]",
  },
  {
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives",
    image: serviceConsultation,
    bgColor: "bg-[#fff8e1]",
  },
  {
    title: "NGOs & Community",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers",
    image: serviceRehabilitation,
    bgColor: "bg-[#e3f2fd]",
  },
  {
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers",
    image: heroAwareness,
    bgColor: "bg-[#fce4ec]",
  },
];

const TrainingPrograms = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const isMobile = useIsMobile();

  return (
    <section id="training" className="section-padding bg-[#f8faf8] relative overflow-hidden">
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
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Our Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Training Programs <span className="text-dove-teal">For Impact</span>
            </h2>
          </div>
          <Link 
            to="/trainings" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group text-sm font-medium uppercase tracking-wide"
          >
            Read More 
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards Container */}
        <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'flex gap-5'}`}>
          {programs.map((program, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                className={`relative ${program.bgColor} rounded-3xl overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{
                  flex: isMobile ? "none" : isHovered ? 2 : 1,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                layout
              >
                <motion.div 
                  className="p-6 h-full flex flex-col min-h-[340px]"
                  layout
                >
                  {/* Title */}
                  <motion.h3 
                    className="font-bold text-xl text-foreground mb-4"
                    layout="position"
                  >
                    {program.title}
                  </motion.h3>

                  {/* Content Area */}
                  <div className="flex-1 flex flex-col">
                    <AnimatePresence mode="wait">
                      {isHovered || isMobile ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex-1 flex flex-col md:flex-row gap-4"
                        >
                          {/* Text content */}
                          <div className="flex-1 flex flex-col">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {program.description}
                            </p>
                            <p className="text-xs text-muted-foreground/70 mt-2">
                              For: {program.audience}
                            </p>
                          </div>
                          
                          {/* Image - pill shaped */}
                          <motion.div 
                            className="w-full md:w-40 h-28 md:h-auto rounded-2xl overflow-hidden flex-shrink-0 shadow-md"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                          >
                            <img 
                              src={program.image} 
                              alt={program.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-1"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer - Read More */}
                  <motion.div 
                    className="flex items-center justify-between mt-4 pt-4 border-t border-black/5"
                    layout="position"
                  >
                    <span className="text-sm text-muted-foreground font-medium">
                      Read More
                    </span>
                    <motion.div 
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered 
                          ? "bg-dove-teal text-white" 
                          : "bg-white/80 text-muted-foreground"
                      }`}
                      animate={{ rotate: isHovered ? 0 : 0 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
