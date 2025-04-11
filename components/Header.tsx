import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>O'resto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontFamily: 'BrutalSolid',
    fontSize: 110,
  },
});
