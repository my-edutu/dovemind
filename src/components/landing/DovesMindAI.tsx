import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useChatbot } from "@/contexts/ChatbotContext";

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
  const isMobile = useIsMobile();
  const { openChat } = useChatbot();
  
  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-accent/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-48 h-48 bg-dove-teal/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container-narrow relative z-10">
        <div className={`${isMobile ? '' : 'grid lg:grid-cols-2 gap-12'} items-center`}>
          {/* Content */}
          <motion.div 
            className={isMobile ? 'text-center' : ''}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 ${isMobile ? 'mx-auto' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Bot className="h-4 w-4" />
              Coming Soon
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              DovesMind AI
              <motion.span 
                className="block text-accent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Your Health Assistant
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An intelligent, compassionate AI assistant designed to provide immediate support, 
              resources, and guidance for substance abuse challenges. Available 24/7 to listen, 
              inform, and connect you with professional help when needed.
            </motion.p>

            {!isMobile && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon className="h-5 w-5 text-accent" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className={`bg-dove-teal text-primary-foreground hover:bg-dove-teal/90 font-semibold text-base px-8 py-6 rounded-xl ${isMobile ? 'w-full' : ''}`}
                  onClick={openChat}
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Chat preview mockup (hidden on mobile) */}
          {!isMobile && (
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div 
                className="bg-card rounded-3xl border border-border shadow-2xl p-6 max-w-md mx-auto"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Chat header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-dove-teal flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bot className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-card-foreground">DovesMind AI</p>
                    <p className="text-xs text-accent flex items-center gap-1">
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      Online
                    </p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  <motion.div 
                    className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-[85%]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-foreground">
                      Hello! I'm here to help. You can ask me anything about substance abuse, 
                      mental health resources, or coping strategies. How can I support you today?
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-dove-teal rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-sm text-white">
                      I'm worried about a family member's drinking habits...
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-[85%]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <p className="text-sm text-foreground">
                      I understand this is a difficult situation. It's great that you want to help. 
                      Here are some resources for supporting a loved one, and I can connect you with 
                      a professional counselor if you'd like to discuss this further...
                    </p>
                  </motion.div>
                </div>

                {/* Input field mockup */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Type your message...</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DovesMindAI;
