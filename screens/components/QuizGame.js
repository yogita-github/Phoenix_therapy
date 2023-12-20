 import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const quizData = [
  {
    question: "पुस्तक का हिंदी में क्या अर्थ है?",
    options: ["A. पुस्तक ", "B. ग्रंथ", "C. किताब", "D. साहित्य"],
    correctAnswer: "A. Book",
    image: {
      uri: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=sph",
    },
    
  },
  {
    question: "गुलाब का हिंदी में क्या अर्थ है?",
    options: ["A. लिली", "B. सुन्दर", "C. फूल", "D. पानी"],
    correctAnswer: "C. फूल",
    image: {
      uri: "https://img.freepik.com/free-photo/closeup-shot-red-rose-with-dew-top-black_181624-28079.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=sph",
    },
  },
  {
    question: "खाना का हिंदी में क्या अर्थ है?",
    options: ["A. पीना", "B. सोना", "C. देखना", "D. भोजन"],
    correctAnswer: "D. भोजन",
    image: {
      uri: "https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=sph",
    },
  },
  {
    question: "सूरज का हिंदी में क्या अर्थ है?",
    options: ["A. चंद्रमा", "B. तारा", "C. आकाश", "D. अदिति"],
    correctAnswer: "B. तारा",
    image: {
      uri: "https://img.freepik.com/free-vector/cheerful-funny-cartoon-sun_74855-206.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=ais",
    },
  },
  {
    question: "गाड़ी का हिंदी में क्या अर्थ है?",
    options: ["A. उड़ान", "B. पथिक", "C. यात्रा", "D. वाहन"],
    correctAnswer: "D. वाहन",
    image: {
      uri: "https://img.freepik.com/free-vector/red-car-cartoon-style_1308-107667.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=ais",
    },
  },
];

const QuizGame = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
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
      {currentQuestion < quizData.length ? (
        <>
          <Text style={styles.boldText}>Recite with me!!</Text>
          <Image
            source={quizData[currentQuestion].image}
            style={styles.image}
          />
          <Text style={styles.questionText}>
            {quizData[currentQuestion].question}
          </Text>
          <View style={styles.optionsContainer}>
            {quizData[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <Text style={styles.resultText}>Your Score: {score}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF2CC",// Yellow color
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 40, 
  },

  optionsContainer: {
    width: "80%",
  },
  optionButton: {
    backgroundColor: "#3498db", // Blue color
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default QuizGame;

