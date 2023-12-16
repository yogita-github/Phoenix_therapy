import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const wordData = [
  {
    word: "कुत्ता",
    image: require("../../assets/puppy-1903313_640.jpg"),
    audio: require("../../assets/audio/kutta.m4a"),
  },
  {
    word: "शुभरात्रि",
    image: require("../../assets/night-3115977_640.jpg"),
    audio: require("../../assets/audio/शुभरात्रि.m4a"),
  },
  {
    word: "संतरा",
    image: require("../../assets/oranges-1995079_640.jpg"),
    audio: require("../../assets/audio/संतरा.m4a"),
  },
  {
    word: "माँ",
    image: require("../../assets/mother-3389671_640.jpg"),
    audio: require("../../assets/audio/maa.m4a"),
  },
  {
    word: "हरा",
    image: require("../../assets/leaf-176722_640.jpg"),
    audio: require("../../assets/audio/हरा.m4a"),
  },
  {
    word: "संगीत",
    image: require("../../assets/beautiful-1791929_640.jpg"),
    audio: require("../../assets/audio/संगीत.m4a"),
  },
];

const Balloon = ({navigation}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      wordData[currentWordIndex].audio
    );
    setSound(sound);
    await sound.playAsync();
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordData.length);
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
      <View style={styles.imageContainer}>
        <PanGestureHandler
          onGestureEvent={() => {}}
          onHandlerStateChange={() => {}}
        >
          <View style={styles.imageWrapper}>
            <Image
              source={wordData[currentWordIndex].image}
              style={styles.image}
            />
          </View>
        </PanGestureHandler>
      </View>

      <TouchableOpacity style={styles.playButton} onPress={playSound}>
        <Text style={styles.buttonText}>Play Audio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
        <Text style={styles.buttonText}>Next Word</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  playButton: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  nextButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Balloon;
