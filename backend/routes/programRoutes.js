// Import express
const express = require("express");
const router = express.Router();

// Import the program controller
const programController = require("../controllers/programController");

// Route to create a new exercise program
router.post("/", programController.createProgram);

// Route to get a saved exercise program by ID
router.get("/:id", programController.getProgramById);

// Export the router
module.exports = router;
