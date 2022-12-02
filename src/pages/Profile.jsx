import React, {useState, useEffect} from "react"
//import service from '../api/apiHandler'
import UserProfile from "../components/Profile/UserProfile"
import EditProfile from "../components/Profile/EditProfile"
import useAuth from "../auth/useAuth"
//import { Link } form 

function Profile() {
  const {currentUser} = useAuth()
  const user = currentUser
    const [showEdit, setShowEdit] = useState(false);
    if (!user) {
        return <div className="loading">Loading....</div>
    }
  return (
    <div className="">
      <h1>hello {user.username}</h1>
        <button onClick={() => setShowEdit(!showEdit)}>
            {showEdit ? 'back' : 'Edit form'}
        </button>       
        {showEdit ? <EditProfile user={user} setShowEdit={setShowEdit} /> : <UserProfile user={user}/>}
    </div>
  )
}

export default Profile