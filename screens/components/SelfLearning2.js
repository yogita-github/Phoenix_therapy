// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import React from 'react';

// const SelfLearning2 = ({ navigation }) => {
//   return (
//     <>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.navigate('LetsStart')}>
//             <Image
//               source={require('../../assets/homeicon.jpeg')}
//               style={{
//                 width: 30,
//                 height: 30,
//                 marginLeft: 278,
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/selflogo.jpeg')}
//             style={styles.image}
//           />
//         </View>

//         <Text style={styles.heading}>Improve yourself</Text>

//         <View style={styles.rowContainer}>
//           <TouchableOpacity
//             style={styles.therapyContainer}
//             onPress={() => navigation.navigate('CameraScreen')}
//           >
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={require('../../assets/mirrorlogo.png')}
//                 style={{
//                   width: '60%',
//                   height: 100,
//                   borderRadius: 7,
//                   marginBottom: 10,
//                 }}
//               />
//               <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                 Mirror Therapy
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.therapyContainer}
//             onPress={() => navigation.navigate('AgeTherapy')}
//           >
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={require('../../assets/Agelogo.png')}
//                 style={{
//                   width: '100%',
//                   height: 100,
//                   borderRadius: 5,
//                   marginBottom: 10,
//                 }}
//               />
//               <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                 Age Therapy
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// export default SelfLearning2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 50,
//     backgroundColor: '#FFFBEF',
//   },
//   imageContainer: {
//     width: 200,
//     height: 150,
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   therapyContainer: {
//     flex: 1,
//     backgroundColor: '#FBB718',
//     borderRadius: 5,
//     margin: 5,
//     padding: 10,
//   },
// });
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

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

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.therapyContainer}
            onPress={() => navigation.navigate("CameraScreen")}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/mirrorlogo.png")}
                style={{
                  width: "60%",
                  height: 100,
                  borderRadius: 7,
                  marginBottom: 10,
                }}
              />
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Mirror Therapy
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.therapyContainer}
            onPress={() => navigation.navigate("AgeTherapy")}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/Agelogo.png")}
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              />
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Age Therapy
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* New Box */}
        <TouchableOpacity
          style={styles.therapyContainer}
          onPress={() => navigation.navigate("Therapy")}
        >
          <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
            <Image
              source={{
                uri: "https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oQI2kEyBbKn9TqmbzgE7SbfDDAABuoNAhc6ADl~tplv-tej9nj120t-origin.webp",
              }}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Therapy")}
            >
              Articulation Therapies
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SelfLearning2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  therapyContainer: {
    flex: 1,
    backgroundColor: "#FBB718",
    borderRadius: 5,
    margin: 5,
    marginBottom:20,
    padding: 10,
  },
});
