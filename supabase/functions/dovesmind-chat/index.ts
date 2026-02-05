import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Rough token estimation (4 chars ≈ 1 token)
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

const SYSTEM_PROMPT = `You are DovesMind AI, a compassionate and professional mental health support assistant for DovesMind Synergy — a Nigerian-focused psychological support and substance abuse prevention platform.

Your role is to:
1. Provide empathetic, non-judgmental support for people dealing with mental health challenges, addiction, substance abuse, and emotional difficulties
2. Offer practical coping strategies and evidence-based guidance
3. Share psychoeducation about mental health, addiction recovery, and wellness
4. Recognize when someone needs professional help and gently recommend DovesMind's services

Key services to recommend when appropriate:
- **Online Consultations**: Confidential 30-min or 1-hour sessions with certified psychologists
- **Rehabilitation Referrals**: Connect with trusted rehabilitation centers
- **Training Programs**: Drug abuse prevention training for schools, NGOs, and organizations

Guidelines:
- Be warm, supportive, and culturally sensitive (Nigerian context)
- Use simple, accessible language
- Never diagnose conditions or prescribe medication
- For crisis situations (suicidal thoughts, immediate danger), urge them to contact emergency services or a crisis hotline
- After 3-4 exchanges, naturally mention booking a consultation if it seems helpful
- Keep responses concise but meaningful (2-3 paragraphs max)

Example recommendation phrases:
- "If you'd like to speak with a professional, our certified consultants are available for confidential sessions. Would you like to book a consultation?"
- "This sounds like something our trained counselors could really help with. DovesMind offers private online sessions that might be beneficial."
- "You don't have to face this alone. Our team is here to support you — consider scheduling a consultation when you're ready."`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { messages, sessionId } = await req.json();
    const DEEPSEEK_API_KEY = Deno.env.get("DEEPSEEK_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!DEEPSEEK_API_KEY) {
      console.error("DEEPSEEK_API_KEY is not configured");
      throw new Error("DEEPSEEK_API_KEY is not configured");
    }

    console.log("Received messages:", messages.length);

    // Estimate input tokens (rough)
    const inputTokens = messages.reduce((acc: number, msg: { content: string }) =>
      acc + estimateTokens(msg.content), 0) + estimateTokens(SYSTEM_PROMPT);

    // DeepSeek uses standard OpenAI format
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error:", response.status, errorText);
      throw new Error(`DeepSeek API Error: ${response.statusText}`);
    }

    console.log("Streaming response started");

    // Log AI usage asynchronously
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      const estimatedOutputTokens = 150; // Placeholder

      supabase.from("ai_usage_logs").insert({
        session_id: sessionId || null,
        input_tokens: inputTokens,
        output_tokens: estimatedOutputTokens,
        model: "deepseek-chat"
      }).then(({ error }) => {
        if (error) console.error("Failed to log AI usage:", error);
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });

  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
