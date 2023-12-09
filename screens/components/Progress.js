import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProgressPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Your Weekly Progress</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/piebar.png")}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://example.com/image2.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  progressContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProgressPage;


