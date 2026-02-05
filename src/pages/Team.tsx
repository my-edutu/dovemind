import { motion } from "framer-motion";
import { Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import avatarAdaora from "@/assets/avatar-adaora.jpg";
import avatarChisom from "@/assets/avatar-chisom.jpg";
import avatarEmeka from "@/assets/avatar-emeka.jpg";
import avatarIbrahim from "@/assets/avatar-ibrahim.jpg";
import avatarNgozi from "@/assets/avatar-ngozi.jpg";
import avatarTunde from "@/assets/avatar-tunde.jpg";
import BookingForm from "@/components/landing/BookingForm";

const team = [
  {
    name: "Dr. Adaeze Okonkwo",
    role: "Founder & Lead Psychologist",
    image: avatarAdaora
  },
  {
    name: "Chukwuemeka Nwosu",
    role: "Head of Training Programs",
    image: avatarChisom
  },
  {
    name: "Fatima Ibrahim",
    role: "Clinical Psychologist",
    image: avatarEmeka
  },
  {
    name: "Olumide Adeyemi",
    role: "Community Outreach Director",
    image: avatarIbrahim
  },
];

const pioneers = [
  {
    name: "Dr. Ngozi Eze",
    role: "Senior Mental Health Officer",
    specialty: "Trauma & PTSD Specialist",
    experience: "12+ years",
    image: avatarNgozi,
  },
  {
    name: "Abubakar Suleiman",
    role: "Mental Health Officer",
    specialty: "Addiction Recovery Counselor",
    experience: "8+ years",
    image: avatarTunde,
  },
  {
    name: "Blessing Okoro",
    role: "Mental Health Officer",
    specialty: "Youth Mental Health Advocate",
    experience: "6+ years",
    image: avatarAdaora,
  },
  {
    name: "Emeka Obi",
    role: "Mental Health Officer",
    specialty: "Family Therapy & Intervention",
    experience: "10+ years",
    image: avatarChisom,
  },
  {
    name: "Hauwa Abdullahi",
    role: "Mental Health Officer",
    specialty: "Crisis Intervention Specialist",
    experience: "7+ years",
    image: avatarEmeka,
  },
  {
    name: "Tunde Bakare",
    role: "Mental Health Officer",
    specialty: "Cognitive Behavioral Therapy",
    experience: "9+ years",
    image: avatarIbrahim,
  },
];

const TeamPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-dove-teal-dark to-dove-teal">
        <div className="container-narrow">
          <motion.div
            className="text-center text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Certified professionals dedicated to providing compassionate, ethical,
              and confidential psychological support to individuals and communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our founding members bring decades of combined experience in mental health and substance abuse prevention.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Large rounded photo */}
                <motion.div
                  className="aspect-square mb-4 overflow-hidden rounded-3xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Name and role below */}
                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Officers */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Pioneer Mental Health Officers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mental Health Officers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals on the frontlines of mental health care and substance abuse prevention in Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            {pioneers.map((officer, index) => (
              <motion.div
                key={index}
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Rounded photo */}
                <motion.div
                  className="aspect-square mb-4 overflow-hidden rounded-3xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Name and details below */}
                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  {officer.name}
                </h3>
                <p className="text-sm text-accent mb-1">{officer.specialty}</p>
                <p className="text-xs text-muted-foreground">
                  {officer.experience} experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="bg-gradient-to-r from-dove-teal-dark to-dove-teal rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Are you passionate about mental health and making a difference in people's lives?
              We're always looking for dedicated professionals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={scrollToContact}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={scrollToContact}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="section-padding bg-secondary/20">
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
                Book a Session
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to speak with one of our consultants? Fill out the form below to schedule a session.
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

export default TeamPage;
