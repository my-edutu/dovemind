import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PersonalizedServices = () => {
  return (
    <section className="relative section-padding bg-gradient-to-br from-dove-teal-dark via-dove-teal to-dove-teal-light overflow-hidden">
      {/* Wave divider top */}
      <div className="wave-divider wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-secondary/50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      {/* Wave divider bottom */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      {/* Abstract blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-20 left-20 w-64 h-64 bg-accent/10 blur-3xl" />
        <div className="blob absolute bottom-20 right-20 w-80 h-80 bg-accent/5 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Tailored For You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Personalized Psychological Services You Can Trust
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Our services are designed to provide confidential psychological consultation, 
            clear next-step guidance, and prevention programs rooted in ethics and professionalism.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedServices;
