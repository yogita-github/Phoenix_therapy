import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DistortionPage = () => {
  const tips = [
    "Experiment with changing the order of words.",
    "Introduce variations in sentence structure.",
    "Play with word forms and tenses.",
    "Consider using synonyms with a twist.",
    // Add more tips as needed
  ];

  const wordsWithDistortion = [
    "समाचार :चारसमा",
    "किताबें :बेंकिताब",
    "सुधारना :नारसुध",
    "परिक्षा:षाकिपर",
    "संगीत:गीतसन",
    // Add more sentences with distortions
  ];

  const exampleWordInHindi = "पुस्तक"; // Example Hindi word with distortion

  return (
    <View style={styles.container}>
      <Text style={styles.tipsTitle}>Distortion Therapy</Text>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips:</Text>
        {tips.map((tip, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`Tip ${index + 1} pressed!`)} activeOpacity={0.7}>
            <Text style={styles.tipText}>{`${index + 1}. ${tip}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.wordsTitle}>Original Word:Word with Distortion</Text>
        {wordsWithDistortion.map((sentence, index) => (
          <Text key={index} style={styles.sentenceText}>{`${index + 1}. ${sentence}`}</Text>
        ))}
      </View>
      {/* <Text>If you encountered Distortion problem go to varnamala section and practice the letter you Spelled wrong.</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffd699', // Light yellow background color
  },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginTop: 50,
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

export default DistortionPage;
