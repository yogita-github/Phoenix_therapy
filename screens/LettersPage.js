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

  const renderLetterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.letterItem}
      onPress={() => navigation.navigate('LetterDetail', { letter: item })}
    >
      <Text style={styles.letterText}>{item.letter}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vowels</Text>
      <FlatList
        data={letters}
        keyExtractor={(item) => item._id}
        numColumns={6}
        renderItem={renderLetterItem}
        contentContainerStyle={styles.flatListContainer}
      />
      <Text style={styles.title}>Consonants</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LettersPage;
