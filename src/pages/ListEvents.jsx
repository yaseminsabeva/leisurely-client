import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";
import EventCardSmall from "../components/Events/EventCardSmall";

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
    <ul>
      <h1>Upcoming Events</h1>
      {events.map((event) => {
        return <EventCardSmall key={event._id} event={event} />;
      })}
    </ul>
  );
}

export default ListEvents;
