import React, { useState } from "react";

export default function Schedule() {
  // State to track selected days and daily frequency
  const [selectedDays, setSelectedDays] = useState([]);
  const [dailyFrequency, setDailyFrequency] = useState(10); // Default daily frequency

  // Array of days with an additional "Select All" option
  const daysOfWeek = ["Select All", "S", "M", "T", "W", "T", "F", "S"];

  // Toggle selection of a day
  const handleDayClick = (day) => {
    if (day === "Select All") {
      if (selectedDays.length === daysOfWeek.length - 1) {
        // Deselect all if all days are already selected
        setSelectedDays([]);
      } else {
        // Select all days except "Select All"
        setSelectedDays(daysOfWeek.filter((d) => d !== "Select All"));
      }
    } else {
      // Toggle individual day
      setSelectedDays((prevSelected) =>
        prevSelected.includes(day)
          ? prevSelected.filter((d) => d !== day) // Deselect day
          : [...prevSelected, day] // Select day
      );
    }
  };

  // Increment daily frequency by 1
  const incrementFrequency = () => {
    setDailyFrequency((prev) => prev + 1);
  };

  // Decrement daily frequency by 1 (with a minimum of 0)
  const decrementFrequency = () => {
    setDailyFrequency((prev) => Math.max(0, prev - 1)); // Prevent negative values
  };

  return (
    <div className="flex justify-between items-center mb-5">
      {/* Days of the Week Section */}
      <div>
        <label htmlFor="days" className="block font-semibold text-gray-700 mb-2">
          Day of Week
        </label>
        <div id="days" className="flex gap-2">
          {daysOfWeek.map((day, index) => (
            <button
              key={index}
              className={`py-2 px-3 ${
                day === "Select All"
                  ? "w-full rounded-md" // Block shape for Select All
                  : "rounded-full" // Circle shape for days of the week
              } hover:bg-gray-300 focus:ring focus:ring-gray-400 ${
                selectedDays.includes(day) ||
                (day === "Select All" && selectedDays.length === daysOfWeek.length - 1)
                  ? "bg-blue-500 text-white" // Highlight selected day or "Select All" in blue
                  : "bg-gray-200 text-gray-700" // Default background for unselected days
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Daily Frequency Section */}
      <div className="px-14">
        <label
          htmlFor="daily-frequency"
          className="block font-semibold text-gray-700 mb-2"
        >
          Daily Frequency
        </label>
        <div className="flex items-center gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
            onClick={decrementFrequency}
          >
            -
          </button>
          <span className="font-semibold">{dailyFrequency}</span>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
            onClick={incrementFrequency}
          >
            +
          </button>
          
        </div>
      </div>
    </div>
  );
}
