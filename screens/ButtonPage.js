// screens/ButtonPage.js
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import videos from '../videos.json';

const SquareButton = ({ id, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(id)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const ButtonRow = ({ buttons, onPress }) => {
  return (
    <View style={styles.row}>
      {buttons.map((item) => (
        <SquareButton
          key={item.id}
          id={item.id}
          name={item.name}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

const ButtonPage = () => {
  const navigation = useNavigation();

  const handleButtonPress = (id) => {
    // Handle button press and navigate to another page
    console.log(`Button ${id} pressed`);
    navigation.navigate('VideoPage', { id });
  };

  const buttonsInRows = [];
  for (let i = 0; i < videos.length; i += 5) {
    buttonsInRows.push(videos.slice(i, i + 5));
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headline}>Vowels</Text>
        {buttonsInRows.map((row, index) => {
          if (index === 2) {
            // Add consonant headline after the first 10 buttons
            return (
              <React.Fragment key={index}>
                <Text style={styles.headline}>Consonants</Text>
                <ButtonRow buttons={row} onPress={handleButtonPress} />
              </React.Fragment>
            );
          }
          return <ButtonRow key={index} buttons={row} onPress={handleButtonPress} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#FBB718',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 5,
  },
  headline: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ButtonPage;
