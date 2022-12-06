import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../api/apiHandler";

function SearchHome() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate("/events?title=" + search);
  }
  return (
    <div>
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
