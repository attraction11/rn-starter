import React from 'react';
import MainTab from './routes';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/NoAuth/Login';
import RegisterScreen from './screens/NoAuth/Register';
import SplashScreen from './screens/NoAuth/Splash';

const mapStateToProps = (state: {User: {isLogin: boolean}}) => {
  return {
    isLogin: state.User.isLogin,
  };
};

const Stack = createStackNavigator();

function Index({isLogin}: {isLogin: boolean}) {
  return (
    <>
      {isLogin ? (
        <MainTab />
      ) : (
        <Stack.Navigator
          screenOptions={{headerMode: undefined}}
          initialRouteName={'Splash'}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Index);
