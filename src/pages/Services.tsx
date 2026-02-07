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
// Updated images
import trainingSchools from "@/assets/training-schools.png";
import trainingCorporate from "@/assets/training-corporate.png";
import trainingCommunity from "@/assets/training-community.png";
import trainingGovernment from "@/assets/training-government.png";

const services = [
  // ... existing services ...
];

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors",
    image: trainingSchools,
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
    image: trainingCorporate,
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
    image: trainingCommunity,
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
    image: trainingGovernment,
    features: [
      "Policy development workshops",
      "Institutional capacity building",
      "Inter-agency coordination training",
      "Public awareness campaign design"
    ]
  },
];

const ServicesPage = () => {
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
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              Professional psychological support services designed to help individuals
              and families navigate their journey to wellness and recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-12 pb-24">
        <div className="container-narrow">


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

      {/* Training Programs Section - Light Background */}
      <section id="trainings" className="pb-24 pt-8 bg-secondary/30">
        <div className="container-narrow">

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
      className={`bg-card rounded-2xl overflow-hidden border border-border cursor-pointer transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-full'} hover:shadow-xl shadow-sm`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image Section */}
      <div className="h-56 overflow-hidden relative group">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-xl backdrop-blur-md shadow-sm">
          <Icon className="h-6 w-6 text-dove-teal" />
        </div>
      </div>

      <div className="p-8">
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2 text-card-foreground">{program.title}</h3>
          <p className="text-sm text-dove-teal font-semibold bg-dove-teal/10 inline-block px-3 py-1 rounded-full">
            {program.audience}
          </p>
        </div>

        {/* Content */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-24 md:max-h-full opacity-80 md:opacity-100'}`}>
          <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
          <ul className="space-y-3">
            {program.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-card-foreground">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {!isExpanded && (
          <div className="md:hidden pt-4 text-center text-dove-teal text-sm font-medium animate-pulse">
            Tap to view details
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
