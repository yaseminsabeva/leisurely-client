import React from "react";

function Search({ search, setSearch }) {
  return (
    <input
      type="search"
      name="search"
      id="search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}

export default Search;
