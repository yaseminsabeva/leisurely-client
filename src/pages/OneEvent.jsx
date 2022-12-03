import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import "./../styles/OneEvent.css";
// jeanne //

import EventSubscribe from "../components/Events/EventSubscribe";
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

  if (!event) return <div className="loading">Loading...</div>;

  return (
    <div className="">
      <div className=" event infos">
        <h1>{event.title}</h1>
        <p>{event.host.username}</p>
        <p>{event.host.email}</p>
      </div>
      <div className="attendees infos">
        {event.attendees.map((element) => {
          return currentUser.username === element.username ? (
            ""
          ) : (
            <Link to={`/users/${element._id}`} key={element._id}>
              {element.name}
            </Link>
          );
        })}
      </div>
      <div className="subscribe">
        {event.attendees.find((e) => e._id === currentUser._id) ? (
          <EventSubscribe fetchEvent={fetchEvent} event={event} />
        ) : (
          "shruti est belle"
        )}
      </div>
      {/* <EventSubscribe fetchEvent={fetchEvent} event={event}/> */}

      <img src={event.image} alt={event.title} />
      {currentUser.username === event.host.username ? (
        <div>
          <Link to={`/events/${event._id}/edit`}>Edit</Link>{" "}
          <div onClick={() => setDeleteForm(true)}>Delete</div>
          {deleteForm && (
            <div id="deleteForm">
              <p>are u sure</p>
              <button onClick={handleDelete}>yes</button>
              <button onClick={() => setDeleteForm(false)}>no</button>
            </div>
          )}
        </div>
      ) : (
        <h1>You didn't post this event</h1>
      )}
    </div>
  );
}

export default OneEvent;
