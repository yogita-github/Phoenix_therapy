// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// const Profile = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuContainer}>
//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBkfLM7mbE5hK-j_QIkWr-r8dbZ6on6Aqag&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5SGxEEopyO4Z66UXbIQm7qCVfrBNxpJpY8Q&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>Daily Progress</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7J71PsMqX4KFEhVYTsP5mHRK0DPHRzegGA&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>Timer</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRXkdChpLmRgvBVczZQKCxFR8yEAUzaEqpg&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>To do</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRXkdChpLmRgvBVczZQKCxFR8yEAUzaEqpg&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>Settings</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuItem}>
//           <Image
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNo77bPtZE4ulAEjry1pKOwFNzVbAgUjXoow&usqp=CAU",
//             }}
//             style={styles.logo}
//           />
//           <Text style={styles.menuText}>LogOut</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.verticalLine}></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#091A2F",
//     padding: 20,
//     flexDirection: "row",
//   },
//   menuContainer: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     marginRight: 20,
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logo: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   menuText: {
//     color: "white",
//     fontSize: 16,
//   },
//   verticalLine: {
//     height: "100%",
//     width: 1,
//     backgroundColor: "white",
//     marginLeft: 20,
//   },
// });

// export default Profile;

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/Profile.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/progress.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Daily Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/Timer.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/todo.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>To do</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/setting.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require("../../assets/logout.png")}
            style={styles.logo}
          />
          <Text style={styles.menuText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091A2F",
    padding: 20,
    flexDirection: "row",
  },
  menuContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  menuText: {
    color: "white",
    fontSize: 16,
  },
});

export default Profile;
