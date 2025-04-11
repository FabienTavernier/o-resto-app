import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, TextInput, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type SearchBarProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setQuery }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    Keyboard.dismiss();

    if (isSubmitted || !searchValue.trim()) {
      // je nettoie le formulaire (reset)
      setIsSubmitted(false);
      setSearchValue('');
      setQuery('');
    } else {
      // je soumets le formulaire
      setQuery(searchValue.trim());
      setIsSubmitted(true);
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un restaurant…"
        placeholderTextColor="#000"
        value={searchValue}
        onChangeText={setSearchValue}
        onFocus={() => setIsSubmitted(false)} // je repasse en mode recherche
        autoCapitalize="characters" // force le clavier en majuscules
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Rechercher les restaurants par ville, nom ou cuisine"
        style={styles.button}
        onPress={handleSubmit}
      >
        <Ionicons
          name={!isSubmitted ? 'search' : 'close'}
          size={20}
          color="#fff"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 48,
  },
  input: {
    flex: 1,

    padding: 20,

    color: '#000',
    fontFamily: 'Chivo-100',
    fontSize: 21,
    textTransform: 'uppercase',

    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,

    boxShadow: '2px 2px 0 0 rgba(0,0,0,1)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: -24,
    marginBottom: -48,

    height: 72,
    width: 72,

    backgroundColor: '#000',
    borderWidth: 5,
    borderColor: '#000',
  },
});
