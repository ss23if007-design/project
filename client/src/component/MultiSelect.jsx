import React, { useState } from "react";
import "./MultiSelect.css";

const optionsList = [
  "Haircut (Regular)",
  "Haircut (Advanced)",
  "Keratin",
  "Hair spa",
  "Hair Smoothening",
  "Hair Botox",
  "Bleach Facial ",
  "Manicure",
  "Pedicure",
  "O3+ Facial",
  "Nanoplastic",
  "Hydra Facial",
  "Hand wax",

];

export const MultiSelect = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const currentSelection = Array.isArray(selected) ? selected : [];

  const toggleOption = (option) => {
    const newSelected = currentSelection.includes(option)
      ? currentSelection.filter((o) => o !== option)
      : [...currentSelection, option];
    setSelected(newSelected);
  };

  const removeOption = (option) => {
    const newSelected = currentSelection.filter((o) => o !== option);
    setSelected(newSelected);
  };

  const filteredOptions = optionsList.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Block">
      <div className="multi-select">
        {/* Input / Trigger */}
        <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
          {currentSelection.length === 0 && (
            <span className="placeholder">Choose Services</span>
          )}
          {currentSelection.slice(0, 2).map((option) => (
            <span key={option} className="chip">
              {option}
              <button
                className="remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(option);
                }}
              >
                ✕
              </button>
            </span>
          ))}
          {currentSelection.length > 2 && (
            <span className="chip-count">+{currentSelection.length - 2}</span>
          )}
          <span className="arrow">{isOpen ? "^" : "▼"}</span>
        </div>
        {/* Dropdown */}
        {isOpen && (
          <div className="dropdown">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-box"
            />
            <div className="options-list">
              {filteredOptions.map((option) => (
                <label key={option} className="option">
                  <input
                    type="checkbox"
                    checked={currentSelection.includes(option)}
                    onChange={() => toggleOption(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
