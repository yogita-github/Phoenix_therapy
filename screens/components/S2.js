import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';

const S2 = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const audioFiles = {
    S2_1: require('../../assets/S2_1.wav'),
    S2_2: require('../../assets/S2_2.wav'),
    S2_3: require('../../assets/S2_3.wav'),
    S2_4: require('../../assets/S2_4.wav'),
    S2_5: require('../../assets/S2_5.wav'),
    // Add more entries as needed
  };

  const playSound = async (audioKey) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audioFiles[audioKey]);
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

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
      {storyData.map((sentence, index) => (
        <View key={index} style={index % 2 === 0 ? styles.storyContainer : styles.reverseStoryContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => playSound(`S2_${index + 1}`)}
          >
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
          <View style={styles.sentenceBox}>
            <Text style={styles.sentence} numberOfLines={5}>
              {sentence}
            </Text>
          </View>
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
    borderColor: 'green',
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    backgroundColor: 'lightgreen',
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
    textAlign: 'justify',
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default S2;
