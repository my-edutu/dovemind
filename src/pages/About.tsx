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
  CheckCircle,
  Phone
} from "lucide-react";
import samuelImage from "@/assets/samuel-ogunsola.png";
import davidImage from "@/assets/david-folaranmi.png";

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
                DovesMind Synergy is a health innovation and social impact driven company in Nigeria dedicated
                to tackling pressing societal challenges, with a strong focus on substance abuse prevention
                and advocacy. Building on the expertise and networks of its founding partners—the David
                Folaranmi Foundation and the Food and Genes Initiative—DovesMind leverages years of experience
                in youth focused interventions, health education, and community development. Through impactful
                programs, it has empowered schools, communities, and organizations with the knowledge and tools
                needed to address drug abuse while fostering healthier and more productive environments. With a
                proven track record of delivering innovative, data-driven, and scalable initiatives, DovesMind
                is well positioned to lead national conversations and interventions on drug prevention.
              </p>
              <p>
                Our strength lies in combining grassroots engagement with institutional partnerships, making us
                uniquely qualified to deliver the Youth Town Hall Meetings on Substance Abuse Prevention across
                Nigeria. By drawing on our established relationships with stakeholders such as NDLEA, NAFDAC,
                and civil society organizations, we can ensure expert-led discussions, impactful youth participation,
                and actionable recommendations. Our ability to mobilize young people nationwide, design engaging
                advocacy programs, and translate insights into policy-focused reports makes DovesMind the right
                partner for this project. Ultimately, our approach will not only address drug abuse but also
                empower youths as critical stakeholders in Nigeria’s democratic participation and sustainable
                national growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Directors
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Meet the visionaries leading DovesMind Synergy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* David Folaranmi */}
            <motion.div
              className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/david-folaranmi-36a6262ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-80 relative group overflow-hidden block"
              >
                <img
                  src={davidImage}
                  alt="David Folaranmi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </a>
              <div className="p-8 flex-1 flex flex-col">
                <a
                  href="https://www.linkedin.com/in/david-folaranmi-36a6262ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dove-teal transition-colors"
                >
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">David Folaranmi</h3>
                </a>
                <p className="text-dove-teal font-medium mb-4">Co-Founder and Director</p>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Founder:</span> David Folaranmi Foundation and Live Free Initiative
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Experience:</span> 15+ years in Rehabilitation setup and Management, Training and Professional Development, Non-Profit Management, Drug Abuse Advocacy, Business Consultation, and Operations Management.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Samuel Ogunsola */}
            <motion.div
              className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="https://www.linkedin.com/in/samuelolarewaju/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-80 relative group overflow-hidden block"
              >
                <img
                  src={samuelImage}
                  alt="Samuel Ogunsola"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </a>
              <div className="p-8 flex-1 flex flex-col">
                <a
                  href="https://www.linkedin.com/in/samuelolarewaju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dove-teal transition-colors"
                >
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Samuel Ogunsola</h3>
                </a>
                <p className="text-dove-teal font-medium mb-4">Co-Founder and Director</p>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Founder:</span> Food and Genes Initiative (www.foodandgenes.net)
                  </p>
                  <p className="font-medium text-foreground">Certified Drug Abuse Advocate</p>
                  <p>
                    <span className="font-semibold text-foreground">Experience:</span> 6+ years in Non-Profit Management, Drug Abuse Advocacy, Business Consultation, Marketing, and Operations Management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mental Health Officers Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mental Health Officers
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Our dedicated team of professionals working on the ground.
            </p>
          </motion.div>

          {/* Placeholder for Mental Health Officers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative group overflow-hidden">
                  <Users className="h-16 w-16 opacity-20" />
                  <span className="sr-only">Mental Health Officer Placeholder</span>
                </div>
                <div className="p-6 flex-1 text-center">
                  <h3 className="text-xl font-bold text-card-foreground mb-1">Mental Health Officer</h3>
                  <p className="text-dove-teal font-medium text-sm">Certified Professional</p>
                </div>
              </motion.div>
            ))}
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

      {/* Project Focus Section */}
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
              Current Project Focus
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Empowering Nigerian youths to become champions of substance abuse prevention.
            </p>
          </motion.div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-dove-teal/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Project Goal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower Nigerian youths (ages 18–35) in Enugu State, Nigeria to become champions of
                  substance abuse prevention through knowledge sharing, engagement with stakeholders, and
                  the development of youth-driven strategies that strengthen national growth and democratic participation.
                </p>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Objectives</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Raise Awareness", desc: "Sensitize 600 youths within 3 days across Enugu State on substance abuse prevention." },
                    { title: "Promote Dialogue", desc: "Create safe spaces for dialogue with government agencies (NDLEA, NAFDAC, Police, Ministries)." },
                    { title: "Strengthen Policy Input", desc: "Collect youth-driven recommendations for national drug prevention policies." },
                    { title: "Mobilize Youth Participation", desc: "Encourage positive youth participation in governance through substance-free advocacy." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-dove-teal flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">{item.title}:</span>{" "}
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Contact Section */}
      <section className="py-16 bg-background">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're here to support you. Reach out to us for enquiries or assistance.
            </p>
          </motion.div>

          <motion.div
            className="bg-card max-w-4xl mx-auto rounded-2xl border border-border shadow-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-start text-center md:text-left">

              {/* Locations */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-3 text-dove-teal font-semibold">
                  <Target className="h-5 w-5" />
                  <span>Visit Us</span>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground text-center md:text-left">
                  <div>
                    <strong className="text-foreground block mb-1">Abuja</strong>
                    No 1 Blossom Drive, Rainbow Estate
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Enugu</strong>
                    Plot 112, WTC Estate, New Layout
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-3 text-dove-teal font-semibold">
                  <Phone className="h-5 w-5" />
                  <span>Contact Info</span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground text-center md:text-left">
                  <div>
                    <p>08063445268</p>
                    <p>08102443104</p>
                  </div>
                  <div className="pt-1">
                    <p className="break-all">dovesmindsynergy@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media & CTA */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-3 text-dove-teal font-semibold">
                  <Heart className="h-5 w-5" />
                  <span>Connect</span>
                </div>

                <div className="flex gap-4 mb-6">
                  <a
                    href="https://linkedin.com/company/dovesmind-synergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary/50 rounded-lg hover:bg-dove-teal hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a
                    href="https://instagram.com/dovesmind_synergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary/50 rounded-lg hover:bg-dove-teal hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>

                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center px-6 py-2 bg-dove-teal text-primary-foreground rounded-lg font-medium text-sm hover:bg-dove-teal/90 transition-colors w-full md:w-auto"
                >
                  Message Us
                </Link>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default AboutPage;
