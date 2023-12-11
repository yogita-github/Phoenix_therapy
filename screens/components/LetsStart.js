import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const LetsStart = () => {
  

  return (
  <><View style={styles.container}>
      <Text style={styles.centerText}>Hi, Please select one option below</Text>
      <Text style={styles.mainText}>Let's Start</Text>
    <View style={styles.rectangle1}>
        <Image
          source={require("../../assets/testicon.png")}
          style={styles.image} />
        
          <Text style={styles.text}>Start AI Test</Text>
        
      </View><View style={styles.rectangle2}>
        <Image
          source={require("../../assets/selficon.png")}
          style={styles.image} />
        
          <Text style={styles.text}>Self Learning</Text>
        </View>
      <View style={styles.rectangle3}>
        <Image
          source={require("../../assets/homeicon.png")}
          style={styles.image} />
        
          <Text style={styles.text}>Go To Home</Text>
        </View>
      </View></>
  
  );
};

export default LetsStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:50,
    backgroundColor: '#FFFBEF'

  },
  centerText: {
    textAlign: 'center',
    fontSize: 17,
  },
  mainText:{
    textAlign:'center',
    fontsize:25,
    marginTop: 30,
    fontWeight:'Bold',
    marginBottom:50,

  },
  rectangle1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    Color: 'Light Yellow',
    background:
      "linear-gradient(135deg, #B218FB -13.65%, rgba(42, 24, 251, 0.00) 158.13%)",
    borderRadius: 20,
    elevation: 3,
  },
  rectangle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    Color: 'Light Purple',
    background:
      "linear-gradient(135deg, #00D015 -13.65%, rgba(24, 251, 115, 0.00) 158.13%)",
    borderRadius: 20,
    elevation: 3,
  },
  rectangle3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    Color: 'Light Green',
    background:
      "linear-gradient(135deg, #FBB718 -13.65%, rgba(251, 183, 24, 0.00) 158.13%)",
    borderRadius: 20,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: 'Black',
  },
  
  
});