import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './themes';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={appStyle}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

const appStyle = {
  flex: 1,
  backgroundColor: '#121212',
};

export default App;
