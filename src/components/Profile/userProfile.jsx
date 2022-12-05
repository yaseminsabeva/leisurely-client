import React from "react"

function UserProfile({user}) {
return (
	<div className="profile event-card">
    <picture><img src={user.picture} alt=""/></picture>
      <div className="profile user-info">
        <ul>
          <li>Name: {user.name}</li>
          <li>Username: {user.username}</li>
          <li>Description: {user.description}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      </div>
	</div>
  )
}

export default UserProfile