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
          <Search search={search} setSearch={setSearch} />
          <label htmlFor="date">From:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDate}
          />
          <label htmlFor="date">To:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDate}
          />
          <input type="submit" value="Apply Filters" />
        </form>
        <label htmlFor="category">Category</label>

        <div className="select">
          <input
            type="checkbox"
            checked={checkers["Art & Culture"] || false}
            name="Art & Culture"
            id="art"
            onChange={handleCheck}
          />
          <label htmlFor="art">Art & Culture</label>

          <input
            type="checkbox"
            checked={checkers["Community & Environment"] || false}
            name="Community & Environment"
            id="community"
            onChange={handleCheck}
          />
          <label htmlFor="community">Community & Environment</label>

          <input
            type="checkbox"
            checked={checkers["Dancing"] || false}
            name="Dancing"
            id="dancing"
            onChange={handleCheck}
          />
          <label htmlFor="dancing">Dancing</label>

          <input
            type="checkbox"
            checked={checkers["Games"] || false}
            name="Games"
            id="games"
            onChange={handleCheck}
          />
          <label htmlFor="games">Games</label>

          <input
            type="checkbox"
            checked={checkers["Health & Wellbeing"] || false}
            name="Health & Wellbeing"
            id="health"
            onChange={handleCheck}
          />
          <label htmlFor="health">Health & Wellbeing</label>

          <input
            type="checkbox"
            checked={checkers["Language"] || false}
            name="Language"
            id="language"
            onChange={handleCheck}
          />
          <label htmlFor="language">Language</label>

          <input
            type="checkbox"
            checked={checkers["Music"] || false}
            name="Music"
            id="music"
            onChange={handleCheck}
          />
          <label htmlFor="music">Music</label>

          <input
            type="checkbox"
            checked={checkers["Science & Education"] || false}
            name="Science & Education"
            id="science"
            onChange={handleCheck}
          />
          <label htmlFor="science">Science & Education</label>

          <input
            type="checkbox"
            checked={checkers["Sports & Fitness"] || false}
            name="Sports & Fitness"
            id="sports"
            onChange={handleCheck}
          />
          <label htmlFor="sports">Sports & Fitness</label>

          <input
            type="checkbox"
            checked={checkers["Support & Coaching"] || false}
            name="Support & Coaching"
            id="support"
            onChange={handleCheck}
          />
          <label htmlFor="support">Support & Coaching</label>

          <input
            type="checkbox"
            checked={checkers["Technology"] || false}
            name="Technology"
            id="technology"
            onChange={handleCheck}
          />
          <label htmlFor="technology">Technology</label>

          <input
            type="checkbox"
            checked={checkers["Travel & Outdoors"] || false}
            name="Travel & Outdoors"
            id="travel"
            onChange={handleCheck}
          />
          <label htmlFor="travel">Travel & Outdoors</label>

          <input
            type="checkbox"
            checked={checkers["Writing & Literature"] || false}
            name="Writing & Literature"
            id="writing"
            onChange={handleCheck}
          />
          <label htmlFor="writing">Writing & Literature</label>

          <input
            type="checkbox"
            checked={checkers["Pets & Animals"] || false}
            name="Pets & Animals"
            id="pets"
            onChange={handleCheck}
          />
          <label htmlFor="pets">Pets & Animals</label>

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
  );
}

export default EventFilter;
