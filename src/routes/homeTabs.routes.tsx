import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import MyCustomers from '../pages/MyCustomers';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs: React.FC = () => (
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
      name="MyCustomers"
      component={MyCustomers}
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

export default HomeTabs;
