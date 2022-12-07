import React from "react";
import errorImg from "../../assets/not-found-3.webp";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-error">
      <picture>
        <img src={errorImg} alt="error image" />
      </picture>
      <h2>Oopsies, we couldn't find the page you're looking for.</h2>
    </div>
  );
}

export default NotFound;
