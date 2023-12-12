const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const port = 1000;
const secretKey = "ashfetygfcbdcjskdjs";

// Connect to MongoDB (replace 'YOUR_MONGO_URI' with your actual MongoDB connection string)
mongoose.connect("mongodb://localhost:27017/phoenix", {
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
 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
