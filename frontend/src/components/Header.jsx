import React, { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  // State to store the programme name and exercise combo options
  const [programmeName, setProgrammeName] = useState("");
  const [exerciseCombos, setExerciseCombos] = useState([]);
  const [selectedCombo, setSelectedCombo] = useState(""); // State to track the selected combo

  // Fetch exercise combos (exercises in this case) from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exercises")
      .then((response) => {
        setExerciseCombos(response.data); // Store the exercises in state as combos
      })
      .catch((error) => {
        console.error("Error fetching exercise combos", error);
      });
  }, []); // Empty array ensures the fetch happens only once when the component mounts

  // Handle clearing all inputs
  const handleClearAll = () => {
    setProgrammeName(""); // Clear the programme name
    setSelectedCombo(""); // Reset the selected combo
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-4">
        <div>
          <label htmlFor="programme-name" className="block font-semibold">Programme Name</label>
          <input
            type="text"
            id="programme-name"
            placeholder="Knee Rehab Programme"
            className="border border-gray-300 rounded-md p-2 w-60"
            value={programmeName} // Bind state to the input field
            onChange={(e) => setProgrammeName(e.target.value)} // Update state on input change
          />
        </div>
        <div>
          <label htmlFor="exercise-combo" className="block font-semibold">Exercise Combo</label>
          <select
            id="exercise-combo"
            className="border border-gray-300 rounded-md p-2 w-60"
            value={selectedCombo} // Bind selectedCombo state to the dropdown
            onChange={(e) => setSelectedCombo(e.target.value)} // Update state on dropdown change
          >
            <option value="">Select Combo</option>
            {/* Map over exerciseCombos to populate the dropdown */}
            {exerciseCombos.map((combo) => (
              <option key={combo.id} value={combo.id}>
                {combo.name} {/* Display the name of the combo */}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md"
        onClick={handleClearAll} // Call the clear handler
      >
        Clear All
      </button>
    </div>
  );
}

export default Header;
