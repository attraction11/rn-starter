import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Page"
      // headerMode={'none'}
    >
      <Stack.Screen name="TakePicture" component={TakePictureScreen} />
      <Stack.Screen
        name="Page"
        component={HomeScreen}
        options={({navigation}) => ({
          title: '首页',
          headerStyle: {
            backgroundColor: '#00b38a',
            elevation: 0, // 删除 Android 上的阴影
            shadowOpacity: 0, // 删除 iOS 下的阴影
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TakePicture')}>
              <Text style={[[styles.takeText]]}>拍照</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  takeText: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
});
