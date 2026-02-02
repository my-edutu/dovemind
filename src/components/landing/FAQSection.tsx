import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { useIsMobile } from "@/hooks/use-mobile";
const faqs = [
  {
    question: "What mental health services do you offer?",
    answer: "We provide comprehensive mental health services including individual counseling, group therapy, substance abuse treatment, crisis intervention, and corporate wellness programs. Our certified psychologists specialize in trauma, addiction recovery, and adolescent mental health."
  },
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by clicking the 'Book Consultation' button on our website, calling our helpline, or sending us a message through the contact form. We typically respond within 24-48 hours to schedule your appointment."
  },
  {
    question: "Are your services confidential?",
    answer: "Absolutely. We maintain strict confidentiality in accordance with professional ethics and Nigerian law. All sessions and personal information are kept private. We only share information with your explicit consent or when legally required."
  },
  {
    question: "Do you offer training for organizations?",
    answer: "Yes, we offer customized training programs for schools, universities, corporate organizations, religious institutions, and government agencies. Our training covers drug abuse prevention, mental health awareness, and workplace wellness."
  },
  {
    question: "What is your approach to substance abuse treatment?",
    answer: "We use an evidence-based, holistic approach combining cognitive behavioral therapy, family therapy, and support groups. Our treatment plans are personalized to address both the addiction and underlying mental health factors."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = useContactModal();
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const StillHaveQuestion = () => (
    <motion.div
      className="bg-card rounded-2xl p-8 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-3">
        Still have a question?
      </h3>
      <p className="text-muted-foreground mb-6">
        Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
      </p>
      <Button
        onClick={openModal}
        className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
      >
        Send email
      </Button>
    </motion.div>
  );

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Title and CTA (CTA hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 lg:mb-16 leading-tight">
              Frequently asked<br />questions
            </h2>

            {/* Still have questions card - only show on desktop */}
            {!isMobile && <StillHaveQuestion />}
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between p-6 text-left"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="h-5 w-5 text-accent" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}

            {/* Still have questions card - show at end on mobile */}
            {isMobile && <StillHaveQuestion />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
