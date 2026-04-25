import { z } from 'zod';

export const bookingSchema = z.object({
    name: z.string()
      .min(1, "Name cannot be too short")
      .max(25, 'Name is too long'),
    email: z.string().email('Invalid email'),  
    phone: z.string()
      .regex(/^\+?[0-9\s\-]+$/, 'Incorrect format'),
    service: z.string().min(1, 'Choose service'),
    date: z.string(),
    time: z.string(),
    hp_field: z.string().max(0).optional(),
    rodoConsent: z.boolean().refine((val) => val === true, 'Consent required '), 
    locale: z.string().optional().default('pl')

});

export type BookingInput = z.infer<typeof bookingSchema>;