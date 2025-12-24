import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, View } from 'react-native';

import { Flex } from '@/components/ui/Flex';
import { Grid, GridItem } from '@/components/ui/Grid';
import { Icon } from '@/components/ui/Icon';
import { Separator } from '@/components/ui/Separator';
import { Text } from '@/components/ui/Text';

import { useGetStyles } from '@/hooks/useGetStyles';

import { homeActions } from '../../constants';
import { getHomeActionsStyles } from './HomeActions.styles';

const HomeActions = () => {
  const styles = useGetStyles(getHomeActionsStyles);

  return (
    <View style={styles.container}>
      <Flex>
        <Separator style={styles.line} orientation="vertical"></Separator>
        <Text size="h2">Truy cập nhanh</Text>
      </Flex>

      <Grid columns={2} gap={8}>
        {homeActions.map((item, index) => {
          const isActive = item.active;

          return (
            <GridItem key={index}>
              <Pressable
                style={[styles.item, isActive && styles.itemActive]}
                onPress={() => router.navigate(item.href)}
              >
                <Flex direction="column">
                  <Icon
                    size="lg"
                    variant={isActive ? 'outline' : 'light'}
                    onPress={() => router.navigate(item.href)}
                    {...(!isActive && {
                      styleOverrides: {
                        container: {
                          backgroundColor: item.backgroundColor,
                        },
                        icon: {
                          color: item.primaryColor,
                        },
                      },
                    })}
                  >
                    <MaterialIcons name={item.icon} size={24} />
                  </Icon>
                  <Text size="h4" color={isActive ? 'primaryForeground' : 'default'}>
                    {item.label}
                  </Text>
                </Flex>
              </Pressable>
            </GridItem>
          );
        })}
      </Grid>
    </View>
  );
};

export default HomeActions;
