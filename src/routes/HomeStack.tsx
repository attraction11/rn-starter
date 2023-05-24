import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    // @ts-ignore
    <Stack.Navigator initialRouteName="Page" headerMode="none">
      <Stack.Screen name="Page" component={HomeScreen} />
    </Stack.Navigator>
  );
}
