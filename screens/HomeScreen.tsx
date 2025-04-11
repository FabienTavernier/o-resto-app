import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useRestaurants } from '@/contexts/RestaurantContext';

import ThemedText from '@/components/basics/ThemedText';

import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import SearchBar from '@/components/SearchBar';

export default function HomeScreen() {
  const { restaurants } = useRestaurants();

  // j'ai besoin d'un état pour récupérer la soumission du formulaire
  const [query, setQuery] = useState('');

  // FILTRE en fonction de `query`
  const filteredRestaurants = restaurants?.filter((r) =>
    r.city.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <View style={[styles.root, styles.container]}>
      <Header />

      <View style={styles.content}>
        <SearchBar setQuery={setQuery} />

        <ThemedText style={styles.title}>Liste des restaurants</ThemedText>

        <View style={styles.container}>
          <FlatList
            data={filteredRestaurants}
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
