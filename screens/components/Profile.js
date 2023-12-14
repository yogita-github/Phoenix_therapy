import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as SecureStore from 'expo-secure-store';

const Profile = ({navigation}) => {
  const handleLogout = async () => {
    // Clear the token from SecureStore
    await SecureStore.deleteItemAsync('token');

    // Navigate back to the LoginScreen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={styles.logo}
          />
          <Text
            style={styles.menuText}
            onPress={() => navigation.navigate("LetsStart")}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/Profile.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/progress.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Daily Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/Timer.png")}
            style={styles.logo}
          />
          <Text
            style={styles.menuText}
            onPress={() => navigation.navigate("Timer")}
          >
            Timer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/todo.png")}
            style={styles.logo}
          />
          <Text
            style={styles.menuText}
            onPress={() => navigation.navigate("TodoApp")}
          >
            To do
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/setting.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Image
            source={require("../../assets/logout.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091A2F",
    padding: 20,
    flexDirection: "row",
  },
  menuContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  menuText: {
    color: "white",
    fontSize: 16,
  },
});

export default Profile;
