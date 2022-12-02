import React from "react"
import service from "../../api/apiHandler";


function EventSubscribe({fetchEvent, event}) {


    const handleSuscribeEvent = (e) => {
        e.preventDefault()
        service
            .eventSubscribe(event._id)
            .then(() => {
                fetchEvent()
            })
            .catch((error) => {
                console.log(error);
            });
    }
return (
	<div>
        <button onClick={handleSuscribeEvent} >Suscribe to the event</button>
	</div>
  )
}

export default EventSubscribe