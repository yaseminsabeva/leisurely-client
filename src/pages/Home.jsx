import React from "react";
import SearchHome from "../components/Search/SearchHome";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="entire-home">
      <div className="home-bg-video">
        <video autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/diik9eh2s/video/upload/v1670331507/home-bg_hwxzpl.mov"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="home-content">
        <h2 id="home-title">What do you want to do?</h2>
        <SearchHome />
      </div>
    </div>
  );
};

export default Home;
