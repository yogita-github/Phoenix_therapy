import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleStartStopCamera = async () => {
    if (cameraRef.current) {
      if (cameraRef.current.status === 'READY') {
        try {
          if (cameraRef.current.status === 'STOPPED') {
            await cameraRef.current.resumePreview();
            
          } else {
            await cameraRef.current.pausePreview();
          }
        } catch (error) {
          console.error('Error toggling camera:', error);
        }
      }
    }
  };

  const handleCameraTypeToggle = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.header}>
        {/* Home Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
          <Image
            style={{ width: 30, height: 30, marginBottom: 5 }}
            source={require("../../assets/homeicon.jpeg")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Camera
          ref={cameraRef}
          style={{ flex: 1, aspectRatio: 1 }}
          type={type}
          ratio="1:1"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={handleCameraTypeToggle}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                Flip
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={handleStartStopCamera}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {cameraRef.current?.status === 'STOPPED' ? 'Start' : 'Stop'}
              </Text>
            </TouchableOpacity> */}
          </View>
        </Camera>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 30,
    height: 30,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 278,
  },
});

export default CameraScreen;
