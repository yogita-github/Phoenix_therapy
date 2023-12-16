import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          // Token is stored, navigate to Let's Start
          navigation.replace("LetsStart");
        } else {
          // Token is not stored, navigate to IntroPage
          navigation.replace("IntroPage");
        }
      } catch (error) {
        console.error("Error checking token:", error);
        // Handle the error if needed and navigate to IntroPage
        navigation.replace("IntroPage");
      }
    };

    const timer = setTimeout(() => {
      checkTokenAndNavigate();
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Blue background */}
      <View style={styles.blueContainer}>
        {/* Phonofix Logo centered */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Phonofixlogo.png")}
            style={styles.logoImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blueContainer: {
    backgroundColor: "#091A2F",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
