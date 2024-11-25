const fs = require("fs");  // Import fs to write data back to data.json
const path = require("path");  // To handle file paths
const dataPath = path.join(__dirname, "../data/data.json");  // Path to your data.json

// Controller to create a new exercise program
exports.createProgram = (req, res) => {
  const { programmeName, exercises, notes, tags } = req.body;  // Destructure incoming data

  try {
    // Get current data from data.json
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    // Create a new program with an incremental ID
    const newProgram = {
      id: data.programs.length + 1,  // Incremental ID for the new program
      programmeName,
      exercises,
      notes,
      tags,
    };

    // Add the new program to the programs array
    data.programs.push(newProgram);

    // Write the updated data back to data.json
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");

    // Respond with the created program
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ message: "Error creating program." });
  }
};

// Controller to get a program by ID
exports.getProgramById = (req, res) => {
  const { id } = req.params;  // Extract the program ID from the URL

  try {
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));  // Get current data from data.json
    const program = data.programs.find(pr => pr.id === parseInt(id));  // Find program by ID

    if (program) {
      res.status(200).json(program);  // Respond with the program data
    } else {
      res.status(404).json({ message: "Program not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching the program." });
  }
};
