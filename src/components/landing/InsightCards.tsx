import insightCard1 from "@/assets/insight-card-1.jpg";
import insightCard2 from "@/assets/insight-card-2.jpg";
import insightCard3 from "@/assets/insight-card-3.jpg";
import insightCard4 from "@/assets/insight-card-4.jpg";
import insightCard5 from "@/assets/insight-card-5.jpg";

const cards = [
  { image: insightCard1, text: "Healthy Habits Boost Mental Health", accent: false },
  { image: insightCard2, text: "Did You Know Substance Abuse Affects Mental Health?", accent: true },
  { image: insightCard3, text: "How Common are Substance Use Challenges?", accent: false },
  { image: insightCard4, text: "Early Intervention Matters", accent: false },
  { image: insightCard5, text: "Connection is Crucial", accent: true },
];

const InsightCards = () => {
  // Duplicate cards for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <section className="py-16 bg-dove-teal overflow-hidden">
      {/* Marquee container */}
      <div className="relative">
        <div className="flex animate-marquee gap-6">
          {allCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-52 md:w-64 rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  card.accent 
                    ? "from-dove-lime/90 via-dove-lime/20 to-transparent" 
                    : "from-black/80 via-black/20 to-transparent"
                }`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className={`text-sm md:text-base font-semibold leading-tight ${
                    card.accent ? "text-dove-teal" : "text-white"
                  }`}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightCards;
