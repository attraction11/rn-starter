/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

// import Index from './components/01_StyleSheet';
// import Index from './components/02_Flexbox';
// import Index from './components/06_ActivityIndicator';
// import Index from './components/09_Touchable';
// import Index from './components/11_SectionList';
// import Index from './components/12_FlatList';
import Index from './src';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
