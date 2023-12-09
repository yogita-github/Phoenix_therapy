import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const Progress = () => {
  return (
    <View style={styles.container}>
      <Svg height="200" width="200" style={styles.arc}>
        <Path d="M100 0 A100 100 0 0 1 100 200" fill="yellow" stroke="yellow" />
      </Svg>

      <View style={styles.textContainer}>
        <Text style={styles.progressText}>Your Weekly Progress</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://example.com/image1.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://example.com/image2.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://example.com/image3.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://example.com/image4.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://example.com/image5.jpg", // Replace with the actual URL or local path to your image
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://example.com/image6.jpg", // Replace with the actual URL or local path to your image
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
  },
  arc: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainer: {
    position: "absolute",
    top: 75,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
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

export default Progress;
