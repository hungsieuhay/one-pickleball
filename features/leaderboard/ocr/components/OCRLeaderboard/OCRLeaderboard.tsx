/* eslint-disable react-native/no-unused-styles */
import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemeColor } from '@/constants/theme';

import { RankingHeader } from '@/features/leaderboard/shared/components/RankingHeader';

import { useThemedColors } from '@/hooks/use-theme';

import { OCRTable } from '../OCRTable';
import { OCRUserElo } from '../OCRUserElo';

const OCRLeaderboard = () => {
  const styles = getStyles({ colors: useThemedColors() });

  return (
    <View style={styles.container}>
      <RankingHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <OCRTable />
      </ScrollView>
      <OCRUserElo />
    </View>
  );
};

const getStyles = ({ colors }: { colors: ThemeColor }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 96,
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },
  });

export default OCRLeaderboard;
