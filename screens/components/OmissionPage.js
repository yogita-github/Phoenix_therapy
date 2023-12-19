import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OmissionPage = () => {
  const tips = [
    "Read the sentence carefully.",
    "Identify the context of the passage.",
    "Look for clues in surrounding words.",
    "Consider the meaning of the sentence.",
    // Add more tips as needed
  ];

  const wordsWithOmission = [
    "समाचार :सचार ",
    "किताबें :कताबें",
    "सुधारना :सुरना",
    "परिक्षा:पिक्षा",
    "संगीत:गीत ",
    // Add more sentences with omissions
  ];

  const exampleWordInHindi = "पुस्तकालय"; // Example Hindi word with one omitted letter

  return (
    <View style={styles.container}>
      <Text style={styles.tipsTitle}>Omission Therapy</Text>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips:</Text>
        {tips.map((tip, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`Tip ${index + 1} pressed!`)} activeOpacity={0.7}>
            <Text style={styles.tipText}>{`${index + 1}. ${tip}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.wordsTitle}>Correct Word:Omitted Word</Text>
        {wordsWithOmission.map((sentence, index) => (
          <Text key={index} style={styles.sentenceText}>{`${index + 1}. ${sentence}`}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffcc', // Light yellow background color
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
//   exampleWord: {
//     fontSize: 24,
//     color: '#3498db',
//     fontWeight: 'bold',
//   },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginTop:100,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#3498db', // Interactive color
  },
  wordsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  wordsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sentenceText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default OmissionPage;
