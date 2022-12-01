import React, {useState, useEffect} from "react"
import service from '../api/apiHandler'
import UserProfile from "../components/Profile/UserProfile"
import EditProfile from "../components/Profile/EditProfile"
//import { Link } form 

function Profile() {
    const [user, setUser] = useState(null)
    const [button, setButton] = useState(false);

    useEffect(() => {
        service.getUserProfile().then((data) => {
            setUser(data)
        })
    }, [])
    if (!user) {
        return <div className="loading">Loading....</div>
    }
  return (
    <div className="">
      <h1>hello {user.username}</h1>
        <button onClick={() => setButton(button ? false : true)}>
            {!button ? 'Edit form' : 'back'}
        </button>       
        {button ? <EditProfile user={user}/> : <UserProfile user={user}/>}
    </div>
  )
}

export default Profile