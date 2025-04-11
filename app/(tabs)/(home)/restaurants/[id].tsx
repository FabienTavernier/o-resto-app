import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { useRestaurants } from '@/contexts/RestaurantContext';

import ThemedText from '@/components/basics/ThemedText';

export default function RestaurantDetailsScreen() {
  const { restaurants } = useRestaurants();

  // je vais cherche l'ID dans les paramètres d'URL
  const { id } = useLocalSearchParams();

  const restaurant = restaurants?.find((r) => r.id === Number(id));

  if (!restaurant) {
    return (
      <View style={styles.container}>
        <ThemedText>Restaurant non trouvé</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <ThemedText style={styles.title}>{restaurant.name}</ThemedText>

        <ThemedText style={styles.p}>{restaurant.description}</ThemedText>

        <ThemedText>
          ⭐ {restaurant.rating} ({restaurant.ratingCount} avis)
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 48,
  },
  p: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Chivo-900',
    fontSize: 55,
    textTransform: 'uppercase',
  },
});
