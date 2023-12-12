import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WordsPage = () => {
  const hindiWords = [
    "नमस्ते",
    "धन्यवाद",
    "सुप्रभात",
    "शुभरात्रि",
    "प्यार",
    "मित्र",
    "खुशी",
    "सपना",
    "आशीर्वाद",
    "संगीत",
    "स्वास्थ्य",
    "ख़ुशबू",
  ];

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Recite Loudly</Text>
      </View>
      <View style={styles.wordsContainer}>
        {hindiWords.map((word, index) => (
          <View
            key={index}
            style={[styles.wordBox, { backgroundColor: getRandomColor() }]}
          >
            <Text style={styles.wordText}>{word}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const getRandomColor = () => {
  const colors = [
    "#FF6347",
    "#FFD700",
    "#98FB98",
    "#87CEFA",
    "#FFA07A",
    "#6A5ACD",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor:"#FFFBEF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  headerContainer: {
    backgroundColor: "#3498db",
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  wordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wordBox: {
    width: 120,
    height: 60,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wordText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default WordsPage;
