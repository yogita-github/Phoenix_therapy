// import React, { useState } from "react";
// import { View, Text,TouchableOpacity, Image, StyleSheet, Picker } from "react-native";

// const AgeTherapy = () => {
//   const [selectedAgeCategory, setSelectedAgeCategory] = useState("small");

//   const ageCategories = [
//     { label: "0-15 years", value: "small" },
//     { label: "16-30 years", value: "medium" },
//     { label: "31-60 years", value: "big" },
//   ];

//   const smallAgeWords = [
//     { word: "संगीत", image: require("../../assets/beautiful-1791929_640.jpg") },
//     { word: "माँ", image: require("../../assets/mother-3389671_640.jpg") },
//     { word: "हरा", image: require("../../assets/leaf-176722_640.jpg") },
//     { word: "घर", image: require("../../assets/office-730681_640.jpg") },
//   ];

//   const mediumAgeWords = [
//     { word: "रात्रि", image: require("../../assets/night-3115977_640.jpg") },
//     { word: "संतरा", image: require("../../assets/oranges-1995079_640.jpg") },
//     { word: "पीयर से पीयर", image: require("../../assets/Peer-to-Peer.png") },
//     { word: "टेलीविजन", image: require("../../assets/tv-627876_640.jpg") },
//   ];

//   const bigAgeWords = [
//     { word: "गुब्बारा", image: require("../../assets/balloon.jpg") },
//     { word: "कुत्ता", image: require("../../assets/puppy-1903313_640.jpg") },
//     { word: "व्यायाम", image: require("../../assets/Exercise.png") },
//     {
//       word: "मोबाइल फ़ोन",
//       image: require("../../assets/smartphone-1894723_640.jpg"),
//     },
//   ];

//   const wordsByAge = {
//     small: smallAgeWords,
//     medium: mediumAgeWords,
//     big: bigAgeWords,
//   };

//   const handleChangeAgeCategory = (value) => {
//     setSelectedAgeCategory(value);
//   };

//   return (
//     <View style={styles.container}>
    
//       <View style={styles.header}>
//         {/* Home Icon */}
//         <TouchableOpacity onPress={() => navigation.navigate("HomeSide")}>
//           <Image
//             source={require("../../assets/homeicon.jpeg")}
//             style={{
//               width: 30,
//               height: 30,
//               alignContent: "flex-end",
//               justifyContent: "flex-end",
//               marginLeft: 278,
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.dropdownContainer}>
//         <Picker
//           selectedValue={selectedAgeCategory}
//           onValueChange={(itemValue) => handleChangeAgeCategory(itemValue)}
//           style={styles.dropdown}
//         >
//           {ageCategories.map((category) => (
//             <Picker.Item
//               key={category.value}
//               label={category.label}
//               value={category.value}
//             />
//           ))}
//         </Picker>
//       </View>

//       <Text style={styles.heading}>Word Pronunciation</Text>
//       <Text style={styles.smallFont}>
//         Use the below pictures to help you better pronounce the given words.
//       </Text>

//       <View style={styles.wordsContainer}>
//         {wordsByAge[selectedAgeCategory].map((wordItem, index) => (
//           <View key={index} style={styles.wordContainer}>
//             <Image source={wordItem.image} style={styles.image} />
//             <Text style={styles.word}>{wordItem.word}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ffffcc", // Background color changed to pale yellow
//     padding: 20, // Added 20px padding to the full page container
//   },
//   dropdownContainer: {
//     borderColor: "yellow",
//     borderWidth: 2,
//     borderRadius: 10, // Added border radius
//     marginBottom: 20,
//     overflow: "hidden", // Hide overflow for border radius
//   },
//   dropdown: {
//     height: 50,
//     width: 200,
//     color: "black",
//     borderRadius: 10, // Added border radius
//     padding: 10, // Added padding
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center", // Heading alignment centered
//   },
//   smallFont: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center", // Paragraph alignment centered
//   },
//   wordsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   wordContainer: {
//     alignItems: "center",
//     marginBottom: 10,
//     marginRight: 20, // Added margin between word containers
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//     borderRadius: 10, // Added border radius
//   },
//   word: {
//     fontSize: 18,
//   },
// });

// export default AgeTherapy;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const AgeTherapy = ({navigation}) => {
  const [selectedAgeCategory, setSelectedAgeCategory] = useState("small");

  const ageCategories = [
    { label: "0-15 years", value: "small" },
    { label: "16-30 years", value: "medium" },
    { label: "31-60 years", value: "big" },
  ];

  const smallAgeWords = [
    { word: "संगीत", image: require("../../assets/beautiful-1791929_640.jpg") },
    { word: "माँ", image: require("../../assets/mother-3389671_640.jpg") },
    { word: "हरा", image: require("../../assets/leaf-176722_640.jpg") },
    { word: "घर", image: require("../../assets/office-730681_640.jpg") },
  ];

  const mediumAgeWords = [
    { word: "रात्रि", image: require("../../assets/night-3115977_640.jpg") },
    { word: "संतरा", image: require("../../assets/oranges-1995079_640.jpg") },
    { word: "पीयर से पीयर", image: require("../../assets/Peer-to-Peer.png") },
    { word: "टेलीविजन", image: require("../../assets/tv-627876_640.jpg") },
  ];

  const bigAgeWords = [
    { word: "गुब्बारा", image: require("../../assets/balloon.jpg") },
    { word: "कुत्ता", image: require("../../assets/puppy-1903313_640.jpg") },
    { word: "व्यायाम", image: require("../../assets/Exercise.png") },
    {
      word: "मोबाइल फ़ोन",
      image: require("../../assets/smartphone-1894723_640.jpg"),
    },
  ];

  const wordsByAge = {
    small: smallAgeWords,
    medium: mediumAgeWords,
    big: bigAgeWords,
  };

  const handlePressAgeCategory = (value) => {
    setSelectedAgeCategory(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Home Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ageButtonsContainer}>
        {ageCategories.map((category) => (
          <TouchableOpacity
            key={category.value}
            style={[
              styles.ageButton,
              {
                backgroundColor:
                  selectedAgeCategory === category.value
                    ? "#ffcc00"
                    : "#e0e0e0",
              },
            ]}
            onPress={() => handlePressAgeCategory(category.value)}
          >
            <Text>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Word Pronunciation</Text>
      <Text style={styles.smallFont}>
        Use the below pictures to help you better pronounce the given words.
      </Text>

      <View style={styles.wordsContainer}>
        {wordsByAge[selectedAgeCategory].map((wordItem, index) => (
          <View key={index} style={styles.wordContainer}>
            <Image source={wordItem.image} style={styles.image} />
            <Text style={styles.word}>{wordItem.word}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffcc",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  homeIcon: {
    width: 30,
    height: 30,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 278,
  },
  ageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  ageButton: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  smallFont: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  wordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wordContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  word: {
    fontSize: 18,
  },
});

export default AgeTherapy;
