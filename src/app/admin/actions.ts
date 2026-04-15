'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function updateBookingStatus(id: string, status: 'CONFIRMED' | 'CANCELLED' | 'PENDING'){
    try {
        await prisma.booking.update({
            where: { id },
            data: { status },
        });
        revalidatePath('/admin');
    } catch (error) {
        console.error("Failed to update status", error);
    }
}

export async function deleteBooking(id: string) {
    try {
        await prisma.booking.delete({
            where: { id },
        });
        revalidatePath('/admin');
    } catch (error) {
        console.error("Failed to delete booking", error);
    }
}