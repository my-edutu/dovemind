import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Users,
  Landmark,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Home,
  BookOpen,
  Heart
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import BookingForm from "@/components/landing/BookingForm";

const services = [
  {
    icon: MessageCircle,
    title: "Online Consultations",
    description: "Confidential one-on-one sessions with certified psychologists from the comfort of your home.",
    features: [
      "Video and audio sessions available",
      "Flexible scheduling",
      "Complete privacy guaranteed",
      "Follow-up support included"
    ]
  },
  {
    icon: Home,
    title: "Rehabilitation Referrals",
    description: "We connect you with trusted rehabilitation centers across Nigeria tailored to your needs.",
    features: [
      "Vetted partner facilities",
      "Personalized matching",
      "Family counseling support",
      "Post-rehabilitation follow-up"
    ]
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access our library of mental health and addiction recovery materials.",
    features: [
      "Self-help guides",
      "Video tutorials",
      "Support group directories",
      "Crisis intervention resources"
    ]
  },
  {
    icon: Heart,
    title: "Family Support Programs",
    description: "Helping families understand and support their loved ones through recovery.",
    features: [
      "Family therapy sessions",
      "Caregiver training",
      "Support group connections",
      "Communication workshops"
    ]
  },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors",
    features: [
      "Interactive workshops for students",
      "Teacher training on early warning signs",
      "Peer support program development",
      "Mental health first aid certification"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives",
    features: [
      "Executive wellness briefings",
      "Employee assistance program setup",
      "Stress management workshops",
      "Drug-free workplace policy development"
    ]
  },
  {
    icon: Users,
    title: "NGOs & Community Groups",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers",
    features: [
      "Train-the-trainer programs",
      "Community mobilization strategies",
      "Support group facilitation training",
      "Outreach program development"
    ]
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers",
    features: [
      "Policy development workshops",
      "Institutional capacity building",
      "Inter-agency coordination training",
      "Public awareness campaign design"
    ]
  },
];


const TrainingsPage = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-dove-teal to-dove-teal/90 text-primary-foreground">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trainings & Services
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              Comprehensive mental health support and evidence-based training programs
              for individuals, families, and institutions across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Professional psychological support services designed to help individuals
              and families navigate their journey to wellness and recovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border shadow-sm"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl text-card-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-card-foreground">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="trainings" className="section-padding bg-dove-teal text-primary-foreground">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Training Programs
            </h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
              Empowering institutions with evidence-based drug abuse prevention
              and mental health awareness programs tailored to their specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get Started
              </h2>
              <p className="text-muted-foreground text-lg">
                Interested in our services or training programs? Fill out the form below and our team will reach out.
              </p>
            </motion.div>

            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProgramCard = ({ program, index }: { program: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = program.icon;

  return (
    <motion.div
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 cursor-pointer transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-full'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
          <Icon className="h-7 w-7 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-xl">{program.title}</h3>
          <p className="text-sm text-accent">For: {program.audience}</p>
        </div>
      </div>

      {/* Content visibility controlled by isExpanded on mobile if needed, or structured to expand */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-24 md:max-h-full opacity-80 md:opacity-100'}`}>
        <p className="text-primary-foreground/80 mb-6">{program.description}</p>
        <ul className="space-y-3">
          {program.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/90">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {!isExpanded && (
        <div className="md:hidden pt-2 text-center text-accent text-sm font-medium animate-pulse">
          Tap to view details
        </div>
      )}
    </motion.div>
  );
};

export default TrainingsPage;
