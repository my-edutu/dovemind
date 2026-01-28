import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot, X, Send, MessageSquare } from "lucide-react";

const ChatbotWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-dove-teal p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">DovesMind AI</p>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="p-4 h-72 overflow-y-auto bg-secondary/30">
            <div className="space-y-4">
              <div className="bg-card rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                <p className="text-sm text-foreground">
                  Hello! I'm DovesMind AI, your mental health assistant. How can I support you today?
                </p>
              </div>
              <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                <p className="text-sm text-muted-foreground">
                  You can ask me about coping strategies, mental health resources, or connect with a professional.
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Button
                size="icon"
                className="bg-dove-teal hover:bg-dove-teal/90 rounded-xl h-11 w-11"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-muted hover:bg-muted/80 text-foreground"
            : "bg-dove-teal hover:bg-dove-teal/90 text-white"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatbotWidget;
