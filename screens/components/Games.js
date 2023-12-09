import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


const Games = () => {
    
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1657302155485-790b74d0b5d1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
        </View>

        <Text style={styles.heading}>Learn while having fun</Text>
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
            Balloon Game
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
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPQxXGeIa1V82w4mJlFvc46kVUHfnKI-a-A&usqp=CAU"}}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Tongue Twister
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
            source={require("../../assets/quizsound.png")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Quiz Sound
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
            source={require("../../assets/articulationmaze.png")}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Articulation Maze
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
  imageContainer: {
    width: 300,
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
  },
});


export default Games;
