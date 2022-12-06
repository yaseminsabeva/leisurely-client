import React from "react";
import EventSubscribe from "../Events/EventSubscribe";
import { Link } from "react-router-dom";
import "../../styles/OneEvent.css";

function Attendees({ currentUser, isLoggedIn, fetchEvent, event }) {
  return (
    <div className="subscribe-attendees">
      <div className="attendees">
        <p>Attendees for this event:</p>
        <div className="all-attendees">
          {event.attendees.map((element) => {
            return isLoggedIn && currentUser.username === element.username ? (
              <div className="attendees-div">
                <div className="attendees-img-div">
                  <img
                    className="attendees-pic"
                    src={currentUser.picture}
                    alt={currentUser.username}
                  />
                </div>
                <div>You</div>
              </div>
            ) : (
              // <Link to={`/users/${element._id}`} key={element._id}>{element.name}</Link>)

              <Link to={`/users/${element.name}`} key={element._id}>
                <div className="attendees-div">
                  <div className="attendees-img-div">
                    <img
                      className="attendees-pic"
                      src={element.picture}
                      alt={element.name}
                    />
                  </div>
                  <div>{element.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        {!isLoggedIn ||
        currentUser._id === event.host._id ||
        event.attendees.find((e) => e._id === currentUser._id) ? (
          ""
        ) : (
          <div className="event-subscribe-div">
            <EventSubscribe fetchEvent={fetchEvent} event={event} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendees;
