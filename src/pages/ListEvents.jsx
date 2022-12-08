import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import service from "../api/apiHandler";
import EventCardSmall from "../components/Events/EventCardSmall";
import EventFilter from "../components/Events/EventFilter";
import EventNotFound from "../components/NotFound/EventNotFound";

function ListEvents({ filters, setFilters }) {
  const [events, setEvents] = useState([]);
  const [checkers, setCheckers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  let title;

  const { search, startDate, endDate } = filters;

  useEffect(() => {
    title = searchParams.get("title") || "";

    setFilters((currentValue) => {
      return { ...currentValue, search: title };
    });
  }, []);

  useEffect(() => {
    getEvents();
  }, [checkers]);

  function getEvents() {
    setIsLoading(true);
    service
      .get("/events", {
        params: { title: title || search, checkers, startDate, endDate },
      })
      .then((res) => {
        setEvents(res.data);
        setSearchParams({});
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="events container">
      <div className="filters fixed-menu">
        <EventFilter
          checkers={checkers}
          setCheckers={setCheckers}
          filters={filters}
          setFilters={setFilters}
          getEvents={getEvents}
        />
      </div>
      <div className="events-list">
        <h1>Upcoming Events</h1>
        {isLoading && ""}
        {!isLoading && !events.length ? <EventNotFound /> : ""}
        {events.map((event) => {
          return <EventCardSmall key={event._id} event={event} />;
        })}
      </div>
    </div>
  );
}

export default ListEvents;
