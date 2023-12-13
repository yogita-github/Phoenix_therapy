import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";



const HomeSide = ({navigation}) => {
   
  return (
    <>
      <View style={{ backgroundColor: "#FFF2CC" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* Home Icon */}
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
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Games")}
            >
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
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Activities")}
            >
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
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("PeerInside")}
            >
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
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Exercise")}
            >
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
    paddingBottom: "50px",
  },
  homeText: {
    fontSize: 18, // Set your desired font size
    fontWeight: "bold", // Set your desired font weight
    textAlign: "center",
    paddingBottom: "30px",
  },
  profileIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
  },
  video: {
    width: "100%",
    height: 300,
  },
});

export default HomeSide;
