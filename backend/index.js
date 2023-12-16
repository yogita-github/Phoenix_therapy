const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const port = 1000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
const secretKey = "ashfetygfcbdcjskdjs";
const User = require("./models/user");
const multer = require('multer');
const path = require('path');
const {v4: uuidv4}=require('uuid');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const Letter = require("./models/letter");
// Connect to MongoDB (replace 'YOUR_MONGO_URI' with your actual MongoDB connection string)

mongoose.connect("mongodb+srv://bhaveshc1509:N8wmfloTblJit3rE@cluster0.ljgles1.mongodb.net/phoenix?retryWrites=true&w=majority", {
  // mongoose.connect("mongodb://localhost:27017/phoenix", {
  // Remove the useNewUrlParser option
  // useNewUrlParser: true,

  // Remove the useUnifiedTopology option
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User document using the mongoose model
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save the user data to the database
    await newUser.save();

    console.log("User registered successfully");
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ name: name });

    if (user) {
      // Check the provided password against the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Create a JWT token
        const token = jwt.sign({ name: user.name, userId: user._id }, secretKey, { expiresIn: "1h" });

        // Successful login, send the token in the response
        res.status(200).json({ message: "Login successful", token: token });
      } else {
        // Invalid credentials
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      // User not found
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === 'image') {
        cb(null, './uploads/images');
      } else if (file.fieldname === 'video') {
        cb(null, './uploads/videos');
      } 
      // else if (file.fieldname === 'audio') {
      //   cb(null, './uploads/audio');
      // }
       else {
        cb(new Error('Invalid fieldname'), null);
      }
    },
    filename: function (req, file, cb) {
      cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
    },
  }),
});

// Middleware to handle image, video, and audio uploads
app.post('/save_data', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  // { name: 'audio', maxCount: 12 },
]), async (req, res) => {
  try {
    const data = {
      letter: req.body.letter,
      image: req.files['image'][0].filename,
      video: req.files['video'][0].filename,
      sentences: req.body.sentences.split('\n'),
      words2: req.body.words2.split(','),
      words: req.body.words.split(','),
      // words: req.body.words.split(',').map((word, index) => ({
      //   word: word.trim(),
      //   audio: req.files['audio'][index].filename,
      // })),
    };

    // Save data to MongoDB using the Mongoose model
    const newLetter = new Letter(data);
    await newLetter.save();

    res.json({ message: 'Data successfully saved' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/letters', async (req, res) => {
  try {
    const letters = await Letter.find();
    res.json(letters);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch a specific letter by ID
app.get('/letters/:id', async (req, res) => {
  try {
    const letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({ error: 'Letter not found' });
    }

    res.json(letter);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
