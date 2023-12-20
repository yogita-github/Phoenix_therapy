import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  // TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { Video as ExpoVideo } from 'expo-av';
// import { Audio } from 'expo-av';

const LetterDetail = ({ route }) => {
  const { letter } = route.params;
  const [showWords2, setShowWords2] = useState(false);
  const [showSentences, setShowSentences] = useState(false);

  // const playAudio = async (audio) => {
  //   try {
  //     const { sound } = await Audio.Sound.createAsync(
  //       { uri: `http://192.168.43.65:1000/uploads/audio/${audio}` },
  //       { shouldPlay: true }
  //     );
  //   } catch (error) {
  //     console.error('Error playing audio:', error);
  //   }
  // };

  const buttonStyle = {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 10,
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.letterText}>{letter.letter}</Text>
      {/* <View style={styles.wordContainer}>
        {letter.words.map((word, index) => (
          <View key={index} style={styles.wordButtonContainer}>
            <TouchableOpacity onPress={() => playAudio(word.audio)}>
              <View style={buttonStyle}>
                <Text>{word.word}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View> */}
    
      {letter.image && (
        <Image
          source={{ uri: `http://192.168.43.65:1000/uploads/images/${letter.image}` }}
          style={styles.image}
        />
      )}
      {letter.video && (
        <ExpoVideo
          source={{ uri: `http://192.168.43.65:1000/uploads/videos/${letter.video}` }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          shouldPlay
          isLooping
          isMuted={false}
        />
      )}

      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={buttonStyle}
          onPress={() => {
            setShowWords2(true);
            setShowSentences(false);
          }}
        >
          <Text>Words</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={buttonStyle}
          onPress={() => {
            setShowWords2(false);
            setShowSentences(true);
          }}
        >
          <Text>Sentences</Text>
        </TouchableHighlight>
      </View>
      {showWords2 && (
        <Text style={styles.sentencesText}>{letter.words2.join('\n')}</Text>
      )}
      {showSentences && (
        <Text style={styles.sentencesText}>
          {letter.sentences.map((sentence) => sentence + '\n')}
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white', // Set the background color to white
  },
  letterText: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '60%',
    height: 130,
    marginBottom: 20,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  sentencesText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15, 
    marginBottom: 20,
    lineHeight: 35,
    alignSelf: 'stretch',
    // textAlign: 'center',
    color: '#333',
  },
  // wordContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  // },
  // wordButtonContainer: {
  //   margin: 8,
  //   marginBottom: 50,
  // },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default LetterDetail;
