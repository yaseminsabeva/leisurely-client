import React, {useState, useEffect} from "react"

function UserProfile({user}) {
return (
	<div className="user box">
    <picture><img src={user.picture} alt=""/></picture>
      <div className="">
        <ul>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.description}</li>
        </ul>
        <ul>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.description}</li>
        </ul>
      </div>
	</div>
  )
}

export default UserProfile