import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useRestaurants } from '@/contexts/RestaurantContext';

import ThemedText from '@/components/basics/ThemedText';

export default function RestaurantDetailsScreen() {
  const router = useRouter();
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
      <TouchableOpacity
        style={[styles.back, styles.p]}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" color="#fff" />
        <ThemedText style={styles.backText}>Retour à l'accueil</ThemedText>
      </TouchableOpacity>

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
  back: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,

    padding: 8,

    backgroundColor: '#000',
  },
  backText: {
    color: '#fff',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
