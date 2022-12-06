import React, { useState } from "react";
import "./EventFilter.css";
import Search from "../Search/Search";


function EventFilter({
  checkers,
  setCheckers,
  filters,
  setFilters,
  getEvents,
}) {
  const { search, endDate, startDate } = filters;
console.log(filters, checkers)
  function handleStartDate(e) {
    setFilters((currentValue) => {
      return { ...currentValue, startDate: e.target.value };
    });
  }

  function handleEndDate(e) {
    setFilters((currentValue) => {
      return { ...currentValue, endDate: e.target.value };
    });
  }

  function handleCheck(e) {
    setCheckers({ ...checkers, [e.target.name]: !checkers[e.target.name] });
  }

  function setSearch(newSearch) {
    setFilters((currentValue) => {
      return { ...currentValue, search: newSearch };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getEvents();
  }

  return (
    <div className="filter-container">
      <div className="filter-menu">
        <form onSubmit={handleSubmit}>
          <h2>Search by ...</h2>
          <h3>Title & Date</h3>
          <Search search={search} setSearch={setSearch} />
        
    
          <div className="date-filter">
          <label htmlFor="date">From:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDate}
          />
          </div>
          <div className="date-filter">
          <label htmlFor="date">To:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDate}
          />
          </div>
          <input className="submit-filter btn" type="submit" value="Apply Filters" />
        </form>
        <h3>Categories</h3>
        {/* <label htmlFor="category">Category</label> */}

        <div className="select">
          <div>
            <input
              type="checkbox"
              checked={checkers["Art & Culture"] || false}
              name="Art & Culture"
              id="art"
              onChange={handleCheck}
            />
            <label htmlFor="art">Art & Culture</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Community & Environment"] || false}
              name="Community & Environment"
              id="community"
              onChange={handleCheck}
            />
            <label htmlFor="community">Community & Environment</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Dancing"] || false}
              name="Dancing"
              id="dancing"
              onChange={handleCheck}
            />
            <label htmlFor="dancing">Dancing</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Games"] || false}
              name="Games"
              id="games"
              onChange={handleCheck}
            />
            <label htmlFor="games">Games</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Health & Wellbeing"] || false}
              name="Health & Wellbeing"
              id="health"
              onChange={handleCheck}
            />
            <label htmlFor="health">Health & Wellbeing</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Language"] || false}
              name="Language"
              id="language"
              onChange={handleCheck}
            />
            <label htmlFor="language">Language</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Music"] || false}
              name="Music"
              id="music"
              onChange={handleCheck}
            />
            <label htmlFor="music">Music</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Science & Education"] || false}
              name="Science & Education"
              id="science"
              onChange={handleCheck}
            />
            <label htmlFor="science">Science & Education</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Sports & Fitness"] || false}
              name="Sports & Fitness"
              id="sports"
              onChange={handleCheck}
            />
            <label htmlFor="sports">Sports & Fitness</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Support & Coaching"] || false}
              name="Support & Coaching"
              id="support"
              onChange={handleCheck}
            />
            <label htmlFor="support">Support & Coaching</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Technology"] || false}
              name="Technology"
              id="technology"
              onChange={handleCheck}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Travel & Outdoors"] || false}
              name="Travel & Outdoors"
              id="travel"
              onChange={handleCheck}
            />
            <label htmlFor="travel">Travel & Outdoors</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Writing & Literature"] || false}
              name="Writing & Literature"
              id="writing"
              onChange={handleCheck}
            />
            <label htmlFor="writing">Writing & Literature</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkers["Pets & Animals"] || false}
              name="Pets & Animals"
              id="pets"
              onChange={handleCheck}
            />
            <label htmlFor="pets">Pets & Animals</label>
          </div>
          <div>
          <div>
          <input
            type="checkbox"
            checked={checkers["Other"] || false}
            name="Other"
            id="other"
            onChange={handleCheck}
          />
          <label htmlFor="other">Other</label>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventFilter;
