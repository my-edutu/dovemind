import { motion } from "framer-motion";
import avatarAdaora from "@/assets/avatar-adaora.jpg";
import avatarChisom from "@/assets/avatar-chisom.jpg";
import avatarEmeka from "@/assets/avatar-emeka.jpg";
import avatarIbrahim from "@/assets/avatar-ibrahim.jpg";

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

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet our team
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Meet the exceptional team at DovesMind Synergy! Comprising diverse talents and expertise, 
            we are a dedicated group committed to delivering excellence in every project.
          </p>
        </motion.div>

        {/* Team grid - clean horizontal layout */}
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
  );
};

export default TeamSection;
