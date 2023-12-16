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
  },
  exerciseContainer: {
    marginBottom: 16,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
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

const MouthExercise = ({navigation}) => {
  return (
    <><View style={styles.header}>
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
      <Text style={styles.heading}>Mouth Exercise</Text>
      <CollapsibleComponent
        title="Click on Rate of speech"
        imageSource={{
          uri: "https://media.istockphoto.com/id/1412746893/photo/indian-female-therapist-training-kid-with-hearing-disability.jpg?s=612x612&w=0&k=20&c=FBB39UQT-s9OXw-YfIa0m6GzR2F61ETBnDWIDWdghcE=",
        }}
        procedure="Procedure:

If your child is speaking too fast, it can affect his/her speech clarity. It is recommended that you encourage your child to speak slowly. This in turn will help improve speech clarity."
      />
      <CollapsibleComponent
        title=" Click on Oro-motor exercise"
        imageSource={{
          uri: "https://media.istockphoto.com/id/182805983/photo/woman-talking.jpg?s=612x612&w=0&k=20&c=2KfpkCNGCTlUVFRgqi2wYJYfupZ6Bf_K9PqaxqfXgjA=",
        }}
        procedure="Procedure:


Select any liquid of thick consistency as per child’s liking for example Nutella, honey, ketchup etc. Place the liquid at different positions of the oral cavity such as the corner of lips, behind the teeth, roof of the mouth, etc., and ask the child to lick it using their tongue tip."
      />
      <CollapsibleComponent
        title=" Click on Multisensory mode"
        imageSource={{
          uri: "https://media.istockphoto.com/id/1226991733/photo/successful-motivational-speaker-talking-about-happiness-self-success-empowerment-efficiency.jpg?s=612x612&w=0&k=20&c=TLkDQ_C0xFeQGJQM7UrVAEeKDY0HPEkaeQ-wOfh0Fbk=",
        }}
        procedure="Procedure:

Multisensory Input makes learning speech sounds more effective. When teaching sounds, provide inputs involving multiple senses. For example, if the child has to be taught the sound /s/, you can show how the mouth should be placed to produce the sound, which provides the child visual feedback. As you say the sound, the child gets auditory feedback. You can also give touch (tactile) feedback by asking the child to place the hand before the mouth when saying /s/."
      />

      <CollapsibleComponent
        title="Click on Open mouth approach"
        imageSource={{
          uri: "https://media.istockphoto.com/id/168725332/photo/pain-in-throat.jpg?s=612x612&w=0&k=20&c=il9_HHUE_ijkGlszXPz2HcEYroZWVtupZgFitAsjHUo=",
        }}
        procedure="Procedure:

Speech clarity can be compromised if the individual prefers to speak with limited mouth opening. In such situations, if we try to speak in an exaggerated manner (speaking with an open mouth and enunciating each sound correctly), speech clarity will be improved."
      />
    </ScrollView>
    </>
  );
};

export default MouthExercise;
