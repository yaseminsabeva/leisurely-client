import React, { useEffect, useState } from "react";
import "./EventFilter.css";
import service from "../../api/apiHandler";

function EventFilter() {
  const [filter, setFilter] = useState("");

  return (
    <div className="filter-container">
      {/* <div className="filter-menu">
        <label htmlFor="date">From:</label>
        <input type="date" id="date" value={}/>
        <label htmlFor="date">To:</label>
        <input type="date" id="date" value={}/>
        <label htmlFor="category">Category</label>

      gave up on this because checkboxes suck
         <div className="select">
        <input type="checkbox" name="Art & Culture" id="art" />
        <label htmlFor="art">Art & Culture</label>
        </div>
      </div> */}
    </div>
  );
}

export default EventFilter;
