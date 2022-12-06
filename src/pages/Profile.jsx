import React, {useState, useEffect} from "react"
//import service from '../api/apiHandler'
import UserProfile from "../components/Profile/UserProfile"
import EditProfile from "../components/Profile/EditProfile"
import UserEvents from "../components/Profile/UserEvents"
import SubscribedEvents from "../components/Profile/SubscribedEvents"
import useAuth from "../auth/useAuth"
import "../components/Profile/Profile.css"

function Profile() {
  const {currentUser} = useAuth()
  const user = currentUser
  const [showEdit, setShowEdit] = useState(false);
    if (!user) {
        return <div className="loading">Loading....</div>
    }
  return (
    <div className="profile container">
      <div>
          <button className="user btn-edit" onClick={() => setShowEdit(!showEdit)}>
            {showEdit ? 'back' : 'Edit form'}
          </button>       
        {showEdit ? <EditProfile user={user} setShowEdit={setShowEdit} /> : <UserProfile user={user}/>}
      </div>
      <div>
        <UserEvents/>
      </div>
      <div>
        <SubscribedEvents/>
      </div>
    </div>
  )
}

export default Profile