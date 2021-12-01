import React from "react";

const SearchBar = ({ keyword, updateInput }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    margin: "0.7rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"search by id"}
      onChange={(e) => {
        updateInput(e.target.value);
      }}
    />
  );
};

export default SearchBar;
