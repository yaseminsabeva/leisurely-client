import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  function handleSubmit() {
    preventDefault();
    console.log(search);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
