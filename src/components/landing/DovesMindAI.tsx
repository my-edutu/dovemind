import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get instant support anytime, anywhere"
  },
  {
    icon: Shield,
    title: "Confidential",
    description: "Your conversations are private and secure"
  },
  {
    icon: MessageSquare,
    title: "Compassionate Guidance",
    description: "Non-judgmental responses and resources"
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Personalized resources based on your needs"
  },
];

const DovesMindAI = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-accent/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-dove-teal/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Bot className="h-4 w-4" />
              Coming Soon
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              DovesMind AI
              <span className="block text-accent">Your Health Assistant</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              An intelligent, compassionate AI assistant designed to provide immediate support, 
              resources, and guidance for substance abuse challenges. Available 24/7 to listen, 
              inform, and connect you with professional help when needed.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-dove-teal text-primary-foreground hover:bg-dove-teal/90 font-semibold text-base px-8 py-6 rounded-xl"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right - Chat preview mockup */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border shadow-2xl p-6 max-w-md mx-auto">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-12 h-12 rounded-full bg-dove-teal flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">DovesMind AI</p>
                  <p className="text-xs text-accent flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Online
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                <div className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <p className="text-sm text-foreground">
                    Hello! I'm here to help. You can ask me anything about substance abuse, 
                    mental health resources, or coping strategies. How can I support you today?
                  </p>
                </div>
                
                <div className="bg-dove-teal rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto">
                  <p className="text-sm text-white">
                    I'm worried about a family member's drinking habits...
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <p className="text-sm text-foreground">
                    I understand this is a difficult situation. It's great that you want to help. 
                    Here are some resources for supporting a loved one, and I can connect you with 
                    a professional counselor if you'd like to discuss this further...
                  </p>
                </div>
              </div>

              {/* Input field mockup */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Type your message...</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DovesMindAI;