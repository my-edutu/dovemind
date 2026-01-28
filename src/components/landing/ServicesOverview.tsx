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
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive psychological support tailored to your unique needs
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="consultation" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-transparent p-0 mb-8">
            <TabsTrigger
              value="consultation"
              className="data-[state=active]:bg-dove-teal data-[state=active]:text-primary-foreground bg-card border border-border py-4 px-6 rounded-xl text-sm font-medium"
            >
              Psychological Consultation
            </TabsTrigger>
            <TabsTrigger
              value="referral"
              className="data-[state=active]:bg-dove-teal data-[state=active]:text-primary-foreground bg-card border border-border py-4 px-6 rounded-xl text-sm font-medium"
            >
              Rehabilitation Referral
            </TabsTrigger>
            <TabsTrigger
              value="training"
              className="data-[state=active]:bg-dove-teal data-[state=active]:text-primary-foreground bg-card border border-border py-4 px-6 rounded-xl text-sm font-medium"
            >
              Training & Prevention
            </TabsTrigger>
          </TabsList>

          <TabsContent value="consultation" className="mt-0">
            <div className="bg-card rounded-2xl p-8 border border-border">
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
                      <li key={i} className="flex items-center gap-3 text-card-foreground">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={consultationImg} 
                    alt="Professional psychological consultation session" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="referral" className="mt-0">
            <div className="bg-card rounded-2xl p-8 border border-border">
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
                      <li key={i} className="flex items-center gap-3 text-card-foreground">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={rehabilitationImg} 
                    alt="Trusted rehabilitation center facility" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="training" className="mt-0">
            <div className="bg-card rounded-2xl p-8 border border-border">
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
                      <li key={i} className="flex items-center gap-3 text-card-foreground">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={trainingImg} 
                    alt="Drug abuse prevention training workshop" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Floating CTA */}
        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Talk to a Psychologist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;