const stats = [
  { 
    label: "1 in 4 Adults", 
    description: "globally will be affected by mental or neurological disorders at some point in their lives."
  },
  { 
    label: "275 Million People", 
    description: "worldwide suffer from drug use disorders, with numbers rising annually."
  },
  { 
    label: "Early Intervention", 
    description: "can reduce substance abuse relapse rates by up to 50%, highlighting the importance of timely support."
  },
  { 
    label: "14.5% of Nigerians", 
    description: "between ages 15-64 have used drugs in the past year according to UNODC reports."
  },
  { 
    label: "Only 10%", 
    description: "of people with substance use disorders receive any form of treatment globally."
  },
];

const Statistics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Title and stats list */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
              The Reality of Drug<br />
              Abuse & Mental Health
            </h2>
            
            <div className="space-y-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between py-4 border-b border-border group cursor-pointer hover:border-accent transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{stat.label}</p>
                    {stat.description && (
                      <p className="text-sm text-muted-foreground mt-1 max-w-sm leading-relaxed">
                        {stat.description}
                      </p>
                    )}
                  </div>
                  <span className="text-muted-foreground group-hover:text-accent transition-colors ml-4 mt-1">›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Description and stat cards */}
          <div>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              These statistics reveal the urgent need for substance abuse prevention 
              and mental health support. When communities come together, we can identify 
              those at risk and provide life-changing intervention.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* First row */}
              <div className="bg-secondary rounded-2xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">1 in 4</p>
                <p className="text-xs text-muted-foreground mt-1">Adults Affected</p>
              </div>
              <div className="bg-secondary rounded-2xl p-5 text-center col-span-2">
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  275M <span className="text-base font-normal text-muted-foreground">Suffer Drug Disorders</span>
                </p>
              </div>

              {/* Second row - highlight card */}
              <div className="bg-accent rounded-2xl p-5 text-center col-span-3">
                <p className="text-2xl md:text-3xl font-bold text-accent-foreground">
                  50% <span className="text-base font-normal">Relapse Reduction with Early Help</span>
                </p>
              </div>

              {/* Third row */}
              <div className="bg-secondary rounded-2xl p-5 text-center col-span-2">
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  14.5% <span className="text-base font-normal text-muted-foreground">of Nigerians Use Drugs</span>
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">90%</p>
                <p className="text-xs text-muted-foreground mt-1">Untreated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand logos */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-muted-foreground/50">
            <span className="font-medium text-sm">◆ Dmarket</span>
            <span className="font-medium text-sm">M MasterControl</span>
            <span className="font-medium text-sm">Wimo</span>
            <span className="font-medium text-sm">ESCROW.COM</span>
            <span className="font-medium text-sm">TOSHIBA</span>
            <span className="font-medium text-sm">✦ doroki</span>
            <span className="font-medium text-sm">solarEDGE</span>
            <span className="font-medium text-sm">○ Pebble</span>
            <span className="font-medium text-sm">Komputronik</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
