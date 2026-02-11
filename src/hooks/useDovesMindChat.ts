import { useState, useCallback, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface UserContext {
  name: string;
  email: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dovesmind-chat`;

export const useDovesMindChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContextState] = useState<UserContext | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const { toast } = useToast();

  const saveSession = useCallback(async (msgs: Message[], explicitContext?: UserContext) => {
    const contextToUse = explicitContext || userContext;
    if (!contextToUse) return;

    // Convert messages to JSON-compatible format
    const messagesJson = JSON.parse(JSON.stringify(msgs));

    try {
      if (sessionIdRef.current) {
        // Update existing session
        await supabase
          .from("chat_sessions")
          .update({ messages: messagesJson })
          .eq("id", sessionIdRef.current);
      } else {
        // Create new session
        const { data, error } = await supabase
          .from("chat_sessions")
          .insert([{
            name: contextToUse.name,
            email: contextToUse.email,
            messages: messagesJson,
          }])
          .select("id")
          .single();

        if (!error && data) {
          sessionIdRef.current = data.id;
        }
      }
    } catch (error) {
      console.error("Failed to save chat session:", error);
    }
  }, [userContext]);

  const setUserContext = useCallback((context: UserContext) => {
    setUserContextState(context);
    sessionIdRef.current = null; // Reset session for new user
    // Set personalized welcome message
    const welcomeMsg: Message = {
      role: "assistant",
      content: `Hello ${context.name}! I'm DovesMind AI, your mental health support companion. I'm here to listen, provide guidance, and connect you with professional help when needed. How are you feeling today?`,
    };
    const initialMessages = [welcomeMsg];
    setMessages(initialMessages);

    // Persist immediately so admin gets details
    saveSession(initialMessages, context);
  }, [saveSession]);

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    let assistantContent = "";

    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2].role === "user") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantContent } : m));
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    try {
      console.log("Sending message to:", CHAT_URL);

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          userContext: userContext ? { name: userContext.name, email: userContext.email } : null,
          sessionId: sessionIdRef.current
        }),
      });

      console.log("Response status:", resp.status);

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({ error: "Unknown error" }));
        console.error("API Error:", errorData);
        console.error("API Error Details:", JSON.stringify(errorData, null, 2));

        // Show detailed error for debugging
        const errorMessage = errorData.details || errorData.error || "Failed to connect";

        toast({
          variant: "destructive",
          title: `API Error (${resp.status})`,
          description: errorMessage.substring(0, 200), // Truncate long errors
        });

        throw new Error(errorMessage);
      }

      if (!resp.body) {
        throw new Error("No response body");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) updateAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Final flush
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) updateAssistant(content);
          } catch { /* ignore */ }
        }
      }

      // Save session after successful response
      setMessages((currentMessages) => {
        saveSession(currentMessages);
        return currentMessages;
      });

    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble responding right now. Please try again in a moment, or feel free to contact our team directly for support.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, userContext, toast, saveSession]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setUserContextState(null);
    sessionIdRef.current = null;
  }, []);

  return { messages, isLoading, sendMessage, clearChat, setUserContext };
};
