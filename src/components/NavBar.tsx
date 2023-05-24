import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

export function NavBar() {
  if (Platform.OS === 'web') {
    return null;
  }
  return (
    <View>
      <Text style={styles.alignCenter}>💬 Gifted Chat{'\n'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alignCenter: {
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
  },
});
