// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button title="Test" onPress={() => navigation.navigate("Test")} />
    <Button title="Games" onPress={() => navigation.navigate("Games")} />
    <Button title="HomeSide" onPress={() => navigation.navigate("HomeSide")} />
    <Button title="Balloon" onPress={() => navigation.navigate("Balloon")} />
    <Button title="Register" onPress={() => navigation.navigate("Register")} />
    <Button
      title="IntroPage"
      onPress={() => navigation.navigate("IntroPage")}
    />
  </View>
);

export default HomeScreen;
