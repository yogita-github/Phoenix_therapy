const mongoose = require('mongoose');

// Define the schema for the words
const wordSchema = new mongoose.Schema({
  word: String,
  audio: String,
});

// Define the main schema for the letter
const letterSchema = new mongoose.Schema({
  letter: String,
  image: String,
  video: String,
  sentences: [String],
  words: [wordSchema],
  words: [String],
  words2: [String],
});

// Create the model based on the schema
const Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;
