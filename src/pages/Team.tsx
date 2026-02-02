import { motion } from "framer-motion";
import { Linkedin, Mail, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const team = [
  {
    name: "Dr. Adaeze Okonkwo",
    role: "Founder & Lead Psychologist",
    bio: "PhD in Clinical Psychology with 15+ years experience in substance abuse counseling and mental health advocacy.",
    image: "/placeholder.svg"
  },
  {
    name: "Chukwuemeka Nwosu",
    role: "Head of Training Programs",
    bio: "Certified counselor specializing in corporate wellness and institutional drug prevention programs.",
    image: "/placeholder.svg"
  },
  {
    name: "Fatima Ibrahim",
    role: "Clinical Psychologist",
    bio: "Masters in Psychology from University of Lagos, specializing in adolescent mental health and family therapy.",
    image: "/placeholder.svg"
  },
  {
    name: "Olumide Adeyemi",
    role: "Community Outreach Director",
    bio: "10+ years experience in community health education and NGO partnerships across Nigeria.",
    image: "/placeholder.svg"
  },
];

const pioneers = [
  {
    name: "Dr. Ngozi Eze",
    role: "Senior Mental Health Officer",
    specialty: "Trauma & PTSD Specialist",
    experience: "12+ years",
  },
  {
    name: "Abubakar Suleiman",
    role: "Mental Health Officer",
    specialty: "Addiction Recovery Counselor",
    experience: "8+ years",
  },
  {
    name: "Blessing Okoro",
    role: "Mental Health Officer",
    specialty: "Youth Mental Health Advocate",
    experience: "6+ years",
  },
  {
    name: "Emeka Obi",
    role: "Mental Health Officer",
    specialty: "Family Therapy & Intervention",
    experience: "10+ years",
  },
  {
    name: "Hauwa Abdullahi",
    role: "Mental Health Officer",
    specialty: "Crisis Intervention Specialist",
    experience: "7+ years",
  },
  {
    name: "Tunde Bakare",
    role: "Mental Health Officer",
    specialty: "Cognitive Behavioral Therapy",
    experience: "9+ years",
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-dove-teal/80 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </motion.button>
                    <motion.button 
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pioneers.map((officer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-dove-teal/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-dove-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">
                          {officer.name}
                        </h3>
                        <p className="text-sm text-accent mb-2">{officer.role}</p>
                        <p className="text-xs text-muted-foreground mb-1">
                          {officer.specialty}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Experience: {officer.experience}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={scrollToContact}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
