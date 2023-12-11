// screens/VideoPage.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';
import videos from '../videos.json';

// Assuming that videos and images are in the 'assets' directory
const videoAssets = {
  'video1.mp4': require('../assets/videos/video1.mp4'),
  'video2.mp4': require('../assets/videos/video2.mp4'),
  // Add more videos as needed
};

const imageAssets = {
  'image1.jpg': require('../assets/images/image1.jpg'),
  'image2.jpg': require('../assets/images/image2.jpg'),
  // Add more images as needed
};

const VideoPage = ({ route }) => {
  const { id } = route.params;
  const selectedVideo = videos.find((video) => video.id === id);
  console.log('Selected Video URL:', selectedVideo.url);
  console.log('Video Asset:', videoAssets[selectedVideo.url]);

  // Add the image URL based on your data structure
  const selectedImage = imageAssets[selectedVideo.image];

  return (
    <View style={styles.container}>
      <Text style={styles.videoName}>{selectedVideo.name}</Text>
      <Image source={selectedImage} style={styles.image} />
      <Video
        source={videoAssets[selectedVideo.url]}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
        isMuted={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoName: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  video: {
    width: 350,
    height: 200,
    marginTop: 20,
  },
});

export default VideoPage;
