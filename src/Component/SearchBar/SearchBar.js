// import React from "react";
const SearchBar = ({
  filters: { topic, level },
  onUpdateTopick,
  onUpdateLevel,
  onReset,
}) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={(event) => onUpdateTopick(event.target.value)}
        placeholder="Topic filter"
      />
      <select
        value={level}
        onChange={(event) => onUpdateLevel(event.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button type="button" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
};
export default SearchBar;
