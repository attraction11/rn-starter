import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  getLocationAsync,
  pickImageAsync,
  takePictureAsync,
} from '../utils/mediaOpt';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AccessoryBar extends React.Component<any> {
  render() {
    const {onSend, isTyping} = this.props;

    return (
      <View style={styles.container}>
        <Button onPress={() => pickImageAsync(onSend)} name="image" />
        <Button onPress={() => takePictureAsync(onSend)} name="camera" />
        <Button onPress={() => getLocationAsync(onSend)} name="location" />
        <Button
          onPress={() => {
            isTyping();
          }}
          name="chatbubbles"
        />
      </View>
    );
  }
}

const Button = ({onPress, size = 30, color = 'rgba(0,0,0,0.5)', name}) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name={name} size={size} color={color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.3)',
  },
});
