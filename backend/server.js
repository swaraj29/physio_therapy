// Import necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");  // For handling cross-origin requests

// Import routes
const exerciseRoutes = require("./routes/exerciseRoutes");
const programRoutes = require("./routes/programRoutes");

// Initialize the app
const app = express();

// Middleware setup
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());  // Parse incoming JSON requests

// Define routes
app.use("/api/exercises", exerciseRoutes);  // Handle exercise-related requests
app.use("/api/programs", programRoutes);  // Handle program-related requests

// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Physiotherapy Exercise Management API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
