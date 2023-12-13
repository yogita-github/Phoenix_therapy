import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Audio } from 'expo-av';

const S2 = () => {
  const [sound, setSound] = useState();

  const playSound = async (audioFile) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require(`../../assets/${audioFile}`) // Adjust the path accordingly
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  const playAll = async () => {
    for (let i = 1; i <= storyData.length; i++) {
      const audioFile = `S2_${i}.wav`;
      await playSound(audioFile);
      // Optionally, add a delay between sentences
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  const renderStoryItem = (sentence, showButton, audioFile) => (
    <View style={styles.storyContainer}>
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
      {showButton && (
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => playSound(audioFile)}
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      )}
      <View style={styles.sentenceBox}>
        <Text style={styles.sentence} numberOfLines={5}>
          {sentence}
        </Text>
      </View>
      {!showButton && (
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => playSound(audioFile)}
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const storyData = [
    'एक बार एक शेर सो रहा होता है और एक चूहा उसके ऊपर चढ़ के उसकी नींद को भटका देता है।',
    'शेर उसे गुस्से में पकड़ लेता है और उसे खाने लगता है पर चूहा उसे कहता है की, “आप अगर मुझे छोड़ दोगे तो में आपकी किसी दिन मदद जरूर करूँगा।”',
    'यह सुनके शेर हँसता है और उसे छोड़ देता है।',
    'कुछ दिन बाद कुछ शिकारी शेर को जाल में कैद कर लेते हैं और शेर ज़ोर ज़ोर से चिल्लाने लगता है उसकी आवाज़ चूहा पहचान लेता है और भागता हुआ उसके पास आता है और शेर के जाल को काट के शेर को आज़ाद कर देता है।',
    'नैतिक शिक्षा: दया अपना इनाम ज़रूर लाती है, कोई इतना छोटा नहीं है कि यह वह मदद नहीं कर सकता।',
    // Add more sentences as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stories</Text>
      <TouchableOpacity style={styles.playAllButton} onPress={playAll}>
        <Text style={styles.playAllButtonText}>Play All</Text>
      </TouchableOpacity>
      {storyData.map((sentence, index) => (
        <View key={index} style={index % 2 === 0 ? styles.storyContainer : styles.reverseStoryContainer}>
          {renderStoryItem(sentence, index % 2 === 0, `S2_${index + 1}.wav`)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      storyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      reverseStoryContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
      },
      sentenceBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'green', // Change to your preferred shade of green
        borderRadius: 8,
        padding: 10,
        marginLeft: 10,
        backgroundColor: 'lightgreen', // Change to your preferred shade of green
        shadowColor: 'yellow',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
      },
      sentence: {
        fontSize: 16,
        textAlign: 'justify', // Align text to justify
      },
      playButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'green', // Change to your preferred shade of green
        justifyContent: 'center',
        alignItems: 'center',
      },
      playButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      playAllButton: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'darkgreen', // Change to your preferred shade of green
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      playAllButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }, 
});

export default S2;
