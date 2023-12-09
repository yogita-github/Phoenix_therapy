import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [selectedIconColor, setSelectedIconColor] = useState('#FBB718');

  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: selectedIconColor,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default BottomNavigator;
