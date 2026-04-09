import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarDavid from "@/assets/david-folaranmi.jpg";
import avatarSamuel from "@/assets/samuel-ogunsola.jpg";
import avatarOlajumoke from "@/assets/olajumoke-oladosu.jpg";
import avatarPaulAnimashaun from "@/assets/paul-animashaun.jpg";
import avatarFamiliar from "@/assets/familiar-ominizibe.jpg";
import avatarPaulLight from "@/assets/paul-light.jpg";

const team = [
  {
    name: "David Folaranmi",
    role: "Co-Founder and Director",
    image: avatarDavid
  },
  {
    name: "Samuel Ogunsola",
    role: "Co-Founder and Director",
    image: avatarSamuel
  },
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

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          {/* Section header */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet our team
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the exceptional team at DovesMind Synergy! Comprising diverse talents and expertise,
              we are a dedicated group committed to delivering excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/team">
              <Button variant="ghost" className="text-dove-teal hover:text-dove-teal-dark hover:bg-dove-teal/5 flex items-center gap-2 font-semibold">
                View full team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
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
                className="aspect-square mb-4 overflow-hidden rounded-3xl bg-muted shadow-sm"
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
              <p className="text-sm text-muted-foreground italic">
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
