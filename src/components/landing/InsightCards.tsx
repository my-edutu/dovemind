import { Play } from "lucide-react";
import insightCard1 from "@/assets/insight-card-1.jpg";
import insightCard2 from "@/assets/insight-card-2.jpg";
import insightCard3 from "@/assets/insight-card-3.jpg";
import insightCard4 from "@/assets/insight-card-4.jpg";
import insightCard5 from "@/assets/insight-card-5.jpg";

const InsightCards = () => {
  return (
    <section className="section-padding bg-dove-teal overflow-hidden">
      <div className="container-narrow">
        {/* Cards layout - scattered design */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          {/* Left side cards */}
          <div className="absolute left-0 top-0 md:top-8 z-10">
            <div className="relative w-40 md:w-52 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src={insightCard1}
                alt="Mental wellness"
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                  Healthy Habits Boost Mental Health
                </p>
              </div>
            </div>
          </div>

          {/* Second left card - Did you know */}
          <div className="absolute left-8 md:left-20 top-48 md:top-56 z-20">
            <div className="relative w-36 md:w-48 rounded-2xl overflow-hidden shadow-2xl bg-dove-lime transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={insightCard2}
                alt="Thoughtful awareness"
                className="w-full h-44 md:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dove-lime/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-dove-teal text-xs md:text-sm font-bold leading-tight">
                  Did You Know Substance Abuse Affects Mental Health?
                </p>
              </div>
            </div>
          </div>

          {/* Center main card - with video button */}
          <div className="relative z-30 mx-auto">
            <div className="relative w-44 md:w-64 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={insightCard3}
                alt="Connection and support"
                className="w-full h-52 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <p className="text-white text-sm md:text-base font-semibold mb-3 leading-tight">
                  How Common are Substance Use Challenges?
                </p>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="h-3 w-3 fill-current" />
                  Watch The Video
                </button>
              </div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="absolute right-8 md:right-20 top-0 md:top-4 z-20">
            <div className="relative w-36 md:w-48 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src={insightCard4}
                alt="Recovery and freedom"
                className="w-full h-44 md:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                  Early Intervention Matters
                </p>
              </div>
            </div>
          </div>

          {/* Far right card - Connection */}
          <div className="absolute right-0 top-48 md:top-52 z-10">
            <div className="relative w-40 md:w-52 rounded-2xl overflow-hidden shadow-2xl bg-dove-lime transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={insightCard5}
                alt="Family support"
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dove-teal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold leading-tight">
                  Connection is Crucial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightCards;
