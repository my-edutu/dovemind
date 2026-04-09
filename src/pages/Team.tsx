import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

import avatarDavid from "@/assets/david-folaranmi.jpg";
import avatarSamuel from "@/assets/samuel-ogunsola.jpg";
import avatarOlajumoke from "@/assets/olajumoke-oladosu.jpg";
import avatarPaulAnimashaun from "@/assets/paul-animashaun.jpg";
import avatarFamiliar from "@/assets/familiar-ominizibe.jpg";
import avatarPaulLight from "@/assets/paul-light.jpg";

import ApplyModal from "@/components/landing/ApplyModal";
import BookingModal from "@/components/landing/BookingModal";

const directors = [
  {
    name: "David Folaranmi",
    role: "Co-Founder and Director",
    image: avatarDavid,
    linkedin: "https://www.linkedin.com/in/david-folaranmi-36a6262ba/",
    experience: "15+ years in Rehabilitation setup and Management, Training and Professional Development, Non-Profit Management, Drug Abuse Advocacy, Business Consultation, and Operations Management."
  },
  {
    name: "Samuel Ogunsola",
    role: "Co-Founder and Director",
    image: avatarSamuel,
    linkedin: "https://www.linkedin.com/in/samuelolarewaju/",
    founder: "Food and Genes Initiative (www.foodandgenes.net)",
    experience: "6+ years in Non-Profit Management, Drug Abuse Advocacy, Business Consultation, Marketing, and Operations Management."
  }
];

const operationalTeam = [
  {
    name: "Olajumoke Oladosu",
    role: "Operations Lead",
    image: avatarOlajumoke
  },
  {
    name: "Paul Animashaun",
    role: "Business Lead",
    image: avatarPaulAnimashaun
  },
  {
    name: "Familiar Ominizibe",
    role: "Communications Lead",
    image: avatarFamiliar
  },
  {
    name: "Paul Light",
    role: "Technical Lead",
    image: avatarPaulLight
  },
];

const TeamPage = () => {
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

      {/* Directors Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Directors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our visionaries leading the mission to transform mental health and substance abuse prevention in Nigeria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {directors.map((member, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-80 relative group overflow-hidden block"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </a>
                <div className="p-8 flex-1 flex flex-col">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dove-teal transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{member.name}</h3>
                  </a>
                  <p className="text-dove-teal font-medium mb-4">{member.role}</p>
                  <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                    {member.founder && (
                      <p>
                        <span className="font-semibold text-foreground">Founder:</span> {member.founder}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-foreground">Experience:</span> {member.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team Section (formerly Operational) */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The driving force behind our daily impact and project execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {operationalTeam.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="aspect-square mb-6 overflow-hidden rounded-3xl bg-muted shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="font-bold text-foreground text-lg md:text-2xl mb-1 md:mb-2">
                  {member.name}
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground italic">
                  {member.role}
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
            className="bg-gradient-to-r from-dove-teal-dark to-dove-teal rounded-3xl p-8 md:p-12 text-center shadow-xl"
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ApplyModal />
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-10 font-bold rounded-[20px]"
                  >
                    Meet a Consultant
                  </Button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default TeamPage;
