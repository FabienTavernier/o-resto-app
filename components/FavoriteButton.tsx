import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type FavoriteButtonProps = {
  restaurantId: number;
};

export default function FavoriteButton({ restaurantId }: FavoriteButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const { getItem, setItem } = useAsyncStorage('@favorites');

  useEffect(() => {
    async function loadFavorites() {
      // je récupère les données du LS
      const storedRestaurantsId = await getItem();

      // SI j'ai des données
      if (storedRestaurantsId) {
        const data = JSON.parse(storedRestaurantsId);
        setIsLiked(data.includes(restaurantId));
      }
    }

    loadFavorites();
  }, [restaurantId, getItem]);

  async function handlePress() {
    // LocalStorage
    const storedRestaurantsId = await getItem();
    const storedRestaurantsArray: number[] = storedRestaurantsId
      ? JSON.parse(storedRestaurantsId)
      : [];
    // 1. l'utilisateur like déjà (présent dans le LS)
    // 2. l'utilisateur n'a pas encore liké

    const updatedFavorites = storedRestaurantsArray.includes(restaurantId)
      ? storedRestaurantsArray.filter((id) => id !== restaurantId) //    → 1. supprime le resto du LS
      : [...storedRestaurantsArray, restaurantId]; //    → 2. ajoute au LS

    // je stocke la nouvelle valeur
    await setItem(JSON.stringify(updatedFavorites));

    // je regarde pour le statut du Like
    setIsLiked(!isLiked);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
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
