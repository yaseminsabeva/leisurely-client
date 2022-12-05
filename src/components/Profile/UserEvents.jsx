import React, { useState, useEffect } from "react"
import service from "../../api/apiHandler"
import EventCardSmall from "../Events/EventCardSmall";



function UserEvents() {
    const [events, setEvents] = useState([])
    useEffect(()=> {
        service
        .getEventsCreatedByUser()
        .then((response) => {
            setEvents(response)
            //console.log(response)
        })
        .catch((err) => {
            console.error(err.message);
          });
        console.log(events)
    }, [])
    if (!events) return <div className="nothing-to-show">Nothing to show....</div>
    return (
      <div>
      {events.map((event) => {
        return <EventCardSmall key={event._id} event={event} />
      })}
    </div>
    )
}

export default UserEvents