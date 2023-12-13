import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";

const VarnamalaPage = () => {
  const swarData = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ"];
  const vyanjanData = [
    "क",
    "ख",
    "ग",
    "घ",
    "ङ",
    "च",
    "छ",
    "ज",
    "झ",
    "ञ",
    "ट",
    "ठ",
    "ड",
    "ढ",
    "ण",
    "त",
    "थ",
    "द",
    "ध",
    "न",
    "प",
    "फ",
    "ब",
    "भ",
    "म",
    "य",
    "र",
    "ल",
    "व",
    "श",
    "ष",
    "स",
    "ह",
  ];

  const renderItems = (data, type) => (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <View style={styles.squareContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.square}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
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
      {renderItems(swarData, "Swar")}
      {renderItems(vyanjanData, "Vyanjan")}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:5,
    marginRight:5,
    backgroundColor:"#FFFBEF",
  },
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  squareContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  square: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "yellow",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign:"center",
  },
});

export default VarnamalaPage;
