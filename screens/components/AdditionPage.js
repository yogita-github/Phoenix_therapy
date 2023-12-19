import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AdditionPage = () => {
  const tips = [
    "Learn common spelling rules.",
    "Practice mindful writing.",
    "Focus on common mistakes.",
    "Read the text aloud .",
    // Add more tips as needed
  ];

  const wordsWithAddition = [
"समाचार : समाचारी",
"किताबें : किताबेलेख",
"सुधारना : सुधारापन",
"परिक्षा : परीक्षण",
"संगीत : संगीतकला",
    // Add more sentences with additions
  ];

  const exampleWordInHindi = "पुस्तक"; // Example Hindi word with one added letter

  return (
    <View style={styles.container}>
      <Text style={styles.tipsTitle}>Addition Therapy</Text>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips:</Text>
        {tips.map((tip, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`Tip ${index + 1} pressed!`)} activeOpacity={0.7}>
            <Text style={styles.tipText}>{`${index + 1}. ${tip}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.wordsTitle}>Original Word:Word with Addition</Text>
        {wordsWithAddition.map((sentence, index) => (
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
    backgroundColor: '#ccffcc', // Light green background color
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginTop: 100,
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

export default AdditionPage;
