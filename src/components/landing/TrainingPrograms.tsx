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
    features: [
      "Interactive workshops for students",
      "Teacher training on early warning signs",
      "Peer support program development",
    ]
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives",
    image: serviceConsultation,
    features: [
      "Executive wellness briefings",
      "Employee assistance program setup",
      "Drug-free workplace policy",
    ]
  },
  {
    icon: Users,
    title: "NGOs & Community",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers",
    image: serviceRehabilitation,
    features: [
      "Train-the-trainer programs",
      "Community mobilization strategies",
      "Outreach program development",
    ]
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers",
    image: heroAwareness,
    features: [
      "Policy development workshops",
      "Institutional capacity building",
      "Public awareness campaign design",
    ]
  },
];

const TrainingPrograms = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="training" className="section-padding bg-muted/30 relative overflow-hidden">
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

        {/* Cards Container */}
        <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'relative flex flex-row'}`}>
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isExpanded = expandedIndex === index;
            const hasExpanded = expandedIndex !== null;
            const isBeforeExpanded = expandedIndex !== null && index < expandedIndex;
            const isAfterExpanded = expandedIndex !== null && index > expandedIndex;
            
            // Desktop animation values
            const desktopAnimate = {
              width: isExpanded ? "100%" : hasExpanded ? "20%" : "25%",
              marginLeft: index === 0 ? 0 : isExpanded ? 0 : "-2%",
              x: isBeforeExpanded ? -30 : isAfterExpanded ? 30 : 0,
              scale: hasExpanded && !isExpanded ? 0.95 : 1,
              opacity: hasExpanded && !isExpanded ? 0.7 : 1,
            };

            // Mobile: no overlap animations
            const mobileAnimate = {
              scale: 1,
              opacity: 1,
              x: 0,
            };
            
            return (
              <motion.div
                key={index}
                className="relative bg-card rounded-3xl border border-border overflow-hidden cursor-pointer shadow-lg"
                style={{ 
                  zIndex: isExpanded ? 20 : 10 - index,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={isMobile ? mobileAnimate : desktopAnimate}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.05 
                }}
                onClick={() => handleCardClick(index)}
                whileHover={!isMobile && !hasExpanded ? { 
                  scale: 1.02, 
                  zIndex: 25,
                  marginLeft: index === 0 ? 0 : "0%",
                } : {}}
              >
                <motion.div 
                  className="p-6 h-full flex flex-col min-h-[280px] lg:min-h-[320px]"
                  layout={!isMobile}
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-dove-teal/10 flex items-center justify-center mb-4"
                    layout={!isMobile}
                  >
                    <Icon className="h-5 w-5 text-dove-teal" />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="font-semibold text-lg text-card-foreground mb-2"
                    layout={!isMobile}
                  >
                    {program.title}
                  </motion.h3>

                  {/* Expanded content */}
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col lg:flex-row gap-6 flex-1"
                      >
                        <div className="flex-1">
                          <p className="text-muted-foreground text-sm mb-4">
                            {program.description}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {program.features.map((feature, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-dove-teal" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-dove-teal font-medium">
                            For: {program.audience}
                          </p>
                        </div>
                        <div className="lg:w-48 h-36 lg:h-auto rounded-2xl overflow-hidden flex-shrink-0">
                          <img 
                            src={program.image} 
                            alt={program.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col justify-between"
                      >
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {program.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <motion.div 
                    className="flex items-center justify-between mt-auto pt-4"
                    layout={!isMobile}
                  >
                    <span className="text-sm text-muted-foreground">
                      {isExpanded ? "Close" : "Read More"}
                    </span>
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isExpanded 
                          ? "bg-dove-teal text-white" 
                          : "bg-muted text-muted-foreground"
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
