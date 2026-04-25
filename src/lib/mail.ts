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
  const t = translations[locale];

  // Перевірка ключа
  if (!apiKey) {
    console.error("CRITICAL: RESEND_API_KEY is missing in environment variables!");
    return;
  }

  console.log("--- DEBUG: Starting Direct Fetch to Resend API ---");

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Wita Mosondz Manicure <onboarding@resend.dev>',
        to: [email], // Resend любить масиви
        subject: t.emails.confirmation.subject,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>${t.emails.confirmation.greeting}, ${name}! ✨</h2>
            <p>${t.emails.confirmation.thankYou}</p>
            <ul>
              <li><strong>${t.emails.confirmation.service}:</strong> ${service}</li>
              <li><strong>${t.emails.confirmation.date}:</strong> ${date}</li>
              <li><strong>${t.emails.confirmation.time}:</strong> ${time}</li>
            </ul>
            <p>Lokalizacja: Poznań, ul. Owczarska 1</p>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/cancel-booking/${bookingId}" 
               style="display: inline-block; padding: 10px 20px; background: #10069F; color: white; text-decoration: none; border-radius: 5px;">
              ${t.emails.confirmation.cancelBtn}
            </a>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Fetch Error Details:", data);
    } else {
      console.log("SUCCESS: Email sent via Fetch! ID:", data.id);
    }
  } catch (error: any) {
    console.error("FATAL: Fetch attempt failed entirely:", error.message);
  }
};