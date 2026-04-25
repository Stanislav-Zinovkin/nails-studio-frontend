import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validations/booking";
import { z } from "zod";

type CreateBookingData = z.infer<typeof bookingSchema>;

export const BookingServerService = {
    async create( data: CreateBookingData) {
        return await prisma.$transaction(async (tx) => {
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
    }
}