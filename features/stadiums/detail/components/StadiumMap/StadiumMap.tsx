import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Linking, Pressable, View } from 'react-native';

import { Text } from '@/components/ui/Text';

import { StadiumDetailResponse } from '@/features/stadiums/shared/types';

import { useGetStyles } from '@/hooks/useGetStyles';

import { getStadiumMapStyles } from './StadiumMap.styles';

type StadiumMapProps = {
  link: StadiumDetailResponse['data']['maps_link'];
};

const StadiumMap = ({ link }: StadiumMapProps) => {
  const styles = useGetStyles(getStadiumMapStyles);

  if (!link) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/map.png')} style={styles.map} />

      <Pressable onPress={() => Linking.openURL(link)} style={styles.button}>
        <MaterialCommunityIcons name="map" style={styles.buttonIcon} />
        <Text fontWeight={500}>Xem bản đồ</Text>
      </Pressable>
    </View>
  );
};

export default StadiumMap;
