import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { 
  ArrowLeft, 
  Heart, 
  Shield, 
  Users, 
  Target, 
  Eye,
  Award,
  CheckCircle
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with empathy, understanding that recovery is a deeply personal journey."
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "Your privacy is sacred. All consultations and records are handled with strict confidentiality."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of support networks and building communities that uplift one another."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our team comprises certified professionals committed to delivering evidence-based care."
  },
];

const milestones = [
  { year: "2018", event: "DovesMind Synergy founded in Lagos with a vision to transform mental health care in Nigeria" },
  { year: "2019", event: "Launched first corporate wellness program, partnering with 5 major organizations" },
  { year: "2020", event: "Expanded to online consultations, reaching Nigerians in remote areas" },
  { year: "2021", event: "Introduced school-based prevention programs in 20+ institutions" },
  { year: "2022", event: "Partnered with state governments for community outreach initiatives" },
  { year: "2023", event: "Launched DovesMind AI assistant for 24/7 mental health support" },
  { year: "2024", event: "Expanded rehabilitation referral network across all geopolitical zones" },
];

const AboutPage = () => {
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
              About DovesMind Synergy
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              A beacon of hope for individuals and families affected by drug abuse and mental health challenges across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-dove-teal/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-dove-teal" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, compassionate, and professional psychological support to individuals 
                struggling with drug abuse and mental health challenges. We are committed to breaking the 
                stigma surrounding these issues and empowering Nigerians to seek help without shame.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Nigeria where every individual has access to quality mental health care, where addiction 
                is treated as a health issue rather than a moral failing, and where communities are equipped 
                with the knowledge to prevent substance abuse and support recovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                DovesMind Synergy was born from a deeply personal understanding of the challenges faced by 
                individuals and families dealing with substance abuse and mental health issues in Nigeria. 
                Our founder witnessed firsthand how stigma and lack of accessible care prevented many from 
                seeking the help they desperately needed.
              </p>
              <p className="mb-6">
                Established in 2018, we began as a small counseling practice in Lagos with a simple but 
                powerful mission: to provide judgment-free, professional psychological support to anyone 
                who needed it. What started as one-on-one sessions has grown into a comprehensive mental 
                health organization serving individuals, families, schools, corporations, and government 
                institutions across Nigeria.
              </p>
              <p>
                Today, DovesMind Synergy stands as a trusted partner in mental wellness, combining 
                traditional counseling with innovative approaches like our AI-powered support assistant. 
                We've helped thousands of Nigerians begin their journey to recovery, and we're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              These principles guide every interaction, program, and decision at DovesMind Synergy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-dove-teal/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-dove-teal" />
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-dove-teal text-primary-foreground">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
              Key milestones in our mission to transform mental health care in Nigeria.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-20">
                  <span className="text-accent font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-primary-foreground/90">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're seeking help for yourself or a loved one, our team is here to support you 
              every step of the way. Take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-dove-teal text-primary-foreground rounded-xl font-semibold hover:bg-dove-teal/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/training-programs"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
