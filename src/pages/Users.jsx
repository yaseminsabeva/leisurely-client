import React, {useState, useEffect} from "react"
import { useParams, Link, useNavigate } from "react-router-dom";
import service from '../api/apiHandler'


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
    return <div className="loading">Loading....</div>;
  }
 
  return (
    <div className="">
      <h1>{attendee.name}'s Profile</h1>
    </div>
  )
}

export default Users