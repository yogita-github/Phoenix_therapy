import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Therapy = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('NextPage');
  };

  return (
    <ScrollView>
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
        <Text style={styles.heading}>Wrong words detected</Text>

        <View style={styles.yellowBoxesContainer}>
          <View style={styles.yellowBox}>
            <Text style={styles.whiteText}>आझ</Text>
          </View>
          <View style={styles.yellowBox}>
            <Text style={styles.whiteText}>अच्च्या</Text>
          </View>
          <View style={styles.yellowBox}>
            <Text style={styles.whiteText}>धिन</Text>
          </View>
        </View>

        <View style={styles.whiteBoxesContainer}>
          <View style={styles.whiteBox}>
            <Text style={styles.whiteText}>झ</Text>
          </View>
          <View style={styles.whiteBox}>
            <Text style={styles.whiteText}>छ</Text>
          </View>
          <View style={styles.whiteBox}>
            <Text style={styles.whiteText}>ध</Text>
          </View>
        </View>

        <Text style={styles.subHeading}>Suggested Therapy using AI</Text>

        <View style={styles.yellowBoxesContainer}>
          <TouchableOpacity style={styles.imageBox} onPress={() => navigation.navigate("SubstitutionPage")}>
            <Image
              source={require("../../assets/Substitution.png")}
              style={styles.image}
            />
            <Text style={styles.whiteText}>Substitution</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageBox} onPress={() => navigation.navigate("OmissionPage")}>
            <Image
              source={require("../../assets/Omission.png")}
              style={styles.image}
            />
            <Text style={styles.whiteText}>Omission</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.yellowBoxesContainer}>
          <TouchableOpacity style={styles.imageBox} onPress={() => navigation.navigate("AdditionPage")}>
            <Image
              source={require("../../assets/Addition.png")}
              style={styles.image}
            />
            <Text style={styles.whiteText}>Addition</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageBox} onPress={() => navigation.navigate("DistortionPage")}>
            <Image
              source={require("../../assets/Distortion.png")}
              style={styles.image}
            />
            <Text style={styles.whiteText}>Distortion</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.yellowButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  yellowBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  yellowBox: {
    backgroundColor: "#FBB718",
    padding: 2,
    margin: 5,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  whiteBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  whiteBox: {
    backgroundColor: "white",
    padding: 4,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FBB718",
    flex: 1,
    color: "black",
    alignItems: "center",
  },
  whiteText: {
    color: "black",
    fontWeight:"bold",
    paddingTop:-30,
    paddingBottom:15,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  imageBox: {
    backgroundColor: "#FBB718",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  yellowButton: {
    backgroundColor: "#FBB718",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Therapy;