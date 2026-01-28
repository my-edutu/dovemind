import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Bot } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import insightCard1 from "@/assets/insight-card-1.jpg";
import insightCard2 from "@/assets/insight-card-2.jpg";
import insightCard3 from "@/assets/insight-card-3.jpg";
import insightCard4 from "@/assets/insight-card-4.jpg";
import insightCard5 from "@/assets/insight-card-5.jpg";

const cards = [
  { image: insightCard1, title: "Physical Activity Boosts Mental Health" },
  { image: insightCard2, title: "Did You Know That Sleep Can Affect Mental Health?" },
  { image: insightCard3, title: "How Common are Mental Health Issues?" },
  { image: insightCard4, title: "Early Intervention Matters" },
  { image: insightCard5, title: "Connection is Crucial" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Create a continuous arc pattern for smooth looping
  // 8-step cycle: down -> up -> down for seamless repeat
  const arcRotations = [-12, -8, -4, 0, 4, 8, 12, 8, 4, 0, -4, -8];
  const arcOffsets = [24, 16, 8, 0, 8, 16, 24, 16, 8, 0, 8, 16];
  
  // Duplicate cards multiple times for infinite loop
  const loopCards = isMobile 
    ? [...cards, ...cards, ...cards, ...cards] 
    : cards;
  
  return (
    <section className="relative bg-background pt-20 pb-0">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container-narrow relative z-10 pt-12 md:pt-20">
        {/* Main headline section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
            Find Balance in Your{" "}
            <span className="text-accent">Life</span> and{" "}
            <span className="text-accent">Mental Health.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Professional mental health services to help you manage stress, anxiety, and emotional challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-dove-teal text-primary-foreground hover:bg-dove-teal-light font-semibold text-base px-8 py-6 rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk with a Consultant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-semibold text-base px-8 py-6 rounded-full"
            >
              <Bot className="mr-2 h-5 w-5" />
              Chat with Dove AI
            </Button>
          </div>
        </div>
      </div>

      {/* Tilted Cards Section - Full width, overlapping next section */}
      <div className="relative z-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className={`flex items-end ${isMobile ? 'animate-marquee w-max' : 'justify-center gap-4 md:gap-6 px-4'}`}>
          {loopCards.map((card, index) => {
            // Use continuous arc pattern
            const arcIndex = index % arcRotations.length;
            const rotation = arcRotations[arcIndex];
            const offset = arcOffsets[arcIndex];
            
            return (
              <div
                key={index}
                className={`relative flex-shrink-0 group cursor-pointer transition-all duration-300 hover:z-30 ${isMobile ? 'mx-2' : ''}`}
                style={{
                  transform: `rotate(${rotation}deg) translateY(${offset}px)`,
                }}
              >
                <div className="relative w-32 sm:w-40 md:w-48 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 sm:h-52 md:h-64 object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
