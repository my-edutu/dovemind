import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate input lengths (server-side validation)
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      console.error("Input too long");
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing contact request from:", email);

    // 1. Save to Supabase Database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone,
          message,
          type: message.includes("[") ? message.split("]")[0].replace("[", "") : "General Contact",
          status: "new"
        }
      ]);

    if (dbError) {
      console.error("Database insert error:", dbError);
      // We continue to send email even if DB fails, or should we fail?
      // Let's log it but try to send email as backup.
    }

    // 2. Send email to DovesMind team
    const { error: sendError } = await resend.emails.send({
      from: "DovesMind Contact <onboarding@resend.dev>",
      to: ["dovesmindsynergy@gmail.com"],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #006D77, #83C5BE); padding: 30px; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #006D77; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 12px 15px; border-radius: 8px; border-left: 4px solid #006D77; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #83C5BE; white-space: pre-wrap; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">Phone</span>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Message</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the DovesMind Synergy contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      throw new Error(sendError.message);
    }

    // 3. Send confirmation email to the user (Keep existing logic)
    await resend.emails.send({
      from: "DovesMind Synergy <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting DovesMind Synergy",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #006D77, #83C5BE); padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px; }
            .greeting { font-size: 18px; margin-bottom: 20px; }
            .message { margin-bottom: 20px; }
            .cta { background: #006D77; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 10px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🕊️ DovesMind Synergy</h1>
            </div>
            <div class="content">
              <p class="greeting">Dear ${name},</p>
              <p class="message">
                Thank you for reaching out to DovesMind Synergy. We have received your message and our team will get back to you within 24-48 hours.
              </p>
              <p class="message">
                In the meantime, if you need immediate support, you can chat with our AI assistant on our website or call our helpline.
              </p>
              <p class="message">
                <strong>Your well-being matters to us.</strong>
              </p>
              <p style="margin-top: 30px;">
                Warm regards,<br>
                <strong>The DovesMind Synergy Team</strong>
              </p>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} DovesMind Synergy. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact submission processed successfully");

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send message" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
