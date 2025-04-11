import { createContext, useContext, useState } from 'react';

import type { Restaurant } from '@/@types';

import { restaurants as restaurantsData } from '@/data/restaurants';

type RestaurantContextType = {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
};

type RestaurantProviderProps = {
  children: React.ReactNode;
};

export const RestaurantContext = createContext<RestaurantContextType | null>(
  null,
);

export default function RestaurantProvider({
  children,
}: RestaurantProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);

  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantContext); // RestaurantContextType | null

  if (!context) {
    // null
    throw new Error('useRestaurants doit être utilisé dans RestaurantProvider');
  }

  return context; // RestaurantContextType
}
