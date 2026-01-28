import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { 
    label: "1 in 4 Adults", 
    description: "Globally will be affected by mental or neurological disorders at some point in their lives. This statistic from the World Health Organization highlights the universal nature of mental health challenges—no family, community, or nation is immune.",
    source: "World Health Organization (WHO)"
  },
  { 
    label: "275 Million People", 
    description: "Worldwide suffer from drug use disorders, with numbers rising annually. Substance abuse doesn't discriminate—it affects people of all ages, backgrounds, and socioeconomic status. Early intervention and community support are critical to reversing this trend.",
    source: "United Nations Office on Drugs and Crime (UNODC)"
  },
  { 
    label: "Early Intervention", 
    description: "Can reduce substance abuse relapse rates by up to 50%. Studies consistently show that individuals who receive timely psychological support and professional guidance have significantly better long-term recovery outcomes.",
    source: "National Institute on Drug Abuse"
  },
  { 
    label: "14.5% of Nigerians", 
    description: "Between ages 15-64 have used drugs in the past year according to UNODC reports. This means approximately 1 in 7 Nigerian adults has been exposed to substance use, making prevention programs crucial for our communities.",
    source: "UNODC Nigeria Drug Use Survey"
  },
  { 
    label: "Only 10%", 
    description: "Of people with substance use disorders receive any form of treatment globally. This treatment gap represents millions of individuals and families who need support but cannot access it. DovesMind Synergy is working to close this gap in Nigeria.",
    source: "World Drug Report 2023"
  },
];

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <Counter from={0} to={end} duration={duration} />
          </motion.span>
        )}
        {suffix}
      </motion.span>
    </motion.span>
  );
};

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={isInView ? {
        transition: { duration }
      } : {}}
    >
      <motion.span
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <AnimatedNumber value={to} duration={duration} />
      </motion.span>
    </motion.span>
  );
};

const AnimatedNumber = ({ value, duration }: { value: number; duration: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <NumberRoller target={value} duration={duration} />
        </motion.span>
      ) : 0}
    </motion.span>
  );
};

const NumberRoller = ({ target, duration }: { target: number; duration: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  return (
    <motion.span
      ref={nodeRef}
      animate={{
        transition: { duration, ease: "easeOut" }
      }}
    >
      <motion.span
        animate={{ opacity: 1 }}
        transition={{ duration }}
        onUpdate={(latest) => {
          // This creates the counting effect
        }}
      >
        <InlineCounter target={target} duration={duration} />
      </motion.span>
    </motion.span>
  );
};

import { useState, useEffect } from "react";

const InlineCounter = ({ target, duration }: { target: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Statistics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Title and FAQ stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
              The Reality of Drug<br />
              Abuse & Mental Health
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline py-4 group">
                      <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {stat.label}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      <p className="leading-relaxed mb-2">{stat.description}</p>
                      <p className="text-xs text-accent">Source: {stat.source}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right side - Description and stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-10 leading-relaxed">
              These statistics reveal the urgent need for substance abuse prevention 
              and mental health support. When communities come together, we can identify 
              those at risk and provide life-changing intervention.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* First row */}
              <motion.div 
                className="bg-secondary rounded-2xl p-5 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  1 in <InlineCounter target={4} duration={2} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">Adults Affected</p>
              </motion.div>
              <motion.div 
                className="bg-secondary rounded-2xl p-5 text-center col-span-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  <InlineCounter target={275} duration={2.5} />M <span className="text-base font-normal text-muted-foreground">Suffer Drug Disorders</span>
                </p>
              </motion.div>

              {/* Second row - highlight card */}
              <motion.div 
                className="bg-accent rounded-2xl p-5 text-center col-span-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent-foreground">
                  <InlineCounter target={50} duration={2} />% <span className="text-base font-normal">Relapse Reduction with Early Help</span>
                </p>
              </motion.div>

              {/* Third row */}
              <motion.div 
                className="bg-secondary rounded-2xl p-5 text-center col-span-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  <InlineCounter target={14} duration={2} />.5% <span className="text-base font-normal text-muted-foreground">of Nigerians Use Drugs</span>
                </p>
              </motion.div>
              <motion.div 
                className="bg-secondary rounded-2xl p-5 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent"><InlineCounter target={90} duration={2.5} />%</p>
                <p className="text-xs text-muted-foreground mt-1">Untreated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
