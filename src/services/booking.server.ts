import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validations/booking";
import { z } from "zod";
import { Prisma } from "@prisma/client";

type CreateBookingData = z.infer<typeof bookingSchema>;

export const BookingServerService = {
    async create( data: CreateBookingData) {
        return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const existing = await tx.booking.findFirst({
                where: {
                    date: data.date,
                    time: data.time,
                    status: { in: ['PENDING', 'CONFIRMED']}
                }
            });

            if (existing) throw new Error('SLOT_ALREADY_OCCUPIED');

            return await tx.booking.create ({
                data: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    service: data.service,
                    date: data.date,
                    time: data.time,
                    status: 'PENDING',
                }
            })
        })
    },
    async cancelBooking(bookingId: string) {
        return await prisma.$transaction(async(tx: Prisma.TransactionClient) => {
            const booking = await tx.booking.findUnique({
                where: { id: bookingId}
            });
            if(!booking) throw new Error('BOOKING_NOT_FOUND');
            if(booking.status === 'CANCELLED') throw new Error('BOOKING_ALREADY_CANCELLED');

            const [day, month, year] = booking.date.split('.').map(Number);
            const [hours, minutes] = booking.time.split(':').map(Number);
            const visitDate = new Date(year, month - 1, day, hours, minutes);

            const now = new Date();
            const hoursDifference = (visitDate.getTime() - now.getTime()) / (1000 * 60 * 60);

            if(hoursDifference < 7) {
                throw new Error('TOO_LATE_TO_CANCEL');
            }

            return await tx.booking.update({
                where: {id: bookingId },
                data: {status: 'CANCELLED'}
            })
        })
    }
}