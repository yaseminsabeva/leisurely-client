import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "./../auth/useAuth";
import "./../styles/OneEvent.css";
import apiHandler from "../api/apiHandler";

function OneEvent() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .get(`/events/${id}`)
      .then((response) => {
        console.log(response.data);
        setEvent(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const [deleteForm, setDeleteForm] = useState(false);

  function handleDelete() {
    apiHandler.deleteEvent();
  }

  if (!event) return <div className="loading">Loading...</div>;
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.host.username}</p>
      <img src={event.image} alt={event.title} />
      {isLoggedIn && currentUser.username === event.host.username ? (
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
