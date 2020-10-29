import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyCustomers from '../pages/MyCustomers';

const Stack = createStackNavigator();

const MyCustomersStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName="MyCustomers"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTitleStyle: {
        marginLeft: 20,
      },
      headerRightContainerStyle: {
        marginRight: 20,
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen
      options={{ headerShown: false }}
      name="MyCustomers"
      component={MyCustomers}
    />
  </Stack.Navigator>
);

export default MyCustomersStack;
