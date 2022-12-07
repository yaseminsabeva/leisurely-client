import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Attendees from "../components/Attendees/Attendees";
import "./../styles/OneEvent.css";
// jeanne //
// import EventSubscribe from "../components/Events/EventSubscribe";
// jeanne //

function OneEvent() {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  // jeanne //
  const fetchEvent = () => {
    service
      .get(`/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  // jeanne //

  const [deleteForm, setDeleteForm] = useState(false);

  function handleDelete() {
    service
      .deleteEvent(event._id)
      .then(() => {
        navigate("/events");
      })
      .catch((error) => {
        setError(error);
      });
  }

  if (!event) return "";

  return (
    <div className="one-page container">
      {isLoggedIn && currentUser.username === event.host.username ? (
        <div className="edit-delete-div">
          <div className="edit-btn">
            <Link to={`/events/${event._id}/edit`}>Edit</Link>
          </div>
          <div className="delete-btn" onClick={() => setDeleteForm(true)}>
            Delete
          </div>
          {deleteForm && (
            <div id="deleteForm">
              <p>are u sure</p>
              <button onClick={handleDelete}>yes</button>
              <button onClick={() => setDeleteForm(false)}>no</button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="one-event-page">
        <img className="one-event-image" src={event.image} alt={event.title} />
        <div className="one-event-infos">
          <div className="event-infos">
            <h1>{event.title}</h1>
            <p>
              <span>Description: </span>
              {event.description}
            </p>
            <p>
              <Link to={`/users/${event.host.username}`} key={event.host._id}>
                <span>Posted By: </span>
                {event.host.username}
              </Link>
            </p>
            <p>
              <span>Email: </span> {event.host.email}
            </p>
            <p>
              <span>Price: </span> {event.price === 0 ? "Free" : event.price}
            </p>
            <p>
              <span>Number of places remaining: </span>
              {event.maxAttendees - event.attendees.length}
            </p>
            <Attendees
              fetchEvent={fetchEvent}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
              event={event}
            />
          </div>

          <div className="time-loc-price-div">
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
    </div>
  );
}

export default OneEvent;
