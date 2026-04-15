import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from '@/lib/validations/booking';
import { bookingRateLimit } from "@/lib/ratelimit";
import { sendConfirmationEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limiting
        const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
        const { success: RateLimitOK } = await bookingRateLimit.limit(ip);

        if (!RateLimitOK) {
            return NextResponse.json(
                { error: "Too many requests. Take a breath." },
                { status: 429 }
            );
        }

        const body = await req.json();

        // 2. Honeypot
        if (body.hp_field && body.hp_field.length > 0) {
            return NextResponse.json({ success: true, message: 'Book approved (bot trapped)' });
        }

        // 3. Zod Validation
        const result = bookingSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(result.error.format(), { status: 400 });
        }

        //result.data
        const { name, phone, service, date, time, email } = result.data;

        // 4. Prisma
        const newBooking = await prisma.booking.create({
            data: {
                name,
                phone,
                service,
                date,
                time,
                email: email || null, 
                status: 'PENDING',
            },
        });

        console.log("✅ New booking successfully created in DB", newBooking.id);

        // 5. Telegram 
        try {
            const botToken = process.env.TELEGRAM_BOT_TOKEN;
            const chatID = process.env.TELEGRAM_CHAT_ID;
            const message = `
✨ *Новий запис у Nail Space!* (ID: ${newBooking.id.slice(-5)})

👤 *Клієнт:* ${name}
📞 *Телефон:* ${phone}
💅 *Послуга:* ${service}
📅 *Дата:* ${date}
⏰ *Час:* ${time}
            `.trim();

            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });
        } catch (tgError) {
            console.error("❌ Telegram notification error:", tgError);
        }

        // 6. Email Confirmation
        if (email) {
            
            await sendConfirmationEmail(email, name, service, date, time);
        }

        return NextResponse.json({
            success: true,
            message: "Book approved!",
            bookingId: newBooking.id
        });

    } catch (error) {
        console.error("🔴 Global API Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}