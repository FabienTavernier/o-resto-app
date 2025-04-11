import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useFavorites } from '@/contexts/FavoriteContext';

type FavoriteButtonProps = {
  restaurantId: number;
};

export default function FavoriteButton({ restaurantId }: FavoriteButtonProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isLiked = favorites.includes(restaurantId);

  return (
    <TouchableOpacity onPress={() => toggleFavorite(restaurantId)}>
      <Ionicons
        name={isLiked ? 'heart' : 'heart-outline'}
        size={21}
        color="#000"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    minWidth: 48,
  },
});
