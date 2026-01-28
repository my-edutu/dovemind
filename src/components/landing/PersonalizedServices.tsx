import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PersonalizedServices = () => {
  return (
    <section className="relative bg-dove-teal py-16 md:py-24 overflow-hidden">
      {/* Decorative wavy lines */}
      <div className="absolute top-4 left-4 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M20,30 Q35,15 35,35 Q35,55 55,55" />
          <path d="M10,50 Q25,35 25,55 Q25,75 45,75" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-20 h-20 opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M30,50 Q50,25 70,50 Q50,75 30,50" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-1/4 w-16 h-16 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent" fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M15,50 Q35,25 55,50 Q75,75 95,50" />
        </svg>
      </div>

      <div className="container-narrow relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6 italic leading-snug">
          Personalized Mental Health<br />
          Services for a Better You
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-primary-foreground/80 text-sm mb-3">
          <p className="flex items-center justify-center gap-2">
            <span className="text-accent">✦</span>
            Struggling with stress, anxiety, or emotional challenges?
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-accent">✦</span>
            Our certified professionals are here to help!
          </p>
        </div>
        
        <p className="text-primary-foreground/60 text-sm mb-8">
          Schedule your consultation now and take the first step towards a healthier mind.
        </p>

        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default PersonalizedServices;
