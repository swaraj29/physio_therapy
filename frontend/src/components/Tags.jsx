import React, { useState } from "react";

function Tags() {
  const tags = [
    "Dumbbell",
    "Kettlebell",
    "Resistance Band",
    "Bed",
    "Front",
    "Side",
    "Manual Rep Count",
    "Non AI",
    "Lower limb strengthening 1",
    "Static standing balance",
  ];

  // State to track selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // Handler to toggle the selected state of a tag
  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag) // Remove tag if already selected
        : [...prevSelectedTags, tag] // Add tag if not selected
    );
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(tag)} // Add click handler
          className={`py-1 px-4 rounded-full ${
            selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default Tags;
