import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import service from '../api/apiHandler'
import UserProfile from "../components/Profile/UserProfile"
import EventCardSmall from "../components/Events/EventCardSmall"
import SubscribedEvents from "../components/Profile/SubscribedEvents"
import EventNotFound from "../components/NotFound/EventNotFound";

function Users() {
  const [attendee, setAttendeeProfil] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    service
      .getAttendeeProfil(id)
      .then((data) => {
        setAttendeeProfil(data);

    })
    .catch((error) => {
        setError(error.response.data)
    })
    }, []);
    
  if (!attendee) {
    return "";
  }

  return (
    <div className="profile container">
      <div>
        <UserProfile user={attendee} />
      </div>
      <div>
        <h1>Events Hosted</h1>
        {!attendee.events.length ? <EventNotFound/> : 
        attendee.events.map((event) => {
          console.log(event)
          return <EventCardSmall key={event._id} event={event} />
        })}
        
      </div>
      <div>
        <h1>Events Attending</h1>
        {attendee.attendingEvent.map((event) => {
          console.log(event)
          return <EventCardSmall key={event._id} event={event} />
        })}
      </div>
    </div>
  );
}

export default Users;
