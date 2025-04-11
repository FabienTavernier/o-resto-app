import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher par ville…"
        placeholderTextColor="#000"
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Rechercher les restaurants dans une ville"
        style={styles.button}
      >
        <Ionicons name="search" size={20} color="#fff" />
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
