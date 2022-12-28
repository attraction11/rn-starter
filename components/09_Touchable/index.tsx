import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default function index() {
  return (
    <View style={[styles.container]}>
      <TouchableHighlight onPress={() => console.log('触碰高亮显示')}>
        <View style={[styles.item]}>
          <Text>触碰高亮</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={() => console.log('触碰透明度变化')}>
        <View style={[styles.item]}>
          <Text>触碰透明度变化</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => console.log('触碰无响应')}>
        <View style={[styles.item]}>
          <Text>触碰无响应</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
