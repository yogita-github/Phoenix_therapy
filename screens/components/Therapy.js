// source={require("../../assets/Omission.png")}


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Therapy = ({ navigation }) => {
  const handleContinue = () => {
    // Handle continue logic here
    // For simplicity, we are just navigating to the next page
    navigation.navigate('NextPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wrong words detected</Text>

      <View style={styles.yellowBoxesContainer}>
        <View style={styles.yellowBox}>
          <Text style={styles.whiteText}>आझ</Text>
        </View>
        <View style={styles.yellowBox}>
          <Text style={styles.whiteText}>अच्च्या</Text>
        </View>
        <View style={styles.yellowBox}>
          <Text style={styles.whiteText}>धिन</Text>
        </View>
      </View>

      <View style={styles.whiteBoxesContainer}>
        <View style={styles.whiteBox}>
          <Text style={styles.whiteText}>झ</Text>
        </View>
        <View style={styles.whiteBox}>
          <Text style={styles.whiteText}>छ</Text>
        </View>
        <View style={styles.whiteBox}>
          <Text style={styles.whiteText}>ध</Text>
        </View>
      </View>

      <Text style={styles.subHeading}>Suggested Therapy using AI</Text>

      <View style={styles.yellowBoxesContainer}>
        <View style={styles.imageBox}>
          <Image
            source={require("../../assets/Substitution.png")} // Replace with the actual path to your image
            style={styles.image}
          />
          <Text style={styles.whiteText}>Omission</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require("../../assets/Omission.png")} // Replace with the actual path to your image
            style={styles.image}
          />
          <Text style={styles.whiteText}>Addition</Text>
        </View>
      </View>

      <View style={styles.yellowBoxesContainer}>
        <View style={styles.imageBox}>
          <Image
            source={require("../../assets/Addition.png")} // Replace with the actual path to your image
            style={styles.image}
          />
          <Text style={styles.whiteText}>Distortion</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require("../../assets/Distortion.png")} // Replace with the actual path to your image
            style={styles.image}
          />
          <Text style={styles.whiteText}>Distortion</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.yellowButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  yellowBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  yellowBox: {
    backgroundColor: "#FBB718",
    padding: 2,
    margin: 5,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  whiteBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  whiteBox: {
    backgroundColor: "white",
    padding: 4,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FBB718",
    flex: 1,
    color: "black",
    alignItems: "center",
  },
  whiteText: {
    color: "black",
    fontWeight:"bold",
    paddingTop:-30,
    paddingBottom:15,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  imageBox: {
    backgroundColor: "#FBB718",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 10,
    height: 100,
    marginBottom: 10,
  },
  yellowButton: {
    backgroundColor: "#FBB718",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Therapy;