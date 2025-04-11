import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

type FavoriteContextType = {
  favorites: number[];
  toggleFavorite: (restaurantId: number) => void;
};

type FavoriteProviderProps = { children: React.ReactNode };

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Les favoris seront dans le LocalStorage de l'utilisateur
  const storage = useAsyncStorage('@oresto-favorites');

  // Charger les favoris depuis AsyncStorage au démarrage
  useEffect(() => {
    async function loadFavorites() {
      try {
        const storedFavorites = await storage.getItem();

        // si j'en trouve, je les stocke dans mon état
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Erreur lors du chargement des favoris', error);
      }
    }

    loadFavorites();
  }, [storage]);

  // Ajouter ou supprimer un restaurant des favoris
  async function toggleFavorite(restaurantId: number) {
    const updatedFavorites = favorites.includes(restaurantId)
      ? favorites.filter((id) => id !== restaurantId)
      : [...favorites, restaurantId];

    setFavorites(updatedFavorites);

    await storage.setItem(JSON.stringify(updatedFavorites));
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext); // FavoriteContextType | null

  if (!context) {
    throw new Error('useFavorites doit être utilisé dans FavoriteProvider');
  }

  return context; // FavoriteContextType
}
