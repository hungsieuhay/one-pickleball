import * as z from 'zod';

import { bookingSchema } from '../lib/schema';

export type BookingFormType = z.infer<typeof bookingSchema>;
