import { useCallback, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface UserContext {
  name: string;
  email: string;
}

// Temporary local chat fallback while the hosted AI function is unavailable.
export const useDovesMindChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContextState] = useState<UserContext | null>(null);

  const setUserContext = useCallback((context: UserContext) => {
    setUserContextState(context);
    setMessages([
      {
        role: "assistant",
        content: `Hello ${context.name}! I'm here to listen and help connect you with professional support. Share what is on your mind, and a therapist from DovesMind can follow up with you.`,
      },
    ]);
  }, []);

  const sendMessage = useCallback(async (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", content: trimmedInput },
    ]);
    setIsLoading(true);

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "Thank you for sharing that. A DovesMind therapist is available to support you. Use the button below to send your message to our team through Gmail, and someone will get back to you as soon as possible.",
        },
      ]);
      setIsLoading(false);
    }, 450);
  }, [isLoading]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setUserContextState(null);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
    setUserContext,
    userContext,
  };
};
