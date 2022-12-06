import React from "react"

function UserProfile({user}) {
return (
	<div className="profile event-card">
    <picture><img src={user.picture} alt=""/></picture>
      <div className="profile user-info">
        <div>
          <div><h2>Welcome {user.name}</h2></div>
          <br></br>
          <div>Username: <span>{user.username}</span></div>
          <div>Email: <span>{user.email}</span></div>
          <br></br>
          <div>Description: <span>{user.description}</span></div>
        </div>
      </div>
	</div>
  )
}

export default UserProfile