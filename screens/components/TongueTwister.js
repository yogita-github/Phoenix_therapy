import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const audioFiles = [
  require("../../assets/audio/TT1 (1).wav"),
  require("../../assets/audio/TT2 (1).wav"),
  require("../../assets/audio/TT3 (1).wav"),
  require("../../assets/audio/TT4 (1).wav"),
  require("../../assets/audio/TT5 (1).wav"),
  require("../../assets/audio/TT6 (1).wav"),
  require("../../assets/audio/TT7 (1).wav"),
  require("../../assets/audio/TT8 (1).wav"),
];

const phrases = [
  "Believe you can and you’re halfway there.”",
  "Enhance your speech clarity!",
  "Practice speaking faster!",
  "Perfect your speech rhythm!",
  "Master tongue twisters!",
  "Boost your language fluency!",
  "Speech therapy made fun!",
  "Challenge your speaking skills!",
];

const TongueTwisterGame = () => {
  const [isPlaying, setIsPlaying] = useState(
    Array(audioFiles.length).fill(false)
  );
  const [sounds, setSounds] = useState(Array(audioFiles.length).fill(null));

  const playAudio = async (audioIndex) => {
    try {
      const newIsPlaying = [...isPlaying];
      const newSounds = [...sounds];

      if (newIsPlaying[audioIndex]) {
        // Stop audio
        if (newSounds[audioIndex]) {
          await newSounds[audioIndex].stopAsync();
        }
      } else {
        // Start audio
        newSounds[audioIndex] = new Audio.Sound();
        await newSounds[audioIndex].loadAsync(audioFiles[audioIndex]);
        await newSounds[audioIndex].playAsync();
      }

      newIsPlaying[audioIndex] = !newIsPlaying[audioIndex];
      setSounds(newSounds);
      setIsPlaying(newIsPlaying);
    } catch (error) {
      console.error("Failed to play audio", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tongueTwisterText}>
        {isPlaying.some(Boolean)
          ? "Listen carefully..."
          : "Can you say this fast?"}
      </Text>
      <View style={styles.buttonsContainer}>
        {audioFiles.map((_, index) => (
          <View key={index} style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.playButton, { backgroundColor: getRandomColor() }]}
              onPress={() => playAudio(index)}
            >
              <Text style={styles.buttonText}>
                {isPlaying[index] ? "Stop" : "Play"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.phraseText}>{phrases[index]}</Text>
          </View>
        ))}
      </View>
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
    "#34495e",
    "#d35400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEEA2", // Light Grey background
  },
  tongueTwisterText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50", // Dark Grey text
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  buttonWrapper: {
    marginBottom: 20,
    alignItems: "center",
    width: "45%", // Equal width for two buttons in a row
  },
  playButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  phraseText: {
    marginTop: 10,
    textAlign: "center",
    color: "black", // Light Grey text
  },
});

export default TongueTwisterGame;
