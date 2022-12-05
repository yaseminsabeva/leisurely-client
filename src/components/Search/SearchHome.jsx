import React, { useState, useEffect } from "react"
import service from "../../api/apiHandler"


function SearchHome() {
    const [search, setSearch] = useState("");
  
    function handleSearch(e) {
        e.preventDefault()
        service
        .searchHome({title : search})
        .then(() => {})
        .catch((err) => {
            console.error(err.message);
        })
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