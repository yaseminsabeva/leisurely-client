import React, {useState, useEffect} from "react"

function UserProfile({user}) {
return (
	<div className="user box">
        <div className="user infos">
            <picture><img src={user.picture} alt=""/></picture>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.description}</li>
            </ul>
                <button></button>
        </div>
	</div>
  )
}

export default UserProfile