import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from '@/lib/validations/booking';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        const result = bookingSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(result.error.format(), { status: 400 });
        }
        const { name, phone, service,date,time} = result.data;

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatID = process.env.TELEGRAM_CHAT_ID;
const message = `
✨ *Новий запис у Nail Space!*

👤 *Клієнт:* ${name}
📞 *Телефон:* ${phone}
💅 *Послуга:* ${service}
📅 *Дата:* ${date}
⏰ *Час:* ${time}
        `.trim();

            const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!telegramRes.ok) {
            const errorText = await telegramRes.text();
            console.error("Помилка Telegram:", errorText);
            return NextResponse.json({ success: false, error: "Telegram error" }, { status: 500 });
        }
        
        
        
        
        
        
        
        
        
        
        return NextResponse.json({
                success: true,
                message: "Book approved!"
            });
    } catch (error) {
        return NextResponse.json({ success: false }, {status: 500});
    }
    
}