import { PasswordInput } from '@/components/common/PasswordInput';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextInputProps, View, ViewProps } from 'react-native';
import { FormDescription } from '../FormDescription';
import { FormLabel } from '../FormLabel';
import { FormMessage } from '../FormMessage';

type RHFPasswordProps<T extends FieldValues> = {
  controller: {
    control: Control<T>;
    name: Path<T>;
    message?: string;
  };
  input?: TextInputProps & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
  container?: ViewProps;
  label?: string;
  description?: string;
};

const RHFPassword = <T extends FieldValues>({
  controller: { control, name, message },
  input,
  label,
  description,
  container,
}: RHFPasswordProps<T>) => {
  return (
    <View {...container}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <PasswordInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...input}
          />
        )}
        name={name}
      />
      <FormDescription>{description}</FormDescription>
      <FormMessage>{message}</FormMessage>
    </View>
  );
};

export default RHFPassword;
