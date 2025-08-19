import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#673ab7',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', height: 60, paddingBottom: 5, borderTopWidth: 0, borderTopColor: 'transparent' },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
        headerShown: false,
    }}>
        <Tabs.Screen name="index" options={{ title: "Todos", tabBarIcon: ({color, size}) => <Ionicons name="flash-outline" size={24} color={color} />}}/>
        <Tabs.Screen name="Settings" options={{ title: "Settings", tabBarIcon: ({color, size}) => <Ionicons name="settings" size={24} color={color} /> }} />
    </Tabs>
  )
}

export default TabsLayout