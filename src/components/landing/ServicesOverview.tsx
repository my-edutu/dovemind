import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import consultationImg from "@/assets/service-consultation.jpg";
import rehabilitationImg from "@/assets/service-rehabilitation.jpg";
import trainingImg from "@/assets/service-training.jpg";

const ServicesOverview = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
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
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive psychological support tailored to your unique needs
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-transparent p-0 mb-8">
              {["consultation", "referral", "training"].map((tab, i) => (
                <motion.div key={tab} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <TabsTrigger
                    value={tab}
                    className="w-full data-[state=active]:bg-dove-teal data-[state=active]:text-primary-foreground bg-card border border-border py-4 px-6 rounded-xl text-sm font-medium"
                  >
                    {tab === "consultation" && "Psychological Consultation"}
                    {tab === "referral" && "Rehabilitation Referral"}
                    {tab === "training" && "Training & Prevention"}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            <TabsContent value="consultation" className="mt-0">
              <motion.div 
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      One-on-One Psychological Consultation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with certified psychologists for confidential, personalized support. 
                      Our sessions are designed to help you navigate challenges and build coping strategies.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Confidential online consultations",
                        "Certified and experienced psychologists",
                        "Personalized coping strategies",
                        "Secure booking and payment",
                      ].map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-card-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={consultationImg} 
                      alt="Professional psychological consultation session" 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="referral" className="mt-0">
              <motion.div 
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      Rehabilitation Referral Guidance
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We connect you with trusted rehabilitation centers and provide guidance 
                      for families navigating the recovery process.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Professional assessment and evaluation",
                        "Trusted rehabilitation center referrals",
                        "Family guidance and support",
                        "Clear next steps and follow-up",
                      ].map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-card-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={rehabilitationImg} 
                      alt="Trusted rehabilitation center facility" 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="training" className="mt-0">
              <motion.div 
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      Training & Prevention Programs
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive drug abuse awareness and prevention training for institutions, 
                      organizations, and communities.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Schools and educational institutions",
                        "Corporate organizations",
                        "NGOs & government bodies",
                        "Community awareness programs",
                      ].map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-card-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={trainingImg} 
                      alt="Drug abuse prevention training workshop" 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Floating CTA */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to a Psychologist
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
