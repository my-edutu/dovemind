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

const TrainingPrograms = () => {
  return (
    <section id="training" className="section-padding bg-dove-teal text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Prevention & Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Training Programs
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
            Empowering institutions across Nigeria with evidence-based drug abuse prevention 
            and mental health awareness programs tailored to their specific needs.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
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
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl"
          >
            Request Training Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;