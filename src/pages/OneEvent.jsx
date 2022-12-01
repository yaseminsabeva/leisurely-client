import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../api/apiHandler";

function OneEvent() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
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
  if (!event) return <div className="loading">Loading...</div>;
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.host.username}</p>
      <img src={event.image} alt={event.title} />
    </div>
  );
}

export default OneEvent;
