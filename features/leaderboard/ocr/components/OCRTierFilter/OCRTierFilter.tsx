import React, { useState } from 'react';

import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

import { Radius } from '@/constants/theme';

import { OCRTiers } from '@/features/leaderboard/shared/constants';
import { AllTier } from '@/features/leaderboard/shared/types';

import { useThemedColors } from '@/hooks/use-theme';

type OCRTierFilterProps = {
  children: (tier: AllTier) => React.ReactNode;
};

const OCRTierFilter = ({ children }: OCRTierFilterProps) => {
  const [tier, setTier] = useState<AllTier>('');
  const colors = useThemedColors();

  return (
    <>
      <FlatList
        data={OCRTiers}
        renderItem={({ item }) => {
          const isActive = item.value === tier;
          return (
            <Pressable
              onPress={() => setTier(item.value)}
              style={[
                styles.item,
                {
                  backgroundColor: isActive ? colors.tint : colors.backgroundTertiary,
                  borderColor: isActive ? colors.tint : colors.border,
                },
              ]}
            >
              <Text>{item.label}</Text>
            </Pressable>
          );
        }}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.value}
        horizontal
        style={styles.container}
      />

      {/* Render props */}
      {children(tier)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    marginTop: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.full,
    borderWidth: 1,
    minWidth: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  contentContainer: {
    gap: 16,
  },
});

export default OCRTierFilter;
