import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactNotificationRequest = await req.json();

    console.log("Sending WhatsApp notification for:", { name, email });

    // Send WhatsApp notification
    const whatsappMessage = `🔔 *New Contact Form Submission*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n\n💬 *Message:*\n${message}`;
    
    const whatsappResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: `+${TWILIO_ACCOUNT_SID.slice(2)}`, // Use your Twilio phone number
        To: '+212680157997', // Your WhatsApp number (without whatsapp: prefix)
        Body: whatsappMessage,
      }),
    });

    const whatsappResult = await whatsappResponse.json();
    
    if (!whatsappResponse.ok) {
      console.error("WhatsApp send failed:", whatsappResult);
      throw new Error(`WhatsApp notification failed: ${whatsappResult.message}`);
    }
    
    console.log("WhatsApp sent successfully:", whatsappResult);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);