import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const Games = ({ navigation }) => {
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
            source={{
              uri: "https://th.bing.com/th/id/OIP.Me_OQNI91B-TD-KsE8vGpgHaE7?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            }}
            style={styles.image}
          />
        </View>

        <Text style={styles.heading}>Learn while having fun</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FBB718",
            borderRadius: 5,
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("Balloon")}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/cute-giraffe-playing-dj-electronic-music-with-headphone-cartoon-vector-icon-illustration-animal_138676-7791.jpg?size=626&ext=jpg&uid=R97019349&ga=GA1.1.1315413171.1679411364&semt=ais",
            }}
            style={{
              width: "100%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Sound Safari
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FBB718",
            borderRadius: 5,
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("TongueTwister")}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPQxXGeIa1V82w4mJlFvc46kVUHfnKI-a-A&usqp=CAU",
            }}
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
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FBB718",
            borderRadius: 5,
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("QuizGame")}
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
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FBB718",
            borderRadius: 5,
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("ArticulationMaze")}
        >
          <Image
            source={require("../../assets/articulationmaze.png")}
            style={{
              width: "80%",
              height: 100,
              borderRadius: 5,
              marginBottom: 10,
              alignSelf: "center",
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Articulation Maze
          </Text>
        </TouchableOpacity>
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
