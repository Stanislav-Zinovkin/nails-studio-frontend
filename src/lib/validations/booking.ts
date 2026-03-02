import { z } from 'zod';

export const bookingSchema = z.object({
    name: z.string()
      .min(1, "Name cannot be too short")
      .max(25, 'Name is too long'),
    phone: z.string()
      .regex(/^\+?[0-9\s\-]+$/, 'Incorrect format'),
    service: z.string().min(1, 'Choose service'),
    date: z.string(),
    time: z.string(),
    hp_field: z.string().max(0).optional(),    
});

export type BookingInput = z.infer<typeof bookingSchema>;