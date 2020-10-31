import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Customer from '../pages/Customer';
import HomeTabs from './homeTabs.routes';

const Stack = createStackNavigator();

function hideHeaderBar(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routeName !== 'MyCustomers') return false;
  return true;
}

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'MyCustomers':
      return 'Meus clientes';
    default:
      return 'Home';
  }
}

const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="HomeTabs"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      options={({ route }) => ({
        headerShown: hideHeaderBar(route),
        headerTitle: getHeaderTitle(route),
      })}
      name="HomeTabs"
      component={HomeTabs}
    />
    <Stack.Screen
      options={{ headerShown: true, title: 'Cliente' }}
      name="Customer"
      component={Customer}
    />
  </Stack.Navigator>
);

export default Routes;
