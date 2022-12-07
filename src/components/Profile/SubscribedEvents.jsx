import React, { useState, useEffect } from "react"
import service from "../../api/apiHandler"
import EventCardSmall from "../Events/EventCardSmall";
import { Link } from "react-router-dom";


function SubscribedEvents() {
    const [events, setEvents] = useState([])
    useEffect(()=> {
        service
        .getEventsSubscribeddByUser()
        .then((response) => {
            setEvents(response)
            console.log(response)
        })
        .catch((err) => {
            console.error(err.message);
          });
        console.log(events)
    }, [])
    if (!events.length) return (
      <div>
        <h1>Events Attending</h1>
        <div className="nothing-to-show">Nothing to show....</div>
      </div>
    )
    return (
      <div>
        <h1>Events I Subscribe To</h1>
        {events.map((event) => {
          return <EventCardSmall key={event._id} event={event} />
        })}
      </div>
    )
}

export default SubscribedEvents