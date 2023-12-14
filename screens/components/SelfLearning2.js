import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SelfLearning2 = ({ navigation }) => {
  return (
    <>
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
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/selflogo.jpeg")}
            style={styles.image}
          />
        </View>

        <Text style={styles.heading}>Improve yourself</Text>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 5,
              padding: 10,
            }}
          >
            <Image
              source={require("../../assets/Mirrorlogo.jpeg")}
              style={{
                width: "60%",
                height: 100,
                borderRadius: 7,
                marginBottom: 10,
                alignSelf:'center'
              }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("CameraScreen")}
            >
              {" "}
              Mirror Therapy
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 5,
              padding: 10,
            }}
          >
            <Image
              source={require("../../assets/Agelogo.jpeg")}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("AgeTherapy")}
            >
              {" "}
              Age Therapy
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default SelfLearning2;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 to make the container take the full height
    justifyContent: "flex-start", // Align items from the top
    alignItems: "center",
    paddingTop: 50, // Adjust top padding to create space from the top
    backgroundColor: "#FFFBEF",
  },
  imageContainer: {
    width: 200,
    height: 150,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
});
