import React, { useState } from "react";
import service from "../../api/apiHandler";

function Search() {
  const [search, setSearch] = useState("");

  // function handleSubmit() {
  //   preventDefault();
  //   console.log(search);
  // }

  function handleSearch(e) {
    e.preventDefault();
    // setSearch(e.target.value);
    console.log(search);
    service
      .searchNav({ searchData: search })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          console.log(e.target.value, "heyy");
          setSearch(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
