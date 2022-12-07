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
          {event.attendees.length === 0 ? (
            <p style={{ color: "grey" }}>
              Looks like there are no attendees for this event yet.
            </p>
          ) : (
            event.attendees.map((element) => {
              const isMe =
                isLoggedIn && currentUser.username === element.username;
              const user = isMe ? currentUser : element;

              return (
                <Link
                  to={isMe ? "/profile" : `/users/${user.username}`}
                  key={user._id}
                >
                  <div className="attendees-div">
                    <div className="attendees-img-div">
                      <img
                        className="attendees-pic"
                        src={user.picture}
                        alt={user.name}
                      />
                    </div>
                    <div>{isMe ? "You" : user.username}</div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>

      <div>
        {/* Don't show subscribe button unless user is logged in and not the host of the event and not already attending */}
        {isLoggedIn &&
          currentUser._id !== event.host._id &&
          !event.attendees.find((e) => e._id === currentUser._id) && (
            <div className="event-subscribe-div">
              <EventSubscribe fetchEvent={fetchEvent} event={event} />
            </div>
          )}
      </div>
    </div>
  );
}

export default Attendees;
