import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { 
    label: "1 in 4 Adults", 
    description: "Globally will be affected by mental or neurological disorders at some point in their lives. This statistic from the World Health Organization highlights the universal nature of mental health challenges—no family, community, or nation is immune.",
    source: "World Health Organization (WHO)"
  },
  { 
    label: "275 Million People", 
    description: "Worldwide suffer from drug use disorders, with numbers rising annually. Substance abuse doesn't discriminate—it affects people of all ages, backgrounds, and socioeconomic status. Early intervention and community support are critical to reversing this trend.",
    source: "United Nations Office on Drugs and Crime (UNODC)"
  },
  { 
    label: "Early Intervention", 
    description: "Can reduce substance abuse relapse rates by up to 50%. Studies consistently show that individuals who receive timely psychological support and professional guidance have significantly better long-term recovery outcomes.",
    source: "National Institute on Drug Abuse"
  },
  { 
    label: "14.5% of Nigerians", 
    description: "Between ages 15-64 have used drugs in the past year according to UNODC reports. This means approximately 1 in 7 Nigerian adults has been exposed to substance use, making prevention programs crucial for our communities.",
    source: "UNODC Nigeria Drug Use Survey"
  },
  { 
    label: "Only 10%", 
    description: "Of people with substance use disorders receive any form of treatment globally. This treatment gap represents millions of individuals and families who need support but cannot access it. DovesMind Synergy is working to close this gap in Nigeria.",
    source: "World Drug Report 2023"
  },
];

const Statistics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Title and FAQ stats */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
              The Reality of Drug<br />
              Abuse & Mental Health
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {stats.map((stat, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline py-4 group">
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {stat.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p className="leading-relaxed mb-2">{stat.description}</p>
                    <p className="text-xs text-accent">Source: {stat.source}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
      </div>
    </section>
  );
};

export default Statistics;