import React from "react";
import eventNotFound from "../../assets/event-not-found.jpeg";
import "./EventNotFound.css";

function EventNotFound() {
  return (
    <div className="event-not-found">
      <div className="content-event-not-found">
        <h2>No events found</h2>
        <p>We couldn't find any events...</p>
      </div>
      <picture className="pic-event-not-found">
        <img src={eventNotFound} alt="event not found" />
      </picture>
    </div>
  );
}

export default EventNotFound;
