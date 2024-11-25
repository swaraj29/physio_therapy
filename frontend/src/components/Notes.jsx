import React, { useState } from "react";
import axios from "axios";

function Notes() {
  const [notes, setNotes] = useState(""); // Track the notes input
  const [loading, setLoading] = useState(false); // Track loading state

  // Handle the input change
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Handle form submission (send data to the backend)
  const handleSubmit = () => {
    if (notes.trim() === "") {
      alert("Please add some notes.");
      return;
    }

    // Set loading state to true while saving notes
    setLoading(true);

    // Send the notes to the backend
    axios
      .post("http://localhost:5000/api/programs", { notes })
      .then((response) => {
        console.log("Notes saved:", response.data);
        alert("Notes saved successfully!");
        setNotes(""); // Clear the notes input after saving
        setLoading(false); // Reset loading state
      })
      .catch((error) => {
        console.error("Error saving notes:", error);
        alert("Failed to save notes.");
        setLoading(false); // Reset loading state
      });
  };

  return (
    <div className="mb-6">
      <label htmlFor="notes" className="block font-semibold mb-2">
        Therapist Notes
      </label>
      <textarea
        id="notes"
        placeholder="Add Notes"
        className="w-full h-24 border border-gray-300 rounded-md p-2"
        value={notes}
        onChange={handleNotesChange}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        disabled={loading} // Disable button while loading
      >
        {loading ? "Saving..." : "Save Notes"}
      </button>
    </div>
  );
}

export default Notes;
