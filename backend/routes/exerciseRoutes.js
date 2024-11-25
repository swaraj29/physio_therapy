const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");

// Existing route to get all exercises
router.get("/", exerciseController.getAllExercises);

// Existing route to get exercise by ID
router.get("/:id", exerciseController.getExerciseById);

// New route to delete exercise by ID
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;
