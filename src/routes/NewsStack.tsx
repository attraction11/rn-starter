import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/News';
import DetailScreen from '../screens/News/Detail';

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={NewsScreen}
        options={{
          title: '新闻列表',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: '新闻详情',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </Stack.Navigator>
  );
}
