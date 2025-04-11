import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function FavoriteButton() {
  const [isLiked, toggleIsLiked] = useState(false);

  return (
    <TouchableOpacity onPress={() => toggleIsLiked(!isLiked)}>
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
