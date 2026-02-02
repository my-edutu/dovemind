import { Button } from "@/components/ui/button";
import { Bot, X, Send, RotateCcw, Calendar, User, Mail } from "lucide-react";
import { useChatbot } from "@/contexts/ChatbotContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useDovesMindChat } from "@/hooks/useDovesMindChat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactMarkdown from "react-markdown";
import { useToast } from "@/hooks/use-toast";

interface UserInfo {
  name: string;
  email: string;
}

const ChatbotWidget = () => {
  const { isOpen, openChat, closeChat } = useChatbot();
  const [showButton, setShowButton] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingDismissed, setGreetingDismissed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "" });
  const { messages, isLoading, sendMessage, clearChat, setUserContext } = useDovesMindChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerVisible = footer 
        ? footer.getBoundingClientRect().top < window.innerHeight - 100
        : false;
      
      const shouldShow = window.scrollY > 400 && !footerVisible;
      setShowButton(shouldShow);
      
      // Show greeting after button appears (with delay), only if not dismissed
      if (shouldShow && !greetingDismissed) {
        setTimeout(() => setShowGreeting(true), 1500);
      } else {
        setShowGreeting(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [greetingDismissed]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && userInfo && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, userInfo]);

  const validateForm = () => {
    const errors = { name: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleStartChat = () => {
    if (validateForm()) {
      const info = { name: formData.name.trim(), email: formData.email.trim() };
      setUserInfo(info);
      setUserContext(info);
      toast({
        title: `Welcome, ${info.name}!`,
        description: "You can now start chatting with DovesMind AI.",
      });
    }
  };

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFormKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleStartChat();
    }
  };

  const scrollToContact = () => {
    closeChat();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleNewChat = () => {
    clearChat();
    setUserInfo(null);
    setFormData({ name: "", email: "" });
    setFormErrors({ name: "", email: "" });
  };

  const handleOpenChat = () => {
    setGreetingDismissed(true);
    setShowGreeting(false);
    openChat();
  };

  return (
    <>
      {/* Floating Chat Button with Greeting */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-40 flex items-end gap-3"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Greeting Popup */}
            <AnimatePresence>
              {showGreeting && !greetingDismissed && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card shadow-lg rounded-2xl rounded-br-sm p-4 max-w-[200px] border border-border cursor-pointer"
                  onClick={handleOpenChat}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setGreetingDismissed(true);
                      setShowGreeting(false);
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  <p className="text-sm font-medium text-foreground">
                    Hi! I'm <span className="text-dove-teal">DovesMind AI</span> 👋
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    How can I help you today?
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button
              onClick={handleOpenChat}
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
                    {isLoading ? "Thinking..." : "Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {userInfo && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20 h-10 w-10"
                    onClick={handleNewChat}
                    title="New conversation"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-10 w-10"
                  onClick={closeChat}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Pre-Chat Form or Chat Interface */}
            {!userInfo ? (
              /* Pre-Chat Form */
              <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-secondary/30">
                <motion.div
                  className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-lg border border-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-dove-teal/10 flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8 text-dove-teal" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Welcome to DovesMind AI
                    </h2>
                    <p className="text-muted-foreground">
                      To provide you with personalized support, please share your details below.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="chat-name" className="text-foreground">
                        Your Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="chat-name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onKeyDown={handleFormKeyDown}
                          className="pl-10"
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-sm text-destructive">{formErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chat-email" className="text-foreground">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="chat-email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onKeyDown={handleFormKeyDown}
                          className="pl-10"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-sm text-destructive">{formErrors.email}</p>
                      )}
                    </div>

                    <Button
                      onClick={handleStartChat}
                      className="w-full bg-dove-teal hover:bg-dove-teal/90 text-white font-semibold py-6"
                    >
                      Start Chatting
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your information is kept confidential and secure. We respect your privacy.
                    </p>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Chat Interface */
              <>
                {/* Messages */}
                <ScrollArea className="flex-1 p-4 md:p-8 bg-secondary/30" ref={scrollRef}>
                  <div className="max-w-2xl mx-auto space-y-4">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`rounded-2xl p-4 max-w-[85%] shadow-sm ${
                            msg.role === "user"
                              ? "bg-dove-teal text-white rounded-tr-sm"
                              : "bg-card text-foreground rounded-tl-sm"
                          }`}
                        >
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown
                              components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                                li: ({ children }) => <li className="mb-1">{children}</li>,
                                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                              }}
                            >
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && messages[messages.length - 1]?.role === "user" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-card rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-dove-teal rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-dove-teal rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-dove-teal rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                {/* Quick Action */}
                <div className="px-4 md:px-6 py-2 border-t border-border bg-card">
                  <div className="max-w-2xl mx-auto">
                    <button
                      onClick={scrollToContact}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Calendar className="h-4 w-4" />
                      Book a consultation with our experts
                    </button>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 md:p-6 border-t border-border bg-card">
                  <div className="max-w-2xl mx-auto flex items-center gap-3">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1 bg-secondary rounded-xl px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50"
                    />
                    <Button
                      size="icon"
                      onClick={handleSend}
                      disabled={isLoading || !inputValue.trim()}
                      className="bg-dove-teal hover:bg-dove-teal/90 rounded-xl h-14 w-14 disabled:opacity-50"
                    >
                      <Send className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
