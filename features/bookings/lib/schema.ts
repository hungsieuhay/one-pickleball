import * as z from 'zod';

export const bookingSchema = z.object({
  court_id: z.string('Không được để trống').min(1, 'Không được để trống'),
});
