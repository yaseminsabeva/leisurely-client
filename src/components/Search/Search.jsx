import React, { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import service from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

function Search({ search, setSearch }) {
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });
  const navigate = useNavigate();

  // function handleSubmit() {
  //   preventDefault();
  //   console.log(search);
  // }

  function handleSearch(e) {
    e.preventDefault();
    // setSearch(e.target.value);
    console.log(search);
    // setSearchParams({ title: search });
    navigate("/events?title=" + search);
    // service
    //   .searchNav({ searchData: search })
    //   .then(() => {})
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
