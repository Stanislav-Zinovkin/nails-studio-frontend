import { Resend } from "resend";
import { translations, Locale } from "@/data/translations";

export const sendConfirmationEmail = async (
    email: string,
    name: string,
    service: string,
    date: string,
    time: string,
    bookingId: string,
    locale: Locale = 'pl' 
) => {

    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
        console.error("CRITICAL: RESEND_API_KEY is missing in env variables!");
        return;
    }

    const resend = new Resend(apiKey);
    const t = translations[locale];

    try {
        
        const { data, error } = await resend.emails.send({
            from: 'Wita Mosondz Manicure <onboarding@resend.dev>',
            to: email,
            subject: t.emails.confirmation.subject,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #10069F;">${t.emails.confirmation.greeting}, ${name}! ✨</h1>
          <p style="font-size: 16px; color: #555;">${t.emails.confirmation.thankYou}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <h3 style="color: #10069F; font-size: 18px;">${t.emails.confirmation.detailsTitle}</h3>
          <ul style="list-style: none; padding: 0; font-size: 16px; line-height: 1.6;">
            <li>💅 <strong>${t.emails.confirmation.service}:</strong> ${service}</li>
            <li>📅 <strong>${t.emails.confirmation.date}:</strong> ${date}</li>
            <li>⏰ <strong>${t.emails.confirmation.time}:</strong> ${time}</li>
          </ul>

          <p style="margin-top: 30px; font-size: 14px; color: #888;">
            Lokalizacja: Poznań, ul. Owczarska 1
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 14px; color: #555;">${t.emails.confirmation.cancelText}</p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/cancel-booking/${bookingId}" 
             style="display: inline-block; padding: 12px 24px; background-color: #10069F; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 10px;">
            ${t.emails.confirmation.cancelBtn}
          </a>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API error details:", error);
        } else {
            console.log("Email sent successfully!", data);
        }

    } catch (error) {
        console.error("Unexpected error in sendConfirmationEmail:", error);
    }
}