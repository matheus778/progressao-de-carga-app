import React from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const options = {
  tabBarActiveTintColor: 'blue', headerShown: false,
  tabBarInactiveTintColor: '#aeaeae',
  tabBarStyle: {
    paddingBottom: 5,
    paddingTop: 5,
    height: 60
  }
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={options}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <IonIcons size={28} name="home-sharp"
            color={focused ? '#0A3D3F' : color} />,
          tabBarActiveTintColor: '#0A3D3F',
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: 'Atividade',
          tabBarIcon: ({ color, focused }) => <IonIcons size={28} name="analytics-sharp"
            color={focused ? '#0A3D3F' : color} />,
          tabBarActiveTintColor: '#0A3D3F',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, focused }) => <IonIcons size={28} name="settings-sharp"
            color={focused ? '#0A3D3F' : color} />,
          tabBarActiveTintColor: '#0A3D3F',
        }}
      />
    </Tabs>
  );
}