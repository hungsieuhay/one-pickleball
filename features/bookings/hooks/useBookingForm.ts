import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { bookingSchema } from '../lib/schema';

export const useBookingForm = () => {
  return useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      court_id: undefined,
    },
  });
};
