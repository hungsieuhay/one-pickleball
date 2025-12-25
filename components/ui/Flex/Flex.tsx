import React from 'react';

import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

type FlexProps = {
  children: React.ReactNode;
  justifyContent?: ViewStyle['justifyContent'];
  direction?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  flex?: ViewStyle['flex'];
  wrap?: ViewStyle['flexWrap'];
  gap?: number;
} & ViewProps;

type GetStylesProps = {
  justifyContent: ViewStyle['justifyContent'];
  direction: ViewStyle['flexDirection'];
  alignItems: ViewStyle['alignItems'];
  wrap: ViewStyle['flexWrap'];
  flex?: ViewStyle['flex'];
  gap: number;
};

const Flex = ({
  children,
  style,
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'flex-start',
  wrap = 'nowrap',
  gap = 8,
  flex,
  ...props
}: FlexProps) => {
  const styles = getStyles({ gap, direction, alignItems, justifyContent, wrap, flex });

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const getStyles = ({ gap, direction, alignItems, justifyContent, wrap, flex }: GetStylesProps) =>
  StyleSheet.create({
    container: {
      flexDirection: direction,
      flexWrap: wrap,
      display: 'flex',
      justifyContent,
      alignItems,
      gap,
      flex,
    },
  });

export default Flex;
