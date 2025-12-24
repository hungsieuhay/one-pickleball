import { StyleColorsProps } from '@/types';
import { StyleSheet } from 'react-native';

import { AppColors, Radius } from '@/constants/theme';

export const getStadiumHeaderStyles = ({ colors }: StyleColorsProps) =>
  StyleSheet.create({
    container: {
      gap: 16,
    },
    courtsIcon: {
      color: colors.textSecondary,
      fontSize: 16,
      transform: [{ translateY: 1 }],
    },
    contact: {
      borderRadius: Radius.full,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    contactIcon: {
      color: AppColors.primary,
      fontSize: 24,
      transform: [{ translateY: 1 }],
    },
    card: {
      borderRadius: 32,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 24,
    },
    cardIcon: {
      width: 48,
      height: 48,
      backgroundColor: AppColors.primaryAlpha20,
      borderRadius: Radius.full,
    },
    cardItemIcon: {
      color: AppColors.primary,
      fontSize: 20,
    },
    cardItemText: {
      flex: 1,
    },
    ratingIcon: {
      fontSize: 20,
      color: '#FFC107',
    },
    ratingAction: {
      backgroundColor: colors.secondary,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: Radius.full,
    },
  });
