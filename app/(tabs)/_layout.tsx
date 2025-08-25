import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import useTheme from '@/hooks/useTheme';

const TabsLayout = () => {
  const { colors } = useTheme();
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.surface, height: 60, paddingBottom: 5, borderTopWidth: 0, borderTopColor: colors.border },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
        headerShown: false,
    }}>
        <Tabs.Screen name="index" options={{ title: "Todos", tabBarIcon: ({color, size}) => <Ionicons name="flash-outline" size={size} color={color} />}}/>
        <Tabs.Screen name="Settings" options={{ title: "Settings", tabBarIcon: ({color, size}) => <Ionicons name="settings" size={size} color={color} /> }} />
    </Tabs>
  )
}

export default TabsLayout