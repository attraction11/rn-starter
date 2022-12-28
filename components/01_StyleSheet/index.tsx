import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      <Text style={{fontSize: 30}}> textInComponent </Text>
      <Text style={[{color: 'red'}, {color: 'green'}]}> textInComponent </Text>
      <Text style={[styles.h1]}>Hello RN</Text>
      <Text style={[styles.h2]}>Hello RN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
