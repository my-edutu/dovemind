import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20">
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

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-dove-teal text-primary-foreground hover:bg-dove-teal-light font-semibold text-base px-8 py-6 rounded-full"
            >
              Consultation Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Tilted Cards Section */}
        <div className="relative mt-8 mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex justify-center items-end gap-4 md:gap-6 px-4">
            {cards.map((card, index) => {
              // Create varying rotations and vertical offsets for organic look
              const rotations = [-12, -6, 0, 6, 12];
              const offsets = [20, 10, 0, 10, 20];
              
              return (
                <div
                  key={index}
                  className="relative flex-shrink-0 group cursor-pointer transition-all duration-300 hover:z-10"
                  style={{
                    transform: `rotate(${rotations[index]}deg) translateY(${offsets[index]}px)`,
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

          {/* Watch The Video Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="bg-dove-teal text-primary-foreground hover:bg-dove-teal-light border-none font-semibold rounded-full px-6 py-5"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch The Video
            </Button>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-secondary">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
