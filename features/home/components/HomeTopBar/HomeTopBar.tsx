import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Flex } from '@/components/ui/Flex';
import { Icon } from '@/components/ui/Icon';
import { Text } from '@/components/ui/Text';

import { useGetStyles } from '@/hooks/useGetStyles';

import { getHomeTopBarStyles } from './HomeTopBar.styles';

const HomeTopBar = () => {
  const styles = useGetStyles(getHomeTopBarStyles);

  return (
    <Flex justifyContent="space-between" style={styles.container}>
      {/* Left */}
      <Flex gap={16}>
        <MaterialCommunityIcons name="menu" size={24} />
        <Flex>
          <Icon variant="fit" translateY={1}>
            <MaterialCommunityIcons name="tennis" size={24} />
          </Icon>
          <Text>
            <Text color="primary" size="h3">
              One
            </Text>
            <Text size="h3">Pickleball</Text>
          </Text>
        </Flex>
      </Flex>

      {/* Right */}
      <MaterialCommunityIcons name="bell" size={20} />
    </Flex>
  );
};

export default HomeTopBar;
