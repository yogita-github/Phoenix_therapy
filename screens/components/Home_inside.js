// import React from "react";
// import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';


// const HomeSide = ({ navigation }) => {
//   return (
//     <View style={styles.pageContainer}>
//       <View style={{ backgroundColor: "#FFF2CC" }}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
//               <Image
//                 source={require("../../assets/homeicon.jpeg")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                   alignContent: "flex-end",
//                   justifyContent: "flex-end",
//                   marginLeft: 278,
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.homeText}>Home</Text>
//           <Text style={styles.heading}>
//             Therapy provided in different ways
//           </Text>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <TouchableOpacity
//             style={{
//               flex: 1,
//               backgroundColor: "#FBB718",
//               borderRadius: 5,
//               margin: 10,
//               padding: 5,
//               overflow: "hidden",
//               position: "relative",
//               zIndex: 1,
//               display: "flex",
//               width: 228,
//               maxWidth: "100%",
//               flexDirection: "column",
//               marginTop: 0,
//               marginRight: 19,
//               marginLeft: 19,
//               aspectRatio: 1,
//             }}
//             onPress={() => navigation.navigate("Games")}
//           >
//             <Image
//               source={require("../../assets/games.png")}
//               style={{
//                 width: "100%",
//                 height: 100,
//                 borderRadius: 5,
//                 marginBottom: 10,
//               }}
//             />
//             <Text style={{ textAlign: "center", fontWeight: "bold" }}>
//               Games
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               flex: 1,
//               backgroundColor: "#FBB718",
//               borderRadius: 5,
//               margin: 10,
//               padding: 5,
//               overflow: "hidden",
//               position: "relative",
//               zIndex: 1,
//               display: "flex",
//               width: 228,
//               maxWidth: "100%",
//               flexDirection: "column",
//               marginTop: 0,
//               marginRight: 19,
//               marginLeft: 19,
//               aspectRatio: 1,
//             }}
//             onPress={() => navigation.navigate("Activities")}
//           >
//             <Image
//               source={require("../../assets/activities.png")}
//               style={{
//                 width: "100%",
//                 height: 100,
//                 borderRadius: 5,
//                 marginBottom: 10,
//               }}
//             />
//             <Text style={{ textAlign: "center", fontWeight: "bold" }}>
//               Activities
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{ flexDirection: "row" }}>
//           <TouchableOpacity
//             style={{
//               flex: 1,
//               backgroundColor: "#FBB718",
//               borderRadius: 5,
//               margin: 10,
//               padding: 5,
//               overflow: "hidden",
//               position: "relative",
//               zIndex: 1,
//               display: "flex",
//               width: 228,
//               maxWidth: "100%",
//               flexDirection: "column",
//               marginTop: 0,
//               marginRight: 19,
//               marginLeft: 19,
//               aspectRatio: 1,
//             }}
//             onPress={() => navigation.navigate("PeerInside")}
//           >
//             <Image
//               source={require("../../assets/Peer-to-Peer.png")}
//               style={{
//                 width: "100%",
//                 height: 100,
//                 borderRadius: 5,
//                 marginBottom: 10,
//               }}
//             />
//             <Text style={{ textAlign: "center", fontWeight: "bold" }}>
//               Peer-to-Peer
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               flex: 1,
//               backgroundColor: "#FBB718",
//               borderRadius: 5,
//               margin: 10,
//               padding: 5,
//               overflow: "hidden",
//               position: "relative",
//               zIndex: 1,
//               display: "flex",
//               width: 228,
//               maxWidth: "100%",
//               flexDirection: "column",
//               marginTop: 0,
//               marginRight: 19,
//               marginLeft: 19,
//               aspectRatio: 1,
//             }}
//             onPress={() => navigation.navigate("Exercise")}
//           >
//             <Image
//               source={require("../../assets/Exercise.png")}
//               style={{
//                 width: "100%",
//                 height: 100,
//                 borderRadius: 5,
//                 marginBottom: 10,
//               }}
//             />
//             <Text style={{ textAlign: "center", fontWeight: "bold" }}>
//               Exercise
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     backgroundColor: "#FFF2CC", // Set the yellow background color here
//   },
//   container: {
//     padding: 40,
//     alignItems: "center",
//   },
//   heading: {
//     paddingTop: 30,
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "bold",
//     paddingBottom: "50px",
//   },
//   homeText: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "bold",
//     paddingBottom: "30px",
//   },
// });

// export default HomeSide;

import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons"; // You can replace this with the appropriate icon library
import { useNavigation } from "@react-navigation/native";

const HomeSide = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModalVisible(true);
    }, 4000); // Show the popup after 10 seconds

    return () => clearTimeout(timeoutId); // Cleanup the timer on component unmount
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigateToProPage = () => {
    // Add navigation logic to the Pro version page
    // For example: navigation.navigate('ProPage');
    closeModal();
  };

  return (
    <View style={styles.pageContainer}>
      <View style={{ backgroundColor: "#FFF2CC" }}>
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
          <Text style={styles.homeText}>Home</Text>
          <Text style={styles.heading}>Therapy provided in different ways</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              display: "flex",
              width: 228,
              maxWidth: "100%",
              flexDirection: "column",
              marginTop: 0,
              marginRight: 19,
              marginLeft: 19,
              aspectRatio: 1,
            }}
            onPress={() => navigation.navigate("Games")}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              display: "flex",
              width: 228,
              maxWidth: "100%",
              flexDirection: "column",
              marginTop: 0,
              marginRight: 19,
              marginLeft: 19,
              aspectRatio: 1,
            }}
            onPress={() => navigation.navigate("Activities")}
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
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              display: "flex",
              width: 228,
              maxWidth: "100%",
              flexDirection: "column",
              marginTop: 0,
              marginRight: 19,
              marginLeft: 19,
              aspectRatio: 1,
            }}
            onPress={() => navigation.navigate("PeerInside")}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FBB718",
              borderRadius: 5,
              margin: 10,
              padding: 5,
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              display: "flex",
              width: 228,
              maxWidth: "100%",
              flexDirection: "column",
              marginTop: 0,
              marginRight: 19,
              marginLeft: 19,
              aspectRatio: 1,
            }}
            onPress={() => navigation.navigate("Exercise")}
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
          </TouchableOpacity>
        </View>
      </View>

      {/* Popup Window */}
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Choose an option:</Text>
          <TouchableOpacity
            onPress={navigateToProPage}
            style={styles.optionButton}
          >
            <Icon
              name={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgGY9e1T2eyRXLkTikvB0-QnB19dDBdwYPw&usqp=CAU",
              }}
              size={10}
              color="white"
            />
            <Text style={styles.optionButtonText}>Get Pro Version</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Continue without Pro</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles go here

  // Add the styles from the provided HomeScreen component
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionButtonText: {
    color: "white",
    marginLeft: 10,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "#FFF2CC", // Set the yellow background color here
  },
  container: {
    padding: 40,
    alignItems: "center",
  },
  heading: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: "50px",
  },
  homeText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: "30px",
  },
});

export default HomeSide;

