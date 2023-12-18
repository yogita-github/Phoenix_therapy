import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const audioFiles = [
  require("../../assets/audio/K.m4a"),
  require("../../assets/audio/Ka.m4a"),
  require("../../assets/audio/Ki.m4a"),
  require("../../assets/audio/Kiii.m4a"),
  require("../../assets/audio/Ku.m4a"),
  require("../../assets/audio/Kuuuu.m4a"),
  require("../../assets/audio/Ke.m4a"),
  require("../../assets/audio/Keey.m4a"),
  require("../../assets/audio/ko.m4a"),
  require("../../assets/audio/Kau.m4a"),
  require("../../assets/audio/Kam.m4a"),
  require("../../assets/audio/Kaha.m4a"),
];

const barakhadiTexts = [
  "क",
  "का",
  "कि",
  "की",
  "कु",
  "कू",
  "के",
  "कै",
  "को",
  "कौ",
  "कं",
  "कः",
];

const Barakhadi = () => {
  const navigation = useNavigation();

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
      {barakhadiTexts.map((text, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: getRandomColor() }]}
          onPress={() => playAudio(index)}
        >
          <Text style={styles.buttonText}>{`Play ${text}`}</Text>
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
    backgroundColor: "#34495e",
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
    fontWeight: "600",
  },
});

export default Barakhadi;
