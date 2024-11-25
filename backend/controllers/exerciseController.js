// Import the data from data.json
const data = require("../data/data.json");
const fs = require("fs");

// Controller to get all exercises
exports.getAllExercises = (req, res) => {
  try {
    res.status(200).json(data.exercises);  // Respond with the list of exercises
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises." });
  }
};

// Controller to get an exercise by ID
exports.getExerciseById = (req, res) => {
  const { id } = req.params;  // Extract the exercise ID from the URL

  try {
    const exercise = data.exercises.find(ex => ex.id === parseInt(id));  // Find exercise by ID

    if (exercise) {
      res.status(200).json(exercise);  // Respond with the exercise data
    } else {
      res.status(404).json({ message: "Exercise not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching the exercise." });
  }
};

// Controller to delete an exercise by ID
exports.deleteExercise = (req, res) => {
  const { id } = req.params;  // Extract the exercise ID from the URL

  try {
    const exerciseIndex = data.exercises.findIndex(ex => ex.id === parseInt(id));  // Find the exercise by ID

    if (exerciseIndex !== -1) {
      // Remove the exercise from the array
      data.exercises.splice(exerciseIndex, 1);

      // Save the updated data to the file
      fs.writeFileSync("data/data.json", JSON.stringify(data, null, 2));  // Save to data.json

      res.status(200).json({ message: "Exercise deleted successfully." });
    } else {
      res.status(404).json({ message: "Exercise not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting the exercise." });
  }
};
