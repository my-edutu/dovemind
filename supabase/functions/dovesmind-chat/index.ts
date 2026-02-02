import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response started");

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
