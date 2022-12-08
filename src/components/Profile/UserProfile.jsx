import React from "react";

function UserProfile({ user, currentUser }) {
  return (
    <div className="event-card">
      <picture>
        <img src={user.picture} alt="" />
      </picture>
      <div className="profile user-info">
        <div>
          <div>
            {user === currentUser ? (
              <h2>Welcome {user.name}</h2>
            ) : (
              <h2>{user.name}'s page</h2>
            )}
          </div>
          <br></br>
          <div>
            Username: <span>{user.username}</span>
          </div>
          <div>
            Email: <span>{user.email}</span>
          </div>
          <br></br>
          <div>
            Description:{" "}
            <span>
              {user.description
                ? user.description
                : "This user hasn't added a description yet"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
