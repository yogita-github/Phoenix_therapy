
// import React from 'react';
// import { View, Text } from 'react-native';

// const LoginScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Login</Text>
//   </View>
// );

// export default LoginScreen;

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const handleForgotPassword = () => {
    // Handle forgot password logic here
    // For simplicity, we are just navigating to the register page
    navigation.navigate("RegisterPage");
  };

  const handleLogin = () => {
    // Handle login logic here
    // You can add your own logic to authenticate the user
    // For simplicity, we are not implementing authentication in this example
    // You can replace the alert with your authentication logic
    navigation.navigate("HomeSide");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PhonoFix</Text>
      <Text style={styles.subHeading}>Login to your account</Text>

      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.yellowButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or login with</Text>

      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-favicon-logo-20.png",
            }} // Replace with the actual path to your Google logo
            style={styles.logo}
          />
          <Text style={styles.socialText}>Google</Text>
        </View>

        <View style={styles.socialButton}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png",
            }} // Replace with the actual path to your Facebook logo
            style={styles.logo}
          />
          <Text style={styles.socialText}>Facebook</Text>
        </View>
      </View>

      <Text style={styles.termsText}>
        By using PhonoFix, you are agreeing to our Terms and Conditions,
        including Privacy Policy.
      </Text>
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
    color: "white",
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
    borderColor: "#3A4859",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#091A2F",
    color: "white",
  },
  forgotPassword: {
    color: "white",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  yellowButton: {
    backgroundColor: "yellow",
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
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A4859",
    borderRadius: 5,
    padding: 10,
    width: "48%",
    justifyContent: "center",
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    color: "white",
    fontWeight: "bold",
  },
  termsText: {
    color: "white",
    textAlign: "center",
  },
});

export default LoginScreen;

