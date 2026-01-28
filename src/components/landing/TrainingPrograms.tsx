import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Users, Landmark, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors"
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives"
  },
  {
    icon: Users,
    title: "NGOs & Community Groups",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers"
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers"
  },
];

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const TrainingPrograms = () => {
  return (
    <section id="training" className="section-padding bg-dove-teal text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Training Programs
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
            Empowering institutions across Nigeria with evidence-based drug abuse prevention 
            and mental health awareness programs tailored to their specific needs.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6 text-accent" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <p className="text-primary-foreground/70 text-sm mb-3">
                      {program.description}
                    </p>
                    <p className="text-xs text-accent">
                      For: {program.audience}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl"
              onClick={scrollToContact}
            >
              Request Training Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
