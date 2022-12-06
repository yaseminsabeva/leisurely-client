import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import service from "../../api/apiHandler";
import "./SearchHome.css";


function SearchHome() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate("/events?title=" + search);
  }
  return (

    <div className="home-search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search for events..."
          value={search}
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button className="home-search-btn">Search</button>
      </form>
    </div>
  );
}

export default SearchHome;
