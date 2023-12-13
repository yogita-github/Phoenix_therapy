
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,Image
} from "react-native";
import { Audio } from "expo-av";

const shuffleArray = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const ArticulationMaze = () => {
  const [cards, setCards] = useState([
    { id: 1, value: "अ", flipped: false },
    { id: 2, value: "अ", flipped: false },
    { id: 3, value: "ब", flipped: false },
    { id: 4, value: "ब", flipped: false },
    { id: 5, value: "च", flipped: false },
    { id: 6, value: "च", flipped: false },
    { id: 7, value: "द", flipped: false },
    { id: 8, value: "द", flipped: false },
    { id: 9, value: "ए", flipped: false },
    { id: 10, value: "ए", flipped: false },
    { id: 11, value: "फ", flipped: false },
    { id: 12, value: "फ", flipped: false },
  ]);

  const [flippedIds, setFlippedIds] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Shuffle the cards when the component mounts
    setCards(shuffleArray(cards));
  }, []);

  const handleCardPress = (id) => {
    // Check if the card is already flipped or matched
    if (flippedIds.includes(id)) {
      return;
    }

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );

    setFlippedIds((prevIds) => [...prevIds, id]);

    // Check for a match when two cards are flipped
    if (flippedIds.length === 1) {
      const [firstCardId] = flippedIds;
      const [firstCard] = cards.filter((card) => card.id === firstCardId);
      const [currentCard] = cards.filter((card) => card.id === id);

      if (firstCard.value === currentCard.value) {
        // Match found
        Alert.alert("Match Found!");
        setScore((prevScore) => prevScore + 1);
        setFlippedIds([]);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCardId || card.id === id
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedIds([]);
        }, 1000);
      }
    }
  };

  return (
    <>
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.card, card.flipped && styles.flippedCard]}
              onPress={() => handleCardPress(card.id)}
            >
              {card.flipped && <Text>{card.value}</Text>}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    width: 80,
    height: 120,
    backgroundColor: "lightblue",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  flippedCard: {
    backgroundColor: "lightgreen",
  },
  scoreContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ArticulationMaze;