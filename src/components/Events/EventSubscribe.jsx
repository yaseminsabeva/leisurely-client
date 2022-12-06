import React from "react";
import service from "../../api/apiHandler";
import "../../styles/OneEvent.css";

function EventSubscribe({ fetchEvent, event }) {
  const handleSuscribeEvent = (e) => {
    e.preventDefault();
    service
      .eventSubscribe(event._id)
      .then(() => {
        fetchEvent();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className="subscribe-button" onClick={handleSuscribeEvent}>
      Subscribe to event
    </button>
  );
}

export default EventSubscribe;
