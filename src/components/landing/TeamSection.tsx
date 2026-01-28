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
        <div className="text-center mb-16">
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
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-dove-teal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </button>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;