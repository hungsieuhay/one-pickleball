import { useTheme, useThemedColors } from '@/hooks/use-theme';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export const StatusBarWrapper = () => {
  const { theme } = useTheme();
  const colors = useThemedColors();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        setKey((prev) => prev + 1);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <StatusBar
      key={`${theme}-${key}`}
      style={theme === 'dark' ? 'light' : 'dark'}
      backgroundColor={colors.background}
    />
  );
};
