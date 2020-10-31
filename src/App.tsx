import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './themes/theme';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
