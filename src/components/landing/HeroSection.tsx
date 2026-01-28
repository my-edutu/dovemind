import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dove-teal-dark via-dove-teal to-dove-teal-light overflow-hidden pt-20">
      {/* Abstract organic shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-20 right-10 w-64 h-64 bg-accent/10 blur-3xl animate-float" />
        <div className="blob absolute bottom-32 left-10 w-80 h-80 bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="blob absolute top-1/2 right-1/4 w-48 h-48 bg-dove-teal-light/20 blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Wave divider at bottom */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Confidential & Professional Support
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Professional{" "}
            <span className="text-accent">Psychological Support</span> & Substance Abuse Prevention
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Confidential, ethical, and accessible mental health consultation, rehabilitation guidance, and prevention programs for individuals, families, and institutions across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 rounded-xl"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Training Programs
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Certified Psychologists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Ethical Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
