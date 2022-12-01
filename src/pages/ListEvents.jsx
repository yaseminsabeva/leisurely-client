import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";
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
      <h1>List</h1>
      {events.map((element) => {
        return (
          <li key={element._id}>
            <Link to={`${element._id}`}>{element.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ListEvents;
