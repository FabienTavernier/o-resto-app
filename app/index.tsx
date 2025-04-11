import { useEffect } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import FavoriteProvider from '@/contexts/FavoriteContext';
import RestaurantProvider from '@/contexts/RestaurantContext';
import HomeScreen from '@/screens/HomeScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded] = useFonts({
    BrutalSolid: require('../assets/fonts/Brutal-Solid.otf'),
    'Chivo-100': require('../assets/fonts/chivo-v18-latin-100.ttf'),
    'Chivo-400': require('../assets/fonts/chivo-v18-latin-regular.ttf'),
    'Chivo-900': require('../assets/fonts/chivo-v18-latin-900.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RestaurantProvider>
      <FavoriteProvider>
        <HomeScreen />
      </FavoriteProvider>
    </RestaurantProvider>
  );
}
