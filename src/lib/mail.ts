// Використовуємо require, щоб обійти проблеми з ES-модулями в Next 16
const { Resend } = require('resend'); 
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
        console.error("FATAL: RESEND_API_KEY is missing");
        return;
    }

    try {
        // Створюємо екземпляр всередині
        const resend = new Resend(apiKey);
        const t = translations[locale];

        const { data, error } = await resend.emails.send({
            from: 'Wita Mosondz Manicure <onboarding@resend.dev>',
            to: email,
            subject: t.emails.confirmation.subject,
            html: `<h1>${t.emails.confirmation.greeting}, ${name}!</h1>`,
        });

        if (error) {
            console.error("Resend API Error:", error);
        } else {
            console.log("Email sent! ID:", data?.id);
        }
    } catch (err: any) {
        console.error("CRITICAL: Error in mail service:", err.message);
    }
}