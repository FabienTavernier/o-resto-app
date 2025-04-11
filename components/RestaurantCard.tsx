import { useRouter } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import type { Restaurant } from '@/@types';

import ThemedText from './basics/ThemedText';

import FavoriteButton from './FavoriteButton';

type RestaurantCardProps = {
  restaurant: Restaurant;
  isOdd: boolean;
};

export default function RestaurantCard({
  restaurant,
  isOdd,
}: RestaurantCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: isOdd ? '#FA6C1D' : 'transparent' },
      ]}
      onPress={() => router.push(`/restaurants/${restaurant.id}`)}
    >
      <View style={styles.container}>
        <View style={[styles.row, styles.between]}>
          <ThemedText style={styles.name} weight={900}>
            {restaurant.name}
          </ThemedText>

          <View style={styles.rating}>
            <View style={styles.row}>
              <Ionicons name="star" size={16} color="#000" />
              <ThemedText
                style={styles.ratingText}
                accessible
                accessibilityLabel={`Note moyenne ${restaurant.rating.toFixed(1)}`}
              >
                {restaurant.rating.toFixed(1)}
              </ThemedText>
            </View>

            <ThemedText
              style={styles.ratingText}
              accessibilityLabel={`${restaurant.ratingCount} avis`}
            >
              ({restaurant.ratingCount})
            </ThemedText>
          </View>
        </View>

        <View style={styles.row}>
          <Text accessible accessibilityLabel="style de cuisine">
            {''}
          </Text>
          {restaurant.cuisines.map((item) => (
            <ThemedText key={item.label} style={styles.cuisine}>
              {item.label}
            </ThemedText>
          ))}
        </View>

        <View style={[styles.row, styles.between]}>
          <ThemedText accessibilityLabel={`situé à ${restaurant.city.name}`}>
            {restaurant.city.name}

            <ThemedText style={styles.small}>
              {` (${restaurant.city.postal_code})`}
            </ThemedText>
          </ThemedText>

          <FavoriteButton restaurantId={restaurant.id} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 12,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontSize: 34,
    textTransform: 'uppercase',
  },
  rating: {
    minWidth: 48,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
  cuisine: {
    marginRight: 8,
    paddingHorizontal: 8,

    fontSize: 13,
    backgroundColor: '#000',
    color: '#fff',
    textTransform: 'uppercase',
  },
  small: {
    fontSize: 13,
  },
});
