import React from 'react';

import { useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import { RHFLayout } from '@/components/rhf/RHFLayout';
import { RHFSelect } from '@/components/rhf/RHFSelect';
import { SelectOption } from '@/components/ui/Select';

import { useGetStyles } from '@/hooks/useGetStyles';

import { BookingFormType } from '../../types';
import { getBookingFormStyles } from './BookingForm.styles';

type BookingFormProps = {
  courts: SelectOption[];
};

const BookingForm = ({ courts }: BookingFormProps) => {
  const styles = useGetStyles(getBookingFormStyles);

  const {
    control,
    formState: { errors },
  } = useFormContext<BookingFormType>();

  return (
    <View style={styles.container}>
      <RHFLayout>
        <RHFSelect
          controller={{ control: control, name: 'court_id', message: errors.court_id?.message }}
          select={{ options: courts }}
          label="Chọn sân"
          withAsterisk
        />
      </RHFLayout>
    </View>
  );
};

export default BookingForm;
