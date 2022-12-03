import React from "react"
import "./profile.css"

function UserProfile({user}) {
return (
	<div className="user box">
    <picture><img src={user.picture} alt=""/></picture>
      <div className="user infos">
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