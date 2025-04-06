import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          headerShown: true,
          title: 'Exercise',
        }}
      />
    </Tabs>
  );
}



