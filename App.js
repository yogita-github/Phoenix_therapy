// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Games from './screens/components/Games';
import HomeSide from './screens/components/Home_inside';
import Balloon from './screens/components/Balloon';
import IntroPage from './screens/components/IntroPage';
import Register from './screens/components/Register';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="HomeSide" component={HomeSide} />
      <Stack.Screen name="Balloon" component={Balloon} />
      <Stack.Screen name="IntroPage" component={IntroPage} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
