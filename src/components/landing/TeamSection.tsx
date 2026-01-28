import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

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

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Certified professionals dedicated to providing compassionate, ethical, 
            and confidential psychological support to individuals and communities.
          </p>
        </motion.div>

        {/* Team grid */}
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
              {/* Image placeholder */}
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay with social links */}
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
              
              {/* Info */}
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
  );
};

export default TeamSection;
