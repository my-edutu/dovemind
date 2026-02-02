import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Adaora M.",
    location: "Lagos, Nigeria",
    content: "DovesMind gave me hope when I thought there was none. The counselors understood my struggle without judgment. Two years clean now and I'm rebuilding my life with my family.",
    initials: "AM",
    bgColor: "bg-emerald-100",
    avatarBg: "bg-emerald-200"
  },
  {
    name: "Tunde O.",
    location: "Abuja, Nigeria",
    content: "I was skeptical about online counseling, but the support I received was life-changing. The AI chatbot helped me through late-night cravings when I had no one else to talk to.",
    initials: "TO",
    bgColor: "bg-amber-100",
    avatarBg: "bg-amber-200"
  },
  {
    name: "Chisom E.",
    location: "Port Harcourt, Nigeria",
    content: "After struggling with substance abuse for 8 years, DovesMind connected me with a rehabilitation center that truly cared. The follow-up support made all the difference.",
    initials: "CE",
    bgColor: "bg-rose-100",
    avatarBg: "bg-rose-200"
  },
  {
    name: "Ibrahim K.",
    location: "Kano, Nigeria",
    content: "The confidentiality and respect I received here helped me open up for the first time. My counselor helped me understand the root causes and gave me tools to stay strong.",
    initials: "IK",
    bgColor: "bg-sky-100",
    avatarBg: "bg-sky-200"
  },
  {
    name: "Ngozi A.",
    location: "Enugu, Nigeria",
    content: "The variety of support options is amazing! Whether I needed a morning check-in or a calming bedtime session, DovesMind has it all. Highly recommend!",
    initials: "NA",
    bgColor: "bg-violet-100",
    avatarBg: "bg-violet-200"
  },
  {
    name: "Emeka U.",
    location: "Benin City, Nigeria",
    content: "This service has changed my daily routine for the better! The wellness programs help me feel refreshed and energized. Love the personalized approach!",
    initials: "EU",
    bgColor: "bg-teal-100",
    avatarBg: "bg-teal-200"
  },
];

const RecoveryTestimonials = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What people are saying?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it—see what our clients have to say about their experience!
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${testimonial.bgColor} rounded-2xl p-6 ${index === 0 || index === 3 ? 'lg:row-span-1' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className={`h-10 w-10 ${testimonial.avatarBg}`}>
                  <AvatarFallback className={`${testimonial.avatarBg} text-foreground font-medium text-sm`}>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy note */}
        <motion.p 
          className="text-center text-xs text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          * Names have been changed to protect privacy. Shared with permission.
        </motion.p>
      </div>
    </section>
  );
};

export default RecoveryTestimonials;
