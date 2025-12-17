import React from 'react';

import { FieldValues } from 'react-hook-form';

import { Input, InputProps } from '@/components/ui/Input';

import { FormWrapper } from '../FormWrapper';
import { FormWrapperProps } from '../FormWrapper/FormWrapper';

type RHFTextInputProps<T extends FieldValues> = FormWrapperProps<T> & {
  input?: Omit<InputProps, 'onBlur' | 'onChangeText' | 'value'>;
};

const RHFTextInput = <T extends FieldValues>({ input, ...props }: RHFTextInputProps<T>) => {
  return (
    <FormWrapper {...props}>
      {({ onChange, onBlur, value }) => <Input onBlur={onBlur} onChangeText={onChange} value={value} {...input} />}
    </FormWrapper>
  );
};

export default RHFTextInput;
