import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import defaultTheme from './themes/defaultTheme';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <PaperProvider theme={defaultTheme}>
        <NavigationContainer theme={defaultTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={defaultTheme.colors.primary}
          />
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
};

export default App;
