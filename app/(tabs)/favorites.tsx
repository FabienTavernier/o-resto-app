import { FlatList, StyleSheet, View } from 'react-native';

import { useFavorites } from '@/contexts/FavoriteContext';
import { useRestaurants } from '@/contexts/RestaurantContext';

import ThemedText from '@/components/basics/ThemedText';

import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';

export default function FavoriteScreen() {
  const { restaurants } = useRestaurants();
  const { favorites } = useFavorites();

  const favoritesRestaurants = restaurants?.filter((r) =>
    favorites.includes(r.id),
  );

  return (
    <View style={[styles.root, styles.container]}>
      <Header />

      <View style={styles.content}>
        <ThemedText style={styles.title}>
          Liste des restaurants préférés
        </ThemedText>

        <View style={styles.container}>
          <FlatList
            data={favoritesRestaurants}
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
