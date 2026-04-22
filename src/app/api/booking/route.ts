import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from '@/lib/validations/booking';
import { bookingRateLimit } from "@/lib/ratelimit";
import { sendConfirmationEmail } from "@/lib/mail";
import { sendTelegramNotification } from "@/lib/telegram/telegram";
import { handleApiError } from "@/lib/error/error-handler";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("RECEIVED BODY:", body); // ДИВИСЬ СЮДИ В ТЕРМІНАЛІ

        // 1. Валідація
        const result = bookingSchema.safeParse(body);
        
        if (!result.success) {
            console.log("ZOD ERROR DETAILS:", result.error.format()); // ТУТ БУДЕ ПРИЧИНА 400
            return NextResponse.json({ error: "VALIDATION_ERROR", details: result.error.format() }, { status: 400 });
        }

        const validatedData = result.data;

        // 2. Транзакція (Race Condition Protection)
        const newBooking = await prisma.$transaction(async (tx) => {
            const existing = await tx.booking.findFirst({
                where: {
                    date: validatedData.date,
                    time: validatedData.time,
                    status: { in: ['PENDING', 'CONFIRMED'] }
                }
            });

            if (existing) throw new Error('SLOT_ALREADY_OCCUPIED');

            return await tx.booking.create({
                data: {
                    name: validatedData.name,
                    email: validatedData.email || null,
                    phone: validatedData.phone,
                    service: validatedData.service,
                    date: validatedData.date,
                    time: validatedData.time,
                    status: 'PENDING',
                }
            });
        });

        // 3. Notifications
        await sendTelegramNotification(validatedData, newBooking.id);
        if (validatedData.email) {
            sendConfirmationEmail(validatedData.email, validatedData.name, validatedData.service, validatedData.date, validatedData.time);
        }

        return NextResponse.json({ success: true, bookingId: newBooking.id }, { status: 201 });

    } catch (error: any) {
        if (error.message === "SLOT_ALREADY_OCCUPIED") {
            return NextResponse.json({ error: "SLOT_ALREADY_OCCUPIED" }, { status: 409 });
        }
        return handleApiError(error);
    }
}
    
