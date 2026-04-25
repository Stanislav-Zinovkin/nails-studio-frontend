import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from '@/lib/validations/booking';
import { bookingRateLimit } from "@/lib/ratelimit";
import { sendConfirmationEmail } from "@/lib/mail";
import { sendTelegramNotification } from "@/lib/telegram/telegram";
import { handleApiError } from "@/lib/error/error-handler";
import { BookingServerService } from "@/services/booking.server";

export async function POST(req: NextRequest) {
    try {
        //0. Rate Limit
        const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
        const { success: RatelimitOK } = await bookingRateLimit.limit(ip);

        if (!RatelimitOK) {
            return NextResponse.json({ error: "TOO_MANY-REQUESTS" }, { status: 429 });
        }
        

        const body = await req.json();
        if (body.hp_field) return NextResponse.json({ success: true, message: 'Bot trapped' });

        // 1. Validation
        const result = bookingSchema.safeParse(body);
        
        if (!result.success) {
            console.log("ZOD ERROR DETAILS:", result.error.format()); // ТУТ БУДЕ ПРИЧИНА 400
            return NextResponse.json({ error: "VALIDATION_ERROR", details: result.error.format() }, { status: 400 });
        }

        const validatedData = result.data;

        // 2.
        const newBooking = await BookingServerService.create(validatedData);
       

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
    
