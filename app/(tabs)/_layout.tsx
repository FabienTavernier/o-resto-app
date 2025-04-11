import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    // J'ai des onglets
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FA6C1D',
      }}
    >
      {/* 1er onglet = Accueil qui doit être dans un fichier `app/(tabs)/index.tsx` */}
      <Tabs.Screen
        name="index" // nom du fichier
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="home" color={color} />
          ),
        }}
      />

      {/* 2nd onglet = Favoris qui doit être dans un fichier `app/(tabs)/favorites.tsx` */}
      <Tabs.Screen
        name="favorites" // nom du fichier
        options={{
          title: 'Mes favoris',
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="heart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
