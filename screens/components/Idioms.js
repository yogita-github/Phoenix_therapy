import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image,ScrollView } from "react-native";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native"; // Add this line

const audioFiles = [
  require("../../assets/audio/I-1.wav"),
  require("../../assets/audio/I-2.wav"),
  require("../../assets/audio/I-3.wav"),
  require("../../assets/audio/I-4.wav"),
  require("../../assets/audio/I-5.wav"),
  require("../../assets/audio/I-1.wav"),
  require("../../assets/audio/I-2.wav"),
  require("../../assets/audio/I-3.wav"),
  require("../../assets/audio/I-4.wav"),
  require("../../assets/audio/I-5.wav"),
];

const Idioms = () => {
  const navigation = useNavigation(); // Add this line

  const playAudio = async (audioIndex) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFiles[audioIndex]);
      await sound.playAsync();
    } catch (error) {
      console.error("Failed to play audio", error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
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
      {[...Array(10).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: getRandomColor() }]}
          onPress={() => playAudio(index)}
        >
          <Text style={styles.buttonText}>{`Play Idiom ${index + 1}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

const getRandomColor = () => {
  const colors = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#1abc9c",
    "#c0392b",
    "#d35400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0ADFF",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600", // Corrected fontWeight value
  },
});

export default Idioms;
