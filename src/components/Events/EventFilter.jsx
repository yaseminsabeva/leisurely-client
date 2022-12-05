import React, { useEffect, useState } from "react";
import "./EventFilter.css";
import service from "../../api/apiHandler";
import Search from "../Search/Search";

function EventFilter({ checkers, setCheckers, search, setSearch }) {
  const [filter, setFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    "Art & Culture": art,
    "Community & Environment": community,
    Dancing: dancing,
    Games: games,
    "Health & Wellbeing": health,
    Language: language,
    Music: music,
    "Science & Education": science,
    "Sports & Fitness": sports,
    "Support & Coaching": support,
    Technology: technology,
    "Travel & Outdoors": travel,
    "Writing & Literature": writing,
    "Pets & Animals": pets,
    Other: other,
  } = checkers;

  // useEffect(() => {
  //   service
  //     .get("/events", {
  //       params: { checkers, startDate },
  //     })
  //     .then((res) => setEvents(res.data))
  //     .catch((err) => console.log(err));
  // }, [
  //   art,
  //   community,
  //   dancing,
  //   games,
  //   health,
  //   language,
  //   music,
  //   science,
  //   sports,
  //   support,
  //   technology,
  //   travel,
  //   writing,
  //   pets,
  //   other,
  // ]);

  function handleStartDate(e) {}

  function handleEndDate(e) {}

  function handleCheck(e) {
    setCheckers({ ...checkers, [e.target.name]: !checkers[e.target.name] });
  }

  return (
    <div className="filter-container">
      <div className="filter-menu">
        <Search search={search} setSearch={setSearch} />
        <label htmlFor="date">From:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          max={new Date()}
          onChange={handleStartDate}
        />
        <label htmlFor="date">To:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDate}
        />
        <label htmlFor="category">Category</label>
        {/* 
      gave up on this because checkboxes suck */}
        <div className="select">
          <input
            type="checkbox"
            checked={checkers["Art & Culture"]}
            value="Art & Culture"
            name="Art & Culture"
            id="art"
            onChange={handleCheck}
          />
          <label htmlFor="art">Art & Culture</label>

          <input
            type="checkbox"
            checked={checkers["Community & Environment"]}
            value="Community & Environment"
            name="Community & Environment"
            id="community"
            onChange={handleCheck}
          />
          <label htmlFor="community">Community & Environment</label>

          <input
            type="checkbox"
            checked={checkers["Dancing"]}
            value="Dancing"
            name="Dancing"
            id="dancing"
            onChange={handleCheck}
          />
          <label htmlFor="dancing">Dancing</label>

          <input
            type="checkbox"
            checked={checkers["Games"]}
            value="Games"
            name="Games"
            id="games"
            onChange={handleCheck}
          />
          <label htmlFor="games">Games</label>

          <input
            type="checkbox"
            checked={checkers["Health & Wellbeing"]}
            value="Health & Wellbeing"
            name="Health & Wellbeing"
            id="health"
            onChange={handleCheck}
          />
          <label htmlFor="health">Health & Wellbeing</label>

          <input
            type="checkbox"
            checked={checkers["Language"]}
            value="Language"
            name="Language"
            id="language"
            onChange={handleCheck}
          />
          <label htmlFor="language">Language</label>

          <input
            type="checkbox"
            checked={checkers["Music"]}
            value="Music"
            name="Music"
            id="music"
            onChange={handleCheck}
          />
          <label htmlFor="music">Music</label>

          <input
            type="checkbox"
            checked={checkers["Science & Education"]}
            value="Science & Education"
            name="Science & Education"
            id="science"
            onChange={handleCheck}
          />
          <label htmlFor="science">Science & Education</label>

          <input
            type="checkbox"
            checked={checkers["Sports & Fitness"]}
            value="Sports & Fitness"
            name="Sports & Fitness"
            id="sports"
            onChange={handleCheck}
          />
          <label htmlFor="sports">Sports & Fitness</label>

          <input
            type="checkbox"
            checked={checkers["Support & Coaching"]}
            value="Support & Coaching"
            name="Support & Coaching"
            id="support"
            onChange={handleCheck}
          />
          <label htmlFor="support">Support & Coaching</label>

          <input
            type="checkbox"
            checked={checkers["Technology"]}
            value="Technology"
            name="Technology"
            id="technology"
            onChange={handleCheck}
          />
          <label htmlFor="technology">Technology</label>

          <input
            type="checkbox"
            checked={checkers["Travel & Outdoors"]}
            value="Travel & Outdoors"
            name="Travel & Outdoors"
            id="travel"
            onChange={handleCheck}
          />
          <label htmlFor="travel">Travel & Outdoors</label>

          <input
            type="checkbox"
            checked={checkers["Writing & Literature"]}
            value="Writing & Literature"
            name="Writing & Literature"
            id="writing"
            onChange={handleCheck}
          />
          <label htmlFor="writing">Writing & Literature</label>

          <input
            type="checkbox"
            checked={checkers["Pets & Animals"]}
            value="Pets & Animals"
            name="Pets & Animals"
            id="pets"
            onChange={handleCheck}
          />
          <label htmlFor="pets">Pets & Animals</label>

          <input
            type="checkbox"
            checked={checkers["Other"]}
            value="Other"
            name="Other"
            id="other"
            onChange={handleCheck}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </div>
  );
}

export default EventFilter;
