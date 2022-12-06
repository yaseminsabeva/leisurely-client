import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import EventCardSmall from "../components/Events/EventCardSmall";
import EventFilter from "../components/Events/EventFilter";

function ListEvents({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  search,
  setSearch,
}) {
  const [events, setEvents] = useState([]);
  const [checkers, setCheckers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    service
      .get("/events", {
        params: { title: search, checkers, startDate, endDate },
      })
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoading(false));
  }, [checkers, search, startDate, endDate]);

  return (
    <div>
      <EventFilter
        checkers={checkers}
        setCheckers={setCheckers}
        search={search}
        setSearch={setSearch}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ul>
        <h1>Upcoming Events</h1>
        {/* prep for the loading component */}
        {isLoading && <p>am loading</p>}
        {!isLoading && !events.length ? (
          <div className="loading">No events matching your criteria....</div>
        ) : (
          ""
        )}
        {events.map((event) => {
          return <EventCardSmall key={event._id} event={event} />;
        })}
      </ul>
    </div>
  );
}

export default ListEvents;
