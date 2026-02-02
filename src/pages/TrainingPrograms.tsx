import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Landmark, 
  CheckCircle, 
  Star,
  Quote,
  ArrowLeft,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Age-appropriate drug awareness curriculum and mental health first aid training for educators and students.",
    audience: "Students, Teachers, Counselors",
    features: [
      "Interactive workshops for students",
      "Teacher training on early warning signs",
      "Peer support program development",
      "Mental health first aid certification"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description: "Workplace wellness programs focusing on stress management, substance abuse prevention, and employee mental health.",
    audience: "HR Teams, Employees, Executives",
    features: [
      "Executive wellness briefings",
      "Employee assistance program setup",
      "Stress management workshops",
      "Drug-free workplace policy development"
    ]
  },
  {
    icon: Users,
    title: "NGOs & Community Groups",
    description: "Community-based prevention programs designed to build local capacity and support networks.",
    audience: "Community Leaders, Volunteers",
    features: [
      "Train-the-trainer programs",
      "Community mobilization strategies",
      "Support group facilitation training",
      "Outreach program development"
    ]
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description: "Policy-aligned training programs for government agencies and public institutions across Nigeria.",
    audience: "Civil Servants, Policy Makers",
    features: [
      "Policy development workshops",
      "Institutional capacity building",
      "Inter-agency coordination training",
      "Public awareness campaign design"
    ]
  },
];

const reviews = [
  {
    name: "Dr. Amina Bello",
    role: "Principal, Federal Government College Abuja",
    content: "The training program transformed our approach to student mental health. Our teachers are now equipped to identify and support students struggling with substance abuse.",
    rating: 5
  },
  {
    name: "Chinedu Okafor",
    role: "HR Director, Sterling Bank",
    content: "DovesMind's corporate wellness program has significantly improved employee wellbeing and reduced absenteeism. A worthwhile investment for any organization.",
    rating: 5
  },
  {
    name: "Hajiya Fatima Yusuf",
    role: "Executive Director, Youth Empowerment Foundation",
    content: "Their community-focused approach helped us establish sustainable support networks in three local government areas. Highly recommended for NGOs.",
    rating: 5
  },
  {
    name: "Barr. Emeka Nwankwo",
    role: "Ministry of Health, Enugu State",
    content: "Professional, thorough, and culturally sensitive. The policy workshop helped us develop a comprehensive state-level drug prevention strategy.",
    rating: 5
  },
];

const TrainingProgramsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    programType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.organization,
          message: `[Training Program Inquiry - ${formData.programType}]\n\nOrganization: ${formData.organization}\n\n${formData.message}`
        },
      });

      if (error) throw error;

      toast({
        title: "Request submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        programType: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to submit",
        description: "Please try again or contact us directly.",
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
              Training Programs
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              Empowering institutions across Nigeria with evidence-based drug abuse prevention 
              and mental health awareness programs tailored to their specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Programs Section */}
      <section id="about" className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Each program is customized to address the unique challenges and needs of your institution, 
              delivered by certified professionals with extensive field experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border shadow-sm"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-dove-teal/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-dove-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-card-foreground">{program.title}</h3>
                      <p className="text-sm text-accent">For: {program.audience}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-card-foreground">
                        <CheckCircle className="h-5 w-5 text-dove-teal flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Partners Say
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Hear from institutions that have benefited from our training programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="h-10 w-10 text-dove-teal/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-dove-gold text-dove-gold" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic">"{review.content}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Request a Training Program
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and our team will reach out to discuss your institution's needs.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name *</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organization"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="programType">Program Type *</Label>
                  <select
                    id="programType"
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="Schools & Universities">Schools & Universities</option>
                    <option value="Corporate Organizations">Corporate Organizations</option>
                    <option value="NGOs & Community Groups">NGOs & Community Groups</option>
                    <option value="Government & Institutions">Government & Institutions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization's needs, expected number of participants, preferred dates, etc."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-dove-teal hover:bg-dove-teal/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingProgramsPage;
