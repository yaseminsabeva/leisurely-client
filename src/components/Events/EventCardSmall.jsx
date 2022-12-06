import React from "react";
import "./EventCardSmall.css";
import { Link } from "react-router-dom";

function EventCardSmall({ event }) {
  return (
    <Link to={`/events/${event._id}`}>
      <div className="event-card">
        <picture>
          <img src={event.image} alt="event picture" />
        </picture>
        <div className="event-content">
          <p className="keywords">{event.keywords}</p>
          <h2>{event.title}</h2>
          <div className="event-info">
            <div>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span>
                {new Intl.DateTimeFormat("en-GB").format(
                  new Date(event.dateOfEvent)
                )}
              </span>
            </div>

            <div>
              <i className="fa-regular fa-clock"></i>
              <span>{event.time}</span>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <span>{event.location}</span>
            </div>
            <div>
              <i className="fa fa-eur" aria-hidden="true"></i>
              <span>{event.price || "Free"}</span>
            </div>
            <div>
              <i className="fa fa-list" aria-hidden="true"></i>
              <span>{event.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCardSmall;
