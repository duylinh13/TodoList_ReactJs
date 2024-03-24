import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
