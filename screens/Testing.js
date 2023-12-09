import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import jsonData from '../data'; // Import your JSON file

export default function Testing() {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [currentAction, setCurrentAction] = useState('start');
  const [responseText, setResponseText] = useState('');
  const [randomData, setRandomData] = useState(getRandomData());

  function getRandomData() {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    return jsonData[randomIndex];
  }

  const handleRefresh = () => {
    clearRecordings();
    setRandomData(getRandomData());
  };

  useEffect(() => {
    handleRefresh();
  }, []); 

  const handlePostRecording = async () => {
    try {
      const backendUrl = 'https://example.com/upload';
      const fileUri = recordings.length > 0 ? recordings[recordings.length - 1].file : null;

      if (fileUri) {
        const formData = new FormData();
        formData.append('audio', {
          uri: fileUri,
          name: 'audio.wav',
          type: 'audio/wav',
        });

        const response = await fetch(backendUrl, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setResponseText(`${JSON.stringify(responseData)}`);
        } else {
          console.error('Failed to post recording:', response.status);
          setResponseText('Error posting recording.');
        }
      } else {
        console.warn('No recording available to post.');
        setResponseText('No recording available to post.');
      }
    } catch (error) {
      console.error('Error posting recording:', error);
      setResponseText('Error posting recording.');
    }
  };

  async function handleButtonPress() {
    switch (currentAction) {
      case 'start':
        await startRecording();
        setCurrentAction('stop');
        break;
      case 'stop':
        await stopRecording();
        setCurrentAction('clear');
        break;
      case 'clear':
        clearRecordings();
        setCurrentAction('start');
        break;
      default:
        break;
    }
  }

  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      }
    } catch (err) {}
  }

  async function stopRecording() {
    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    allRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(allRecordings);
  }

  function getDurationFormatted(milliseconds) {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => (
      <View key={index} style={styles.row}>
        <TouchableOpacity
          onPress={() => recordingLine.sound.replayAsync()}
          style={styles.playButton}
        >
          <FontAwesome name="play" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.fill}>
          Recording #{index + 1} | {recordingLine.duration}
        </Text>
      </View>
    ));
  }

  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleButtonPress}
        style={[
          styles.button,
          { backgroundColor: getButtonColor(currentAction) },
        ]}
      >
        {currentAction === 'start' && (
          <FontAwesome name="microphone" size={100} color="white" />
        )}
        {currentAction === 'stop' && (
          <FontAwesome name="stop" size={80} color="white" />
        )}
        {currentAction === 'clear' && (
          <FontAwesome name="trash" size={100} color="white" />
        )}
      </TouchableOpacity>
      <View style={styles.randomDataRow}>
        <Text style={styles.randomDataText}>{randomData}</Text>
      </View>
      <Text style={styles.noticeText}>*click on mic and read the text loudly</Text>
      
      {getRecordingLines()}
      <TouchableOpacity
        onPress={handlePostRecording}
        style={styles.postButton}
      >
        <Text style={styles.postButtonText}>Test Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
        <FontAwesome name="refresh" size={30} color="black" />
      </TouchableOpacity>
      
      <TextInput
        style={styles.responseText}
        value={responseText}
        editable={false}
        multiline
      />
    </View>
  );
}

const getButtonColor = (action) => {
  switch (action) {
    case 'start':
      return '#2ecc71';
    case 'stop':
      return '#e74c3c';
    case 'clear':
      return '#FBB718';
    default:
      return '#FBB718';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    padding: 15,
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: '#2ecc71',
  },
  row: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  fill: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#2c3e50',
  },
  playButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#FBB718',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  responseText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    backgroundColor: '#ecf0f1',
    marginTop: 5,
    padding: 10,
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  noticeText: {
    flex: 1,
    textAlign:"center",
    color: 'green',
    backgroundColor: '#ecf0f1',
    padding: 10,
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  refreshButton: {
    marginTop: 10,
    paddingRight:20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  randomDataRow: {
    marginTop: 10,
  },
  randomDataText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
