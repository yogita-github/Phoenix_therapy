import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const SelfLearning2 = () => {
  return (
    <>
      <View style={styles.container}>
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
                width: "100%",
                height: 100,
                borderRadius: 7,
                marginBottom: 10,
              }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("MirrorTherapy")}
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
              
            
              > Age Therapy
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default SelfLearning2

const styles = StyleSheet.create({
    container: {
        padding: 100,
        alignItems: "center",
        backgroundColor: "#FFFBEF",
        
        
      },
      imageContainer: {
        width: 200,
        height: 150,
        borderRadius: 5,
        overflow: "hidden",
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        
      },
      heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop:100,
      },
})