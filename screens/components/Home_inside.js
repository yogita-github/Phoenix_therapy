import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const HomeSide = () => {
  return (
    <>
      <View style={{ backgroundColor: "#FFF2CC" }}>
        <View style={styles.container}>
          <Text style={styles.homeText}>Home</Text>

          <Text style={styles.heading}>
            {" "}
            Therapy provided in different ways
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/games.png")}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Games
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/activities.png")}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Activities
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/Peer-to-Peer.png")}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Peer-to-Peer
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/Exercise.png")}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Exercise
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    
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
