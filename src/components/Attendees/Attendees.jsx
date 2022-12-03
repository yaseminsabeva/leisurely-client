import React from "react"
import EventSubscribe from "../Events/EventSubscribe";
import { Link } from "react-router-dom";


function Attendees({currentUser, isLoggedIn, fetchEvent, event}) {

return (
	<div className="suscribe attendees">
        <p>Attendees for this event :</p>
        {event.attendees.map((element)=>{ 
            return (
              (isLoggedIn && currentUser.username === element.username ? 'You' :
              <Link to={`/users/${element._id}`} key={element._id}>{element.name}</Link>)
              )
          })}
      
        {!isLoggedIn || currentUser._id === event.host._id || event.attendees.find((e)=>e._id === currentUser._id)? 
        '' : <EventSubscribe fetchEvent={fetchEvent} event={event}/>}
    </div>
  )
}

export default Attendees