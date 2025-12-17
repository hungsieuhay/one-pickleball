import React from 'react';

import { FieldValues } from 'react-hook-form';

import { Select, SelectProps } from '@/components/ui/Select';

import { FormWrapper } from '../FormWrapper';
import { FormWrapperProps } from '../FormWrapper/FormWrapper';

type RHFSelectProps<T extends FieldValues> = FormWrapperProps<T> & {
  select: Omit<SelectProps, 'value' | 'onChangeValue'>;
};

const RHFSelect = <T extends FieldValues>({ select, ...props }: RHFSelectProps<T>) => {
  return (
    <FormWrapper {...props}>
      {({ onChange, value }) => <Select onChangeValue={onChange} value={value} {...select} />}
    </FormWrapper>
  );
};

export default RHFSelect;
