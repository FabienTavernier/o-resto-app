import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

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
    <View style={styles.container}>
      <Header />

      <View>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
});
