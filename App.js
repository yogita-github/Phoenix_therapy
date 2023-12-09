// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Games from './screens/components/Games';
import HomeSide from './screens/components/Home_inside';
import Balloon from './screens/components/Balloon';
import IntroPage from './screens/components/IntroPage';
import Register from './screens/components/Register';
import Testing from './screens/Testing';
import BottomNavigator from './screens/BottomNavigator';
import Therapy from './screens/components/Therapy';
import Profile from './screens/components/Profile';
import Progress from './screens/components/Progress';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
          name="Main"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Test" component={Testing} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="HomeSide" component={HomeSide} />
      <Stack.Screen name="Balloon" component={Balloon} />
      <Stack.Screen name="IntroPage" component={IntroPage} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Therapy" component={Therapy} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Progress" component={Progress} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
