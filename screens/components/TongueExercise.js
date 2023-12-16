// TongueExercisePage.js
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Collapsible from "react-native-collapsible";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBEF",
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: "#3498db", // Change the color as needed
  },
  exerciseContainer: {
    marginBottom: 16,
    backgroundColor: "#ecf0f1", // Change the color as needed
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#bdc3c7", // Change the color as needed
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#3498db", // Change the color as needed
  },
  exerciseImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  exerciseProcedure: {
    fontSize: 16,
    marginTop: 10,
    color: "#2c3e50", // Change the color as needed
  },
});

const CollapsibleComponent = ({ title, imageSource, procedure }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <>
    <View style={styles.exerciseContainer}>
    
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.exerciseTitle}>{title}</Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <Image source={imageSource} style={styles.exerciseImage} />
        <Text style={styles.exerciseProcedure}>{procedure}</Text>
      </Collapsible>
    </View>
    </>
  );
};

const TongueExercise = ({navigation}) => {
  return (<><View style={styles.header}>
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
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tongue Exercise</Text>

      <CollapsibleComponent
        title=" Click on Tongue Tip Up"
        imageSource={{
          uri: "https://media.istockphoto.com/id/499206620/photo/goofy.jpg?s=612x612&w=0&k=20&c=97Dz_X6YIemhyVdtzG6DJRaWD59LcXW8H2suy88jdKM=",
        }}
        procedure="Procedure:
1.Place tongue on the bumpy area behind your top teeth or gumline.
2.Open mouth as wide as possible with tongue tip firmly in place. Still complete this exercise even if the tip of your tongue does not reach the top of your mouth.
3.Hold for 5 seconds.
4.Relax and Repeat 5 times."
      />
      <CollapsibleComponent
        title="Click on Tongue Extension"
        imageSource={{
          uri: "https://media.istockphoto.com/id/626198482/photo/womans-tongue.jpg?s=612x612&w=0&k=20&c=Cr2buKehvGqT1QjYa4vFZWAw5HPkZNYr24I61W7bj-U=",
        }}
        procedure="Procedure:
1.Stick your tongue out as far as you can.
2.Hold your tongue steady and straight for 5 seconds.
3.Relax and Repeat 5 times."
      />
      <CollapsibleComponent
        title="Click on Tongue Retraction"
        imageSource={{
          uri: "https://media.istockphoto.com/id/491242054/photo/fury.jpg?s=612x612&w=0&k=20&c=rqirGI8BR746A9CRvUU19yDt3dv5s2kDNM1L54LCE54=",
        }}
        procedure="Procedure:
1.Pull back your tongue as far as it will go. Imagine you are trying to touch the back of your tongue to the roof of your mouth (as if making a /k/ sound).
2.Hold for 5 seconds.
3.Relax and Repeat 5 times."
      />

      <CollapsibleComponent
        title=" Click on Tongue Side To Side"
        imageSource={{
          uri: "https://media.istockphoto.com/id/1484687935/photo/child-face-with-tongue-out-to-left-side-cropped-head-caucasian-little-girl-of-6-7-years-on.jpg?s=612x612&w=0&k=20&c=ZmHifRWOd56kUFxvLmIltu44Kva9Oxn41pP3WywDPSU=",
        }}
        procedure="Procedure:

1.Stick tongue out. Move your tongue tip to left side of mouth, reach as far as it will go. Hold for 5 seconds.
2.Move your tongue tip to right side of mouth, reach as far as it will go. Hold for 5 seconds.
3.Relax and Repeat 5 times."
      />
    </ScrollView>
    </>
  );
};

export default TongueExercise;
