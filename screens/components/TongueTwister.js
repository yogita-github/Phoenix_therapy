import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";

const audioFiles = [
  require("../../assets/audio/TT1.wav"),
  require("../../assets/audio/TT2.wav"),
  require("../../assets/audio/TT3.wav"),
  require("../../assets/audio/TT4.wav"),
  require("../../assets/audio/TT5.wav"),
  require("../../assets/audio/TT6.wav"),
  require("../../assets/audio/TT7.wav"),
  require("../../assets/audio/TT8.wav"),
];

const phrases = [
  "Believe you can and you’re halfway there.",
  "Enhance your speech clarity!",
  "Practice speaking faster!",
  "Perfect your speech rhythm!",
  "Master tongue twisters!",
  "Boost your language fluency!",
  "Speech therapy made fun!",
  "Challenge your speaking skills!",
];

const TongueTwister = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(Array(audioFiles.length).fill(false));
  const [sounds, setSounds] = useState(Array(audioFiles.length).fill(null));

  useEffect(() => {
    return () => {
      // Unload sounds when the component unmounts
      sounds.forEach(async (sound) => {
        if (sound) {
          await sound.unloadAsync();
        }
      });
    };
  }, []);

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

export default TongueTwister;
