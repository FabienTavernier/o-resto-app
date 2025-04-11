import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import ThemedText from '@/components/basics/ThemedText';

import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import SearchBar from '@/components/SearchBar';

import { restaurants } from '@/data/restaurants';

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
    <View style={[styles.root, styles.container]}>
      <Header />

      <View style={styles.content}>
        <SearchBar />

        <ThemedText style={styles.title}>Liste des restaurants</ThemedText>

        <View style={styles.container}>
          <FlatList
            data={restaurants}
            renderItem={({ item, index }) => (
              <RestaurantCard restaurant={item} isOdd={index % 2 !== 0} />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ebebeb',
  },
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: 24,
  },
});
