import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Adaora M.",
    location: "Lagos",
    content: "DovesMind gave me hope when I thought there was none. The counselors understood my struggle without judgment. Two years clean now and I'm rebuilding my life with my family.",
    yearsRecovery: 2,
    rating: 5,
    bgColor: "bg-dove-teal/10"
  },
  {
    name: "Tunde O.",
    location: "Abuja",
    content: "I was skeptical about online counseling, but the support I received was life-changing. The AI chatbot helped me through late-night cravings when I had no one else to talk to.",
    yearsRecovery: 1,
    rating: 5,
    bgColor: "bg-accent/10"
  },
  {
    name: "Chisom E.",
    location: "Port Harcourt",
    content: "After struggling with substance abuse for 8 years, DovesMind connected me with a rehabilitation center that truly cared. The follow-up support made all the difference.",
    yearsRecovery: 3,
    rating: 5,
    bgColor: "bg-dove-gold/10"
  },
  {
    name: "Ibrahim K.",
    location: "Kano",
    content: "The confidentiality and respect I received here helped me open up for the first time. My counselor helped me understand the root causes and gave me tools to stay strong.",
    yearsRecovery: 1,
    rating: 5,
    bgColor: "bg-secondary"
  },
];

const RecoveryTestimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-sm text-muted-foreground mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Stories of Hope <br />
              <span className="text-dove-teal">& Recovery</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm">
            Real voices from individuals who found their path to recovery with our support.
          </p>
        </motion.div>

        {/* Testimonials - Horizontal overlapping layout */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-0">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            const hasExpanded = expandedIndex !== null;
            const isBeforeExpanded = expandedIndex !== null && index < expandedIndex;
            const isAfterExpanded = expandedIndex !== null && index > expandedIndex;
            
            return (
              <motion.div
                key={index}
                className={`relative ${testimonial.bgColor} rounded-3xl border border-border/50 overflow-hidden cursor-pointer shadow-lg backdrop-blur-sm`}
                style={{ 
                  zIndex: isExpanded ? 20 : 10 - index,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{
                  width: isExpanded ? "100%" : hasExpanded ? "20%" : "25%",
                  marginLeft: index === 0 ? 0 : isExpanded ? 0 : "-2%",
                  x: isBeforeExpanded ? -30 : isAfterExpanded ? 30 : 0,
                  scale: hasExpanded && !isExpanded ? 0.95 : 1,
                  opacity: hasExpanded && !isExpanded ? 0.6 : 1,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.05 
                }}
                onClick={() => handleCardClick(index)}
                whileHover={!hasExpanded ? { 
                  scale: 1.02, 
                  zIndex: 25,
                  marginLeft: index === 0 ? 0 : "0%",
                } : {}}
              >
                <motion.div 
                  className="p-6 h-full flex flex-col min-h-[280px] lg:min-h-[300px] relative"
                  layout
                >
                  {/* Decorative quote */}
                  <Quote className="h-8 w-8 text-dove-teal/20 absolute top-6 right-6" />

                  {/* Rating */}
                  <motion.div className="flex gap-0.5 mb-3" layout>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-dove-gold text-dove-gold" />
                    ))}
                  </motion.div>
                  
                  {/* Name */}
                  <motion.h3 
                    className="font-semibold text-lg text-card-foreground mb-1"
                    layout
                  >
                    {testimonial.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xs text-muted-foreground mb-3"
                    layout
                  >
                    {testimonial.location}
                  </motion.p>

                  {/* Content */}
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex flex-col lg:flex-row gap-6 flex-1"
                      >
                        <div className="flex-1">
                          <p className="text-card-foreground text-sm leading-relaxed italic mb-4">
                            "{testimonial.content}"
                          </p>
                          <div className="inline-flex items-center gap-2 bg-dove-teal/20 px-3 py-1.5 rounded-full">
                            <span className="text-xs font-medium text-dove-teal">
                              {testimonial.yearsRecovery} {testimonial.yearsRecovery === 1 ? 'year' : 'years'} in recovery
                            </span>
                          </div>
                        </div>
                        <div className="lg:w-32 h-24 lg:h-auto rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-dove-teal/30 to-accent/30 flex items-center justify-center">
                          <span className="text-4xl">💚</span>
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
                        <p className={`text-muted-foreground text-sm line-clamp-3 italic ${hasExpanded ? 'hidden lg:block' : ''}`}>
                          "{testimonial.content.substring(0, 80)}..."
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <motion.div 
                    className="flex items-center justify-between mt-auto pt-4"
                    layout
                  >
                    <span className={`text-sm text-muted-foreground ${hasExpanded && !isExpanded ? 'hidden lg:block' : ''}`}>
                      {isExpanded ? "Close" : "Read More"}
                    </span>
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isExpanded 
                          ? "bg-dove-teal text-white" 
                          : "bg-card text-muted-foreground"
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

        {/* Privacy note */}
        <motion.p 
          className="text-center text-xs text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          * Names have been changed to protect privacy. Shared with permission.
        </motion.p>
      </div>
    </section>
  );
};

export default RecoveryTestimonials;
