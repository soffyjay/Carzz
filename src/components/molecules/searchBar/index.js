import React from "react";
import "./style.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search vehicle"
        className="search-input"
      />
      <span className="icon">
        <RiArrowDropDownLine fontSize={20} color={"#98A2B3"} />
      </span>
    </div>
  );
};

export default SearchBar;
