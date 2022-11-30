import React, {useState, useEffect} from "react"
import service from '../api/apiHandler'
//import { Link } form 

function Profile() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        service.getUserProfile().then((data) => {
            setUser(data)
        })
    }, [])
    if (!user) {
        return <div className="loading">Loading....</div>
    }
  return (
	<div>
		<h1>hello {user.username}</h1>
		
	</div>
  )
}

export default Profile