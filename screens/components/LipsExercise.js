// LipsExercisePage.js
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
     backgroundColor: '#5FFAF3',
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    textAlign: "center",
    
  },
  exerciseContainer: {
    marginBottom: 16,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign:"center",
  },
  exerciseImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
  },
  exerciseProcedure: {
    fontSize: 16,
  },
});

const CollapsibleComponent = ({ title, imageSource, procedure }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <View style={styles.exerciseContainer}>
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.exerciseTitle}>{title}</Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <Image source={imageSource} style={styles.exerciseImage} />
        <Text style={styles.exerciseProcedure}>{procedure}</Text>
      </Collapsible>
    </View>
  );
};

const LipsExercise = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Lips Exercise</Text>
      <CollapsibleComponent
        title="Click on Lip Press"
        imageSource={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIjXw2fsekd7Rzjs_Q5mar8H8TOwLyaEh9w&usqp=CAU",
        }}
        procedure="Procedure:
1.Press lips tightly together for 5 seconds.
2.Relax and repeat 5 times."
      />

      <CollapsibleComponent
        title="Click on Puff Cheeks"
        imageSource={{
          uri: "https://cdn.pixabay.com/photo/2022/06/24/04/35/girl-7280997_1280.jpg",
        }}
        procedure="Procedure:
Fill cheeks with air. Hold for 5 seconds.
Move air from one cheek to the other 5 to 10 times.
No air should escape from around the lips or the nose.
Relax and Repeat 5 times."
      />
      <CollapsibleComponent
        title=" Click on Lip Press on Tongue Depressor"
        imageSource={{
          uri: "https://cdn.pixabay.com/photo/2015/08/25/13/54/person-906895_1280.jpg",
        }}
        procedure="Procedure:
1.Press both lips tightly on a tongue depressor as hard as you can.
2.Hold for 5 seconds.
3.Relax and Repeat 5 times."
      />
    </ScrollView>
  );
};

export default LipsExercise;
