import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Picker,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("hindi");

  const handleNextButtonClick = () => {
    // Navigate to the next page
    // Replace 'NextPage' with the actual name of the next page
    navigation.navigate("IntroPage");
  };

  return (
    <View style={styles.container}>
      {/* Blue background */}
      <View style={styles.blueContainer}>
        {/* Phonofix Logo centered */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Phonofixlogo.png")} // Replace with the actual path to your logo
            style={styles.logoImage}
          />
        </View>

        {/* Buttons at the top right */}
        <View style={styles.buttonsContainer}>
          {/* Yellow Next button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextButtonClick}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          {/* Dropdown button */}
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={language}
              onValueChange={(itemValue) => setLanguage(itemValue)}
              style={styles.dropdownPicker}
            >
              <Picker.Item label="Hindi" value="hindi" />
              <Picker.Item label="English" value="english" />
            </Picker>
          </View>
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
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  buttonsContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  dropdownContainer: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  dropdownPicker: {
    borderRadius: 5,
  },
});

export default SplashScreen;
