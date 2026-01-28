import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, AlertTriangle, Shield } from "lucide-react";

const insights = [
  {
    icon: Brain,
    title: "Understanding Substance Abuse & Mental Health",
    description: "Learn about the connection between mental health and substance use disorders.",
    featured: false,
  },
  {
    icon: AlertTriangle,
    title: "Why Early Psychological Intervention Matters",
    description: "Early support can prevent escalation and improve long-term outcomes.",
    featured: false,
  },
  {
    icon: Heart,
    title: "Supporting a Loved One Through Recovery",
    description: "Practical guidance for families and caregivers during the recovery journey.",
    featured: false,
  },
  {
    icon: Users,
    title: "Mental Health & Stigma Awareness",
    description: "Breaking down barriers and misconceptions about seeking help.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Prevention Saves Lives",
    description: "Proactive prevention programs create lasting change in communities.",
    featured: true,
  },
];

const InsightCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Awareness & Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mental Health Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore key topics in psychological wellness and substance abuse prevention
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card
                key={index}
                className={`card-hover cursor-pointer overflow-hidden ${
                  insight.featured
                    ? "bg-accent text-accent-foreground border-accent lg:col-span-1"
                    : "bg-card hover:border-accent/50"
                }`}
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      insight.featured
                        ? "bg-accent-foreground/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        insight.featured ? "text-accent-foreground" : "text-accent"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      insight.featured ? "text-accent-foreground" : "text-card-foreground"
                    }`}
                  >
                    {insight.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      insight.featured
                        ? "text-accent-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightCards;
