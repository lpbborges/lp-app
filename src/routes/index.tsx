import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import MyCustomersStack from './myCustomersStack.routes';

const Tab = createMaterialBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#FDFBFB"
    barStyle={styles.barStyle}
    shifting
  >
    <Tab.Screen
      options={{
        tabBarLabel: 'Meus clientes',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="assignment-ind" size={26} color={color} />
        ),
      }}
      name="MyCustomersStack"
      component={MyCustomersStack}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={26} color={color} />
        ),
      }}
      name="Home"
      component={Home}
    />
  </Tab.Navigator>
);

const styles = {
  barStyle: {
    backgroundColor: '#000',
  },
};

export default Routes;
