import { NavLink, Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "./NavMain.css";
import Search from "../Search/Search";
import logo from "../../assets/logo.png";
import { useState } from "react";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <nav className="NavMain">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <Search />
      </div>

      <div className="nav">
        <NavLink className="nav-btn" to="/">
          <i className="fa-solid fa-house"></i>
          Home
        </NavLink>
        <NavLink className="nav-btn" to="/events">
          <i className="fa-solid fa-calendar-days"></i>
          Events
        </NavLink>
        <NavLink className="logo-btn" to="/events/add">
          <i className="fa-sharp fa-solid fa-circle-plus"></i>
          Add Event
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/profile">
              {currentUser && (
                <>
                  <i className="fa-solid fa-user"></i> {currentUser.username}
                </>
              )}
            </NavLink>
            <div>
              <i className="fa-solid fa-right-from-bracket"></i>
              <button className="logout" onClick={removeUser}>
                Log Out
              </button>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <NavLink to="/signin">Log in</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavMain;
