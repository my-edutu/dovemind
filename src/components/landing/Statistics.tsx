import { Activity, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Activity,
    stat: "1 in 3",
    description: "individuals may experience mental health or substance-related challenges",
  },
  {
    icon: Clock,
    stat: "Early Intervention",
    description: "significantly improves recovery outcomes and long-term well-being",
  },
  {
    icon: TrendingUp,
    stat: "Prevention Programs",
    description: "reduce long-term social and health costs for communities",
  },
];

const Statistics = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            The Reality
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact & Awareness
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {item.stat}
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
