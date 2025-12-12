import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

import { RankingHeader } from '@/features/leaderboard/shared/components/RankingHeader';

import { OCRTable } from '../OCRTable';
import { OCRUserElo } from '../OCRUserElo';

const OCRLeaderboard = () => {
  return (
    <View style={styles.container}>
      <RankingHeader />
      <ScrollView>
        <OCRTable />
      </ScrollView>
      <OCRUserElo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 96,
    paddingHorizontal: 24,
  },
});

export default OCRLeaderboard;
