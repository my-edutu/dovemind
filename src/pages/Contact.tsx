import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, Mail, Phone, MapPin, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      { message: "Please enter a valid phone number" }
    ),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@dovesmindsynergy.com",
    description: "We'll respond within 24-48 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+234 800 000 0000",
    description: "Mon-Fri from 9am to 5pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Lagos, Nigeria",
    description: "Book an appointment first",
  },
];

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const { data: result, error } = await supabase.functions.invoke("send-contact", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          message: data.message,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
      });

      form.reset();
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have a question or want to learn more about our mental health services?
              We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-4">Visit Our Offices</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground block mb-1">Abuja</strong>
                  No 1 Blossom Drive, Rainbow Estate
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Enugu</strong>
                  Plot 112, WTC Estate, New Layout
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-4">Connect With Us</h3>

              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>08063445268 / 08102443104</p>
                <p>dovesmindsynergy@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/dovesmind-synergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 rounded-xl hover:bg-dove-teal hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href="https://instagram.com/dovesmind_synergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 rounded-xl hover:bg-dove-teal hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Send us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+234 800 000 0000"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
