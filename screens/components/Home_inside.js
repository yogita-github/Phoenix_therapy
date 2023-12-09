import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const HomeSide = () => {
  return (
    <>
      <View style={styles.container}>
       
          <Text style={styles.homeText}>Home</Text>
          
        <Text style={styles.heading}> Therapy provided in different ways</Text>
      </View>

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
            source={require("../../assets/balloon.jpg")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Heading 1
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
            source={require("../../assets/pronounce.jpg")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Heading 2
          </Text>
        </View>
      </View>

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
            source={require("../../assets/quizSound.jpg")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Heading 3
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
            source={require("../../assets/articulationmaze.jpg")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Heading 4
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFF2CC",
  },
 
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom:"50px"
  },
  homeText: {
    fontSize: 18, // Set your desired font size
    fontWeight: "bold", // Set your desired font weight
    textAlign: "center",
    paddingBottom:"30px",
  },
  
});

export default HomeSide;
