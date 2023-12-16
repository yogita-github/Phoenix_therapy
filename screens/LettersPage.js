import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LettersPage = () => {
  const [letters, setLetters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch letters from your API
    axios.get('http://192.168.43.65:1000/letters').then((response) => {
      setLetters(response.data);
    });
  }, []);

  const renderLetterItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.letterItem,
        index < 10 ? styles.greenLetterItem : null
      ]}
      onPress={() => navigation.navigate('LetterDetail', { letter: item })}
    >
      <Text style={styles.letterText}>{item.letter}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>वर्णमाला</Text>
      <Text style={{color:'green'}}>*vowels</Text>
      <Text style={{color:'orange',marginBottom:10}}>*consonants</Text>
      <FlatList
        data={letters}
        keyExtractor={(item) => item._id}
        numColumns={5}
        renderItem={renderLetterItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  greenLetterItem: {
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  },
  flatListContainer: {
    alignItems: 'center',
  },
  letterItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  letterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LettersPage;
