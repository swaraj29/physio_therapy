import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // For Font Awesome 6
import axios from "axios";

function ExerciseProgramme() {
  const [exercises, setExercises] = useState([]);

  // Fetch exercises from the backend on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exercises")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exercises", error);
      });
  }, []);

  // Handle input changes (Sets, Reps, etc.)
  const handleInputChange = (event, exerciseId, field) => {
    const updatedExercises = exercises.map((exercise) =>
      exercise.id === exerciseId
        ? { ...exercise, [field]: event.target.value }
        : exercise
    );
    setExercises(updatedExercises);
  };

  // Handle "Left" and "Right" toggle
  const handleToggleSide = (exerciseId, side) => {
    const updatedExercises = exercises.map((exercise) =>
      exercise.id === exerciseId
        ? { ...exercise, side: exercise.side === side ? "" : side }
        : exercise
    );
    setExercises(updatedExercises);
  };

  // Handle duplication of an exercise
  const handleDuplicate = (exerciseId) => {
    const exerciseToDuplicate = exercises.find(
      (exercise) => exercise.id === exerciseId
    );
    if (exerciseToDuplicate) {
      const newExercise = {
        ...exerciseToDuplicate,
        id: Date.now(), // Generate a new unique ID
      };
      setExercises([...exercises, newExercise]);
    }
  };

  // Handle deletion of an exercise
  const handleDelete = (exerciseId) => {
    axios
      .delete(`http://localhost:5000/api/exercises/${exerciseId}`)
      .then(() => {
        // Update the UI after successful deletion
        setExercises(
          exercises.filter((exercise) => exercise.id !== exerciseId)
        );
      })
      .catch((error) => {
        console.error("Error deleting exercise", error);
      });
  };

  return (
    <div className="mb-6">
      <h2 className="text-blue-500 text-xl font-semibold mb-4">
        Exercise Programme
      </h2>

      {/* Render each exercise without boxing the categories */}
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="flex justify-between items-center bg-white p-4 rounded-md shadow mb-4"
        >
          <div>
            <h4 className="font-semibold">{exercise.name}</h4>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Sets"
                className="border border-gray-300 rounded-md p-2 w-16"
                value={exercise.sets || ""}
                onChange={(e) => handleInputChange(e, exercise.id, "sets")}
              />
              <input
                type="number"
                placeholder="Reps"
                className="border border-gray-300 rounded-md p-2 w-16"
                value={exercise.reps || ""}
                onChange={(e) => handleInputChange(e, exercise.id, "reps")}
              />
              <input
                type="number"
                placeholder="Hold Time"
                className="border border-gray-300 rounded-md p-2 w-20"
                value={exercise.holdTime || ""}
                onChange={(e) => handleInputChange(e, exercise.id, "holdTime")}
              />
              <input
                type="number"
                placeholder="Weight (Kg)"
                className="border border-gray-300 rounded-md p-2 w-20"
                value={exercise.weight || ""}
                onChange={(e) => handleInputChange(e, exercise.id, "weight")}
              />
              <select
                className="border border-gray-300 rounded-md p-2"
                value={exercise.stage || ""}
                onChange={(e) => handleInputChange(e, exercise.id, "stage")}
              >
                <option value="">Select Stage</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            {/* Left button */}
            <button
              className={`${
                exercise.side === "Left"
                  ? "bg-blue-500 text-white"
                  : "bg-white border border-blue-500 text-blue-500"
              } py-1 px-3 rounded-md`}
              onClick={() => handleToggleSide(exercise.id, "Left")}
            >
              Left
            </button>
            {/* Right button */}
            <button
              className={`${
                exercise.side === "Right"
                  ? "bg-blue-500 text-white"
                  : "bg-white border border-blue-500 text-blue-500"
              } py-1 px-3 rounded-md`}
              onClick={() => handleToggleSide(exercise.id, "Right")}
            >
              Right
            </button>
            <button
              className="bg-green-500 text-white py-1 px-3 rounded-md"
              onClick={() => handleDuplicate(exercise.id)}
            >
              Duplicate
            </button>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded-md"
              onClick={() => handleDelete(exercise.id)}
            >
              <i className="fa fa-trash-alt text-white text-xl"></i>{" "}
              {/* Font Awesome trash icon */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExerciseProgramme;
