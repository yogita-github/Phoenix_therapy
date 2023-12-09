import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";
import Voice from "react-native-voice";


const hindiWords = [
  "नमस्ते",
  "शुक्रिया",
  "आपका",
  "स्वागत",
  "खुशी",
  "गाड़ी",
  "फूल",
  "पानी",
  "खाना",
  "सोना",
];
const Balloon = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const animatedValue = new Animated.Value(1);

  useEffect(() => {
    Voice.onSpeechResults = (event) => {
      const result = event.value[0].trim().toLowerCase();
      const correctWord = selectedWord.toLowerCase();

      if (result === correctWord) {
        Alert.alert("Correct Pronunciation!");
        setScore(score + 1);
      } else {
        Alert.alert("Incorrect Pronunciation. Try Again.");
        setScore(Math.max(0, score - 1));
      }

      setIsListening(false);
      setTimer(10);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };

    const interval = setInterval(() => {
      if (isListening) {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            setIsListening(false);
            Alert.alert("Time is up! Try the next word.");
            setTimer(10);
            return prevTimer;
          }
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [selectedWord, isListening, score, animatedValue]);

  const startListening = () => {
    setIsListening(true);
    Voice.start("hi-IN");
    Animated.timing(animatedValue, {
      toValue: 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * hindiWords.length);
    setSelectedWord(hindiWords[randomIndex]);
  };

  const changeDifficulty = () => {
    setDifficulty((prevDifficulty) =>
      prevDifficulty === "easy" ? "hard" : "easy"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{selectedWord}</Text>
      </View>
      <Text style={styles.timer}>Time: {timer}s</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ scale: animatedValue }] },
        ]}
      >
        <Button
          title={isListening ? "Listening..." : "Start Listening"}
          onPress={startListening}
          disabled={isListening}
          style={styles.button}
        />
      </Animated.View>
      <Button
        title="Next Word"
        onPress={selectRandomWord}
        disabled={isListening}
        style={styles.button}
      />
      <Button
        title={`Difficulty: ${difficulty}`}
        onPress={changeDifficulty}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 20,
  },
  wordContainer: {
    borderWidth: 2,
    borderColor: "#009688",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  word: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    backgroundColor: "#009688",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
  },
});


export default Balloon;
