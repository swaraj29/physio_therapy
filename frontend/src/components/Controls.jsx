import React, { useState } from "react";
import axios from "axios";

function Controls() {
  const [breakInterval, setBreakInterval] = useState(10); // Default value for break interval
  const [buttonClicked, setButtonClicked] = useState(false); // Track button click status

  // Handle add exercise button click
  const handleAddExercise = () => {
    const exerciseData = {
      programmeName: "New Program", // Example program name
      exercises: [{ breakInterval }], // Add the exercise to the list
      notes: "Some notes", // Example notes
      tags: ["tag1", "tag2"], // Example tags
    };

    // Send the data to the backend
    axios
      .post("http://localhost:5000/api/programs", exerciseData)
      .then((response) => {
        console.log("Program created:", response.data);
        alert("Exercise Program added successfully!");
        setButtonClicked(true); // Highlight the button on success
      })
      .catch((error) => {
        console.error("Error creating program:", error);
        alert("Failed to add program.");
      });
  };

  // Increment break interval by 1
  const incrementInterval = () => {
    setBreakInterval((prev) => prev + 1); // Increase by 1 second
  };

  // Decrement break interval by 1
  const decrementInterval = () => {
    setBreakInterval((prev) => Math.max(0, prev - 1)); // Decrease by 1 second, prevent negative value
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          buttonClicked ? "bg-blue-700" : ""
        }`}
        onClick={handleAddExercise}
      >
        Add Exercises
      </button>

      <div>
        <label
          htmlFor="break-interval"
          className="block font-semibold text-gray-700 mb-2"
        >
          Break Interval (?)
        </label>
        <div className="flex items-center gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
            onClick={decrementInterval}
          >
            -
          </button>
          <span className="font-semibold">{breakInterval}</span>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
            onClick={incrementInterval}
          >
            +
          </button>
          <span className="font-semibold ml-2">seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Controls;
