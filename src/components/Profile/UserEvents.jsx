import React, { useState, useEffect } from "react"
import service from "../../api/apiHandler"
import { Link } from "react-router-dom";


function UserEvents() {
    const [events, setEvents] = useState([])
    useEffect(()=> {
        service
        .getEventsCreatedByUser()
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
                <Link to={`/events/${element._id}`}>
                <div className="event-card">
                  <picture>
                    <img src={element.image} alt="event picture" />
                  </picture>
                  <div className="event-content">
                    <p className="keywords">Keywords: {element.keywords}</p>
                    <h2>{element.title}</h2>
                    <div className="event-info">
                      <div>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>
                          {new Intl.DateTimeFormat("en-GB").format(
                            new Date(element.dateOfEvent)
                          )}
                        </span>
                      </div>
                      <div>
                        <i className="fa-regular fa-clock"></i>
                        <span>{element.time}</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{element.location}</span>
                      </div>
                      <div>
                        <i className="fa fa-eur" aria-hidden="true"></i>
                        <span>{element.price || "Free"}</span>
                      </div>
                      <div>
                        <i className="fa fa-list" aria-hidden="true"></i>
                        <span>{element.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
         })
    )
}

export default UserEvents