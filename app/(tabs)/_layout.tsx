import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="area"
        options={{
          title: "Sân",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="map.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Tin tức",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="bookmark.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Tôi",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
