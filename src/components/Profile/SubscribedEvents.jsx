import React, { useState, useEffect } from "react"
import service from "../../api/apiHandler"
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
    if (!events) return <div className="nothing-to-show">Nothing to show....</div>
    return (
        events.map((element) => {
            return (
            <div className="event box" key={element._id}>
                <picture><img src={element.image} alt={element.title}/></picture>
                    <div className="event infos">
                        <ul>
                        <li><Link to={`/events/${element._id}`}>{element.title}</Link></li>
                        <li>{element.dateOfEvent.slice(0,9)} / {element.time}</li>
                        <li>{element.category}</li>
                        <li>{element.location}</li>
                     </ul>
                </div>
	        </div>
            )
        })
    )
}

export default SubscribedEvents