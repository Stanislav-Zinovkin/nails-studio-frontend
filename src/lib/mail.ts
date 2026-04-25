import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (
    email: string,
    name: string,
    service: string,
    date: string,
    time: string,
    bookingId: string
) => {
    try {
        await resend.emails.send({
            from: 'Nail Space <onboarding@resend.dev>',
            to: email,
            subject: 'Підтвердження запису — Nail Space',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #333;">Вітаємо, ${name}! ✨</h1>
          <p style="font-size: 16px; color: #555;">Ви успішно записалися на процедуру в <strong>Nail Space</strong>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <ul style="list-style: none; padding: 0; font-size: 16px;">
            <li>💅 <strong>Послуга:</strong> ${service}</li>
            <li>📅 <strong>Дата:</strong> ${date}</li>
            <li>⏰ <strong>Час:</strong> ${time}</li>
          </ul>
          <p style="margin-top: 30px; font-size: 14px; color: #888;">Чекаємо на вас за адресою: Poznań, ul. Owczarska 1</p>
          <p style="font-size: 16px; color: #555;>Якщо ваші плани змінилися, ви можете скасувати запис (не пізніше ніж за 7 годин до візиту):</p>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/cancel-booking/${bookingId}">
              Скасувати запис
            </a>
        </div>
      `,
        });
    }catch (error) {
        console.error("Email sending gone wrong", error)
    }
}