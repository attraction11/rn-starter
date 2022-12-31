import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserScreen from '../screens/User';
import AboutScreen from '../screens/User/About';
import CounterScreen from '../screens/User/Counter';
import LoginScreen from '../screens/NoAuth/Login';
import RegisterScreen from '../screens/NoAuth/Register';

const Stack = createStackNavigator();
export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: '个人中心',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: '关于',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
    </Stack.Navigator>
  );
}
