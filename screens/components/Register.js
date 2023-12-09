

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
    // You can add your own logic to send data to a server or store it locally
    // For simplicity, we are just navigating to the homepage
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PhonoFix</Text>
      <Text style={styles.subHeading}>Create an account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="white"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.yellowButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or register with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
            }} // Replace with the actual path to Google logo
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png",
            }} // Replace with the actual path to Facebook logo
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#091A2F",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 50,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    color: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: "white",
  },
  yellowButton: {
    backgroundColor: "#FBB718",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    color: "white",
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#3A4859",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10, 
    marginLeft: 10, // Add this property to create spacing between buttons
  },
  socialButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  loginLink: {
    color: "white",
    marginTop: 20,
  },
});

export default Register;

