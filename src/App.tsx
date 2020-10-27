import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Routes from './routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
