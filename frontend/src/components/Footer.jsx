import React from "react";
import axios from "axios";

function Footer() {
  // Function to handle Save as Combo
  const handleSaveCombo = () => {
    const comboData = {
      // Data structure for saving combo
      // This might come from your frontend state, like selected exercises, etc.
      exercises: [
        { exerciseId: 1, sets: 3, reps: 10 }, // Example data
        { exerciseId: 2, sets: 3, reps: 10 },
      ],
      notes: "Some notes for the combo",
      tags: ["tag1", "tag2"],
    };

    // Send the data to the backend
    axios
      .post("http://localhost:5000/api/programs", comboData)
      .then((response) => {
        console.log("Combo saved:", response.data);
        alert("Combo saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving combo:", error);
        alert("Failed to save combo.");
      });
  };

  // Function to handle Add Entry
  const handleAddEntry = () => {
    const entryData = {
      // Data structure for adding entry
      // This might include details about the exercise session
      exercise: { exerciseId: 1, sets: 3, reps: 10 },
      date: new Date().toISOString(), // Example entry data
      notes: "Some notes for the entry",
    };

    // Send the data to the backend
    axios
      .post("http://localhost:5000/api/entries", entryData)
      .then((response) => {
        console.log("Entry added:", response.data);
        alert("Entry added successfully!");
      })
      .catch((error) => {
        console.error("Error adding entry:", error);
        alert("Failed to add entry.");
      });
  };

  return (
    <div className="flex justify-end gap-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={handleSaveCombo}
      >
        Save as Combo
      </button>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md"
        onClick={handleAddEntry}
      >
        Add Entry
      </button>
    </div>
  );
}

export default Footer;
