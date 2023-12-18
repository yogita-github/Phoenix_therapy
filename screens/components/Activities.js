// Import necessary React Native components
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

// Function to create the Activity Page
const Activities = ({navigation}) => {
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
      <Text style={styles.heading}> Activities</Text>

      <TouchableOpacity
        style={styles.activityButton}
        onPress={() => navigation.navigate('LettersPage')}
        activeOpacity={0.7}
      >
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("LettersPage")}
        >
          Varnamala
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.activityButton}
        onPress={() => navigation.navigate('Barakhadi')}
        activeOpacity={0.7}
      >
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Barakhadi")}
        >
          Barakhadi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activityButton} activeOpacity={0.7}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("WordsPage")}
        >
          Words
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activityButton} activeOpacity={0.7}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Sentence")}
        >
          Sentences
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activityButton} activeOpacity={0.7}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Idioms")}
        >
          Idioms
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activityButton} activeOpacity={0.7}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("StoryPage")}
        >
          Stories
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // White background
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFA500', // Orange text color
  },
  activityButton: {
    backgroundColor: '#fff', // White background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%', // Make the buttons take up 80% of the width
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFA500', // Orange border color
    shadowColor: '#FFA500', // Orange shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3, // Add a shadow effect
  },
  buttonText: {
    color: '#FFA500', // Orange text color
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Activities;
