import React from "react";
import "./style.css";
import SearchBar from "../../molecules/searchBar";
import Profile from "../../molecules/profile";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="verify">Verify</h1>
      <div className="right-header">
        <SearchBar />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
