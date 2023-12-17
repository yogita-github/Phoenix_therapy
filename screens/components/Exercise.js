
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Exercise = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Home Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("HomeSide")}>
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={{
              width: 30,
              height: 30,
              alignContent: "flex-end",
              justifyContent: "flex-end",
              marginLeft: 278,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseContainer}>
        <Image
          source={require("../../assets/exerciselogo.png")}
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.heading}>
        Different exercises for clear pronunciation
      </Text>

      <View style={styles.buttonContainer}>
        {[
          { text: "Lips", page: "LipsExercise" },
          { text: "Tongue", page: "TongueExercise" },
          { text: "Mouth", page: "MouthExercise" },
        ].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigateToPage(button.page)}
          >
            <Text style={styles.buttonText}>{button.text}</Text>
            <Text style={styles.arrow}>&rarr;</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Exercise;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFBEF", // Light yellow background
  },
  exerciseContainer: {
    backgroundColor: "#FBB718",
    borderRadius: 5,
    margin: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 57,
    marginRight: 25,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 200,
    borderRadius: 5,
    marginBottom: 50,
    marginVertical: 57,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    display: "flex",
    width: 228,
    maxWidth: "100%",
    flexDirection: "column",
      marginTop: 0,
      marginRight: 19,
      marginBottom: 0,
      marginLeft: 19,
    aspectRatio: 1,
    backgroundColor: "#FBB718",
  },
  heading: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#FFBD22",
    padding: 16,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    width: 200,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "black",
    marginRight: 7,
  },
  arrow: {
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },
});
