import { StyleSheet, Text, type TextProps } from 'react-native';

// je prend le type de TextProps et j'ajoute mes propres props
type ThemedTextProps = TextProps & {
  weight?: 100 | 400 | 900;
};

export default function ThemedText({
  style, // je me sers ICI de ces 3 props (1)
  children, // (2)
  weight = 400, // (3)
  // REST parameter → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  ...otherProps // toutes les autres props vont être dans un objet `otherProps`
}: ThemedTextProps) {
  console.log(otherProps);

  return (
    <Text
      style={[
        weight === 100 ? styles.thinText : undefined,
        weight === 400 ? styles.defaultText : undefined,
        weight === 900 ? styles.boldText : undefined,
        style,
      ]}
      {...otherProps} // SPREAD je liste les autres props pour <Text />
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Chivo-400',
    fontSize: 21,
  },
  thinText: {
    fontFamily: 'Chivo-100',
    fontSize: 21,
  },
  boldText: {
    fontFamily: 'Chivo-900',
    fontSize: 21,
  },
});
