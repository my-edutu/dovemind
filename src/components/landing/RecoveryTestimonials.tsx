import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaora M.",
    location: "Lagos",
    content: "DovesMind gave me hope when I thought there was none. The counselors understood my struggle without judgment. Two years clean now and I'm rebuilding my life with my family.",
    yearsRecovery: 2,
    rating: 5
  },
  {
    name: "Tunde O.",
    location: "Abuja",
    content: "I was skeptical about online counseling, but the support I received was life-changing. The AI chatbot helped me through late-night cravings when I had no one else to talk to.",
    yearsRecovery: 1,
    rating: 5
  },
  {
    name: "Chisom E.",
    location: "Port Harcourt",
    content: "After struggling with substance abuse for 8 years, DovesMind connected me with a rehabilitation center that truly cared. The follow-up support made all the difference.",
    yearsRecovery: 3,
    rating: 5
  },
  {
    name: "Ibrahim K.",
    location: "Kano",
    content: "The confidentiality and respect I received here helped me open up for the first time. My counselor helped me understand the root causes and gave me tools to stay strong.",
    yearsRecovery: 1,
    rating: 5
  },
];

const RecoveryTestimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stories of Hope & Recovery
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Real voices from individuals who found their path to recovery with our support. 
            Their courage inspires us every day.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative quote */}
              <Quote className="h-12 w-12 text-dove-teal/10 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-dove-gold text-dove-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="bg-dove-teal/10 px-3 py-1.5 rounded-full">
                  <p className="text-xs font-medium text-dove-teal">
                    {testimonial.yearsRecovery} {testimonial.yearsRecovery === 1 ? 'year' : 'years'} in recovery
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dove-teal to-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Privacy note */}
        <motion.p 
          className="text-center text-sm text-muted-foreground mt-8"
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
