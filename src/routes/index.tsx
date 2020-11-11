import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Header from '../components/Header';

import EditCustomer from '../pages/Customer/EditCustomer';
import NewCustomer from '../pages/Customer/NewCustomer';
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
        header: props => <Header title={getHeaderTitle(route)} {...props} />,
      })}
      name="HomeTabs"
      component={HomeTabs}
    />
    <Stack.Screen
      options={{ headerShown: true, title: 'Novo Cliente' }}
      name="NewCustomer"
      component={NewCustomer}
    />
    <Stack.Screen
      options={{ headerShown: true, title: 'Editar Cliente' }}
      name="EditCustomer"
      component={EditCustomer}
    />
  </Stack.Navigator>
);

export default Routes;
