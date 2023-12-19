import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubstitutionPage = () => {
  const tips = [
    "Examine the context of the sentence.",
    "Identify words that can be replaced without changing the overall meaning.",
    "Consider synonyms or words with similar meanings.",
    "Ensure the substituted word fits grammatically.",
    // Add more tips as needed
  ];

  const wordsWithSubstitution = [
    "समाचार :समाचारपत्र",
    "किताबें :पुस्तकें",
    "सुधारना :बेहतरीन करना",
    "परिक्षा:टेस्ट",
    "संगीत:धुन",
    // Add more sentences with substitutions
  ];

  const exampleWordInHindi = "पुस्तक"; // Example Hindi word with a substitution

  return (
    <View style={styles.container}>
      <Text style={styles.tipsTitle}><b>Substitution Therapy</b></Text>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips:</Text>
        {tips.map((tip, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`Tip ${index + 1} pressed!`)} activeOpacity={0.7}>
            <Text style={styles.tipText}>{`${index + 1}. ${tip}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wordsContainer}>
        <Text style={styles.wordsTitle}>Original Word:Word with Substitution</Text>
        {wordsWithSubstitution.map((sentence, index) => (
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
    backgroundColor: '#ffcc99', // Light orange background color
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

export default SubstitutionPage;
