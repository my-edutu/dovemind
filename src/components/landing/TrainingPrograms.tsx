import { motion } from "framer-motion";
import { GraduationCap, Building2, Users, Landmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Drug awareness curriculum and mental health training for educators and students.",
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management and employee mental health.",
  },
  {
    icon: Users,
    title: "NGOs & Community",
    description: "Community-based prevention programs to build local capacity and support networks.",
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies across Nigeria.",
  },
];

const TrainingPrograms = () => {
  return (
    <section id="training" className="section-padding bg-background">
      <div className="container-narrow">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-dove-teal/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-dove-teal" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>

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
