import React from 'react';

import { View, ViewStyle } from 'react-native';

import { useGetStyles } from '@/hooks/useGetStyles';

import { getScreenContainerStyles } from './ScreenContainer.styles';

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const ScreenContainer = ({ children, style }: ScreenContainerProps) => {
  const styles = useGetStyles(getScreenContainerStyles);

  return <View style={[styles.container, style]}>{children}</View>;
};

export default ScreenContainer;
