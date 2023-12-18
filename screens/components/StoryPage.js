// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Audio } from 'expo-av';

// const StoryPage = () => {
//   const [sound, setSound] = useState();

//   const playSound = async () => {
//     try {
//       const { sound } = await Audio.Sound.createAsync(
//         require('../assets/song.wav') // Adjust the path accordingly
//       );
//       setSound(sound);
//       await sound.playAsync();
//     } catch (error) {
//       console.error('Error loading sound', error);
//     }
//   };

//   const playAll = async () => {
//     for (const sentence of storyData) {
//       await playSound();
//       // Optionally, add a delay between sentences
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   };

//   const renderStoryItem = (sentence, showButton) => (
//     <View style={styles.storyContainer}>
//       {showButton && (
//         <TouchableOpacity style={styles.playButton} onPress={playSound}>
//           <Text style={styles.playButtonText}>Play</Text>
//         </TouchableOpacity>
//       )}
//       <View style={styles.sentenceBox}>
//         <Text style={styles.sentence}>{sentence}</Text>
//       </View>
//       {!showButton && (
//         <TouchableOpacity style={styles.playButton} onPress={playSound}>
//           <Text style={styles.playButtonText}>Play</Text>
//         </TouchableOpacity>
//       )}


//     </View>
//   );

//   const storyData = [
//     'First sentence about the story goes here.',
//     'Second sentence about the story goes here.',
//     'Third sentence about the story goes here.',
//     '4 sentence about the story goes here.',
//     '5 sentence about the story goes here.',
//     '6 sentence about the story goes here.',
//     '7 sentence about the story goes here.',
//     '8 sentence about the story goes here.',
//     // Add more sentences as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Stories</Text>
//       <TouchableOpacity style={styles.playAllButton} onPress={playAll}>
//         <Text style={styles.playAllButtonText}>Play All</Text>
//       </TouchableOpacity>
//       {storyData.map((sentence, index) => (
//         <View key={index} style={index % 2 === 0 ? styles.storyContainer : styles.reverseStoryContainer}>
//           {renderStoryItem(sentence, index % 2 === 0)}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   storyContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   reverseStoryContainer: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sentenceBox: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'orange',
//     borderRadius: 8,
//     padding: 10,
//     marginLeft: 10,
//     backgroundColor: 'white',
//     shadowColor: 'yellow',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.8,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   sentence: {
//     fontSize: 16,
//   },
//   playButton: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   playButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   playAllButton: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: 'grey',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   playAllButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default StoryPage;


// //2nd Story







import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const StoriesPage = ({ navigation }) => {
  const storyNames = [
    "शेर और चूहा",
    "लकड़हारा और सुनहरी कुल्हाड़ी की कहानी",
    "किसान और सांप की कहानी",
    "भेड़िया और सारस की कहानी",
    "लोमड़ी और बकरी की कहानी",
    "हाथी और उसके दोस्त की काहानी",
    "चींटी और कबूतर की कहानी",
    "लोमड़ी और अंगूर",
  ];

  return (
    <ScrollView>
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
        <Text style={styles.heading}>Stories</Text>
        {storyNames.map((name, index) => (
          <View key={index + 1} style={styles.buttonContainer}>
            <View style={styles.buttonNumberContainer}>
              <Text
                style={styles.buttonNumber}
                onPress={() => navigation.navigate("S2")}
              >
                {index + 1}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("S2")}
            >
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>


          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Change the background color of the page
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonNumberContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'darkorange', // Yellow background for number container
    borderRadius: 50, // Make it a circle
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d35400', // Dark border color for number container
    marginRight: 10,
  },
  buttonNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Use white color for the number
  },
  button: {
    width: 250,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#ff8c00', // Fresh orange background for button
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#d35400', // Dark orange border color for button
    shadowColor: '#f4d03f', // Yellow shadow color
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // Use white color for the button text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text within the button
  },
});

export default StoriesPage;


