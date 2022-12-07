import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import service from '../api/apiHandler'
import UserProfile from "../components/Profile/UserProfile"
import EventCardSmall from "../components/Events/EventCardSmall"
import SubscribedEvents from "../components/Profile/SubscribedEvents"

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
      {attendee.events.map((event) => {
        return <EventCardSmall key={event._id} event={event} />
      })}
    </div>
    <SubscribedEvents/>
    </div>
  );
}

export default Users;
