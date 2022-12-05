import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";
import EventCardSmall from "../components/Events/EventCardSmall";
import EventFilter from "../components/Events/EventFilter";

function ListEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    service.getAllEvents().then((data) => {
      setEvents(data);
    });
  }, []);
  if (!events.length) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <div>
      <EventFilter setEvents={setEvents} />
      <ul>
        <h1>Upcoming Events</h1>
        {events.map((event) => {
          return <EventCardSmall key={event._id} event={event} />;
        })}
      </ul>
    </div>
  );
}

export default ListEvents;
