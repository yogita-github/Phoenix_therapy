import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const audioFiles = [
  require("../../assets/audio/I-1.wav"),
  require("../../assets/audio/I-2.wav"),
  require("../../assets/audio/I-3.wav"),
  require("../../assets/audio/I-4.wav"),
  require("../../assets/audio/I-5.wav"),
  
];

const Idioms = () => {
  const playAudio = async (audioIndex) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFiles[audioIndex]);
      await sound.playAsync();
    } catch (error) {
      console.error("Failed to play audio", error);
    }
  };

  return (
    <View style={styles.container}>
      {[...Array(5).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: getRandomColor() }]}
          onPress={() => playAudio(index)}
        >
          <Text style={styles.buttonText}>{`Play Idiom ${index + 1}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
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
    backgroundColor: "#B859E1", 

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
    fontWeight: 600,
  },
});

export default Idioms;
