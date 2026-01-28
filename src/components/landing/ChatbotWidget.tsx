import { Button } from "@/components/ui/button";
import { Bot, X, Send } from "lucide-react";
import { useChatbot } from "@/contexts/ChatbotContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ChatbotWidget = () => {
  const { isOpen, openChat, closeChat } = useChatbot();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past ~400px (hero section height)
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={openChat}
              className="h-14 w-14 rounded-full bg-dove-teal hover:bg-dove-teal/90 shadow-lg"
            >
              <Bot className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-background z-50 flex flex-col"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-dove-teal p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">DovesMind AI</p>
                  <p className="text-sm text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-10 w-10"
                onClick={closeChat}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-secondary/30">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-card rounded-2xl rounded-tl-sm p-5 max-w-[85%] shadow-sm">
                  <p className="text-base text-foreground">
                    Hello! I'm DovesMind AI, your mental health assistant. How can I support you today?
                  </p>
                </div>
                <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-5 max-w-[85%] shadow-sm">
                  <p className="text-base text-muted-foreground">
                    You can ask me about coping strategies, mental health resources, or connect with a professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 md:p-6 border-t border-border bg-card">
              <div className="max-w-2xl mx-auto flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-secondary rounded-xl px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <Button
                  size="icon"
                  className="bg-dove-teal hover:bg-dove-teal/90 rounded-xl h-14 w-14"
                >
                  <Send className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
