import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchHome() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate("/events?title=" + search);
  }
  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSearch}>
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
    </div>
  );
}

export default SearchHome;
