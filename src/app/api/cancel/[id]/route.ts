import { NextRequest, NextResponse } from "next/server";
import { BookingServerService } from "@/services/booking.server";
import { handleApiError } from "@/lib/error/error-handler";

export async function PATCH(
    req:NextRequest,
    {params} : {params: {id: string } }
) {
    try {
        const { id } = params;
        await BookingServerService.cancelBooking(id);

        return NextResponse.json({ success: true, message: 'Booking cancelled'});
    } catch (error: any) {
        if (error.message === 'TOO_LATE_TO_CANCEL') {
            return NextResponse.json({ error: 'TOO_LATE_TO_CANCEL' }, { status: 400 });
        }
        return handleApiError(error);
    }
}