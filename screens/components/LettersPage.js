import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'

const LettersPage = () => {
    const vowels = [
        'अ', 'आ', 'इ', 'ई', 'उ',
     'ऊ', 'ए', 'ऐ', 'ओ', 'औ'];
  const consonants = [
    'क', 'ख', 'ग', 'घ', 'ङ',
    'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'
  ];

  const renderCircleButtons = (characters) => {
    return characters.map((char, index) => (
      <TouchableOpacity key={index} style={styles.circleButton}>
        <Text style={styles.buttonText}>{char}</Text>
      </TouchableOpacity>
    ));
  };
  return (
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
      <View style={styles.vowelContainer}>
        <Text style={styles.sectionTitle}>Vowels</Text>
        <View style={styles.buttonsGrid}>{renderCircleButtons(vowels)}</View>
      </View>

      <View style={styles.consonantContainer}>
        <Text style={styles.sectionTitle}>Consonants</Text>
        <View style={styles.buttonsGrid}>
          {renderCircleButtons(consonants)}
        </View>
      </View>
    </View>
  );
};

export default LettersPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFBEF',
        
      },
      vowelContainer: {
        marginBottom: 20,
        marginLeft:10,
        marginRight:10,
        marginTop:20,
      },
      consonantContainer: {},
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft:10,
        marginRight:10,
      },
    //   buttonsRow: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //   },
      buttonsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      circleButton: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#FFBD22',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
      },
      buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
      },
});