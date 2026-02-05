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
import { Typewriter } from "@/components/ui/typewriter";

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

  /* New Conversational Onboarding and Chat Interface */

  // State for conversational onboarding
  const [onboardingStep, setOnboardingStep] = useState<"name" | "email" | "completed">("name");

  // ... (keep existing effects) ...

  const handleOnboardingSubmit = () => {
    if (!inputValue.trim()) return;

    if (onboardingStep === "name") {
      if (inputValue.trim().length < 2) {
        setFormErrors({ ...formErrors, name: "Please enter a valid message" });
        return;
      }
      setFormData(prev => ({ ...prev, name: inputValue.trim() }));
      setInputValue("");
      setOnboardingStep("email");
    } else if (onboardingStep === "email") {
      const email = inputValue.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast({
          variant: "destructive",
          title: "Invalid Email",
          description: "Please enter a valid email address.",
        });
        return;
      }
      setFormData(prev => ({ ...prev, email }));
      setInputValue("");

      // Complete onboarding
      const info = { name: formData.name, email };
      setUserInfo(info);
      setUserContext(info);
      setOnboardingStep("completed");
      toast({
        title: `Welcome, ${info.name}!`,
        description: "You can now start chatting with DovesMind AI.",
      });
    }
  };

  const currentOnboardingStepHandler = () => {
    // Wrapper to handle Enter key for onboarding vs normal chat
    if (!userInfo) {
      handleOnboardingSubmit();
    } else {
      handleSend();
    }
  }

  // ... (render) ...

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
            className="fixed inset-0 bg-background z-50 flex flex-col h-[100dvh]" // Use 100dvh for mobile browsers
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-dove-teal p-4 md:p-6 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">DovesMind AI</p>
                  <p className="text-sm text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {userInfo ? (isLoading ? "Thinking..." : "Online") : "Online"}
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

            {/* Chat Area (Used for both Onboarding and Real Chat) */}
            <ScrollArea className="flex-1 p-4 md:p-8 bg-secondary/30" ref={scrollRef}>
              <div className="max-w-2xl mx-auto space-y-4">
                {/* Onboarding Messages */}
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card text-foreground rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
                    <p className="mb-2 font-semibold text-dove-teal">DovesMind AI</p>
                    <div className="prose prose-sm dark:prose-invert">
                      <Typewriter text="Hi! I'm Dovesmind. Before we start, can I know your name?" speed={30} />
                    </div>
                  </div>
                </motion.div>

                {/* User Name (if entered) */}
                {formData.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end"
                  >
                    <div className="bg-dove-teal text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-[85%]">
                      <p>{formData.name}</p>
                    </div>
                  </motion.div>
                )}

                {/* Ask Email (if Name entered) */}
                {formData.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-card text-foreground rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
                      <p className="mb-2 font-semibold text-dove-teal">DovesMind AI</p>
                      <div className="prose prose-sm dark:prose-invert">
                        <Typewriter text={`Nice to meet you, ${formData.name}! Could you please share your email address so we can stay in touch?`} speed={30} delay={500} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* User Email (if entered) */}
                {/* Note: Once email is entered, 'userInfo' becomes true and we switch to 'messages' map. 
                        However, we might want to keep showing the onboarding history? 
                        The original code used 'messages' from 'useDovesMindChat'. 
                        To keep it simple, we will switch to main chat view once authorized, 
                        BUT the 'messages' array in 'useDovesMindChat' starts empty.
                        So the screen will clear. This might be jarring.
                        Ideally, we should inject these messages into the hook or just render them above.
                    */}

                {/* If we are fully authenticated (userInfo exists), show strict Chat History */}
                {userInfo && messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-2xl p-4 max-w-[85%] shadow-sm ${msg.role === "user"
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
                    <div className="bg-card text-foreground rounded-2xl rounded-tl-sm p-4 shadow-sm">
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

            {/* Input Area */}
            <div className="p-4 md:p-6 border-t border-border bg-card flex-shrink-0">
              <div className="max-w-2xl mx-auto flex items-center gap-3">
                <input
                  ref={inputRef}
                  type={onboardingStep === "email" && !userInfo ? "email" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      currentOnboardingStepHandler();
                    }
                  }}
                  placeholder={
                    !userInfo
                      ? (onboardingStep === "name" ? "Type your name..." : "Type your email...")
                      : "Type your message..."
                  }
                  disabled={isLoading}
                  autoFocus
                  className="flex-1 bg-secondary rounded-xl px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50"
                />
                <Button
                  size="icon"
                  onClick={currentOnboardingStepHandler}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-dove-teal hover:bg-dove-teal/90 rounded-xl h-14 w-14 disabled:opacity-50 transition-all"
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
