import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const LetsStart = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => navigation.navigate("Profile")}
        >
          {/* Replace 'ProfileIcon' with the actual path or component for your profile icon */}
          <Image
            source={require("../../assets/Profile.png")}
            style={{ width: 30, height: 30, tintColor: "black" }}
          />
        </TouchableOpacity>
        <Text style={styles.centerText}>
          Hi, Please select one option below
        </Text>
        <Text style={styles.mainText}>Let's Start</Text>
        <View style={[styles.rectangle1, { backgroundColor: "#B218FB" }]}>
          {/* Purplish color */}
          <Image
            source={require("../../assets/testicon.jpeg")}
            style={[styles.image, styles.border]}
          />
          <Text style={styles.text} onPress={() => navigation.navigate("Test")}>
            Start AI Test
          </Text>
        </View>
        <View style={[styles.rectangle2, { backgroundColor: "#00D015" }]}>
          {/* Parrot color */}
          <Image
            source={require("../../assets/selficon.jpeg")}
            style={[styles.image, styles.border]}
          />
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("SelfLearning2")}
          >
            Self Learning
          </Text>
        </View>
        <View style={[styles.rectangle3, { backgroundColor: "#FBB718" }]}>
          {/* Dark Yellow color */}
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={[styles.image, styles.border]}
          />
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("HomeSide")}
          >
            Go To Home
          </Text>
        </View>
      </View>
    </>
  );
};

export default LetsStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#FFFBEF",
  },
  centerText: {
    textAlign: "center",
    fontSize: 17,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  rectangle1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  rectangle2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  rectangle3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  profileIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
  },
});