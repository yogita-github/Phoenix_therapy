import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const IntroPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>PhonoFix</Text>

      <Image
        style={styles.image}
        source={require("../../assets/firstpage.png")} // Replace with the actual path to your image
        resizeMode="cover"
      />

      <Text style={styles.subtitle}>Unlock clear speech for your child</Text>
      <View style={styles.underline}></View>
      <Text style={styles.smallText}>
        Fast, Fun, and Effective way to learn
      </Text>

      <TouchableOpacity
        style={styles.yellowButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Get started for free!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.grayButton}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.buttonText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-70px",
    backgroundColor: "#FFF2CC",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 230,
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  underline: {
    width: 50,
    height: 2,
    backgroundColor: "black",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 12,
    marginBottom: 20,
  },
  yellowButton: {
    backgroundColor: "#FBB718",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  grayButton: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IntroPage;
