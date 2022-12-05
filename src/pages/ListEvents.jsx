import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import EventCardSmall from "../components/Events/EventCardSmall";
import EventFilter from "../components/Events/EventFilter";
import { useSearchParams } from "react-router-dom";

function ListEvents({ search, setSearch }) {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [checkers, setCheckers] = useState({
    "Art & Culture": false,
    "Community & Environment": false,
    Dancing: false,
    Games: false,
    "Health & Wellbeing": false,
    Language: false,
    Music: false,
    "Science & Education": false,
    "Sports & Fitness": false,
    "Support & Coaching": false,
    Technology: false,
    "Travel & Outdoors": false,
    "Writing & Literature": false,
    "Pets & Animals": false,
    Other: false,
  });
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

  useEffect(() => {
    const title = searchParams.get("title");
    // if (title) {
    let trueCheckBox = {};
    for (const key in checkers) {
      if (checkers[key]) {
        trueCheckBox[key] = true;
      }
    }
    if (!Object.keys(trueCheckBox).length) trueCheckBox = null;
    service
      .get("/events", {
        params: { title: search, checkers: trueCheckBox },
      })
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => console.log(e.message));
    // } else {
    // service.getAllEvents().then((data) => {
    //   setEvents(data);
    // });
    // }
  }, [
    art,
    community,
    dancing,
    games,
    health,
    language,
    music,
    science,
    sports,
    support,
    technology,
    travel,
    writing,
    pets,
    other,
    search,
  ]);

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

  return (
    <div>
      <EventFilter
        checkers={checkers}
        setCheckers={setCheckers}
        search={search}
        setSearch={setSearch}
      />
      <ul>
        <h1>Upcoming Events</h1>
        {!events.length ? (
          <div className="loading">No events matching your criteria....</div>
        ) : (
          ""
        )}
        {events.map((event) => {
          return <EventCardSmall key={event._id} event={event} />;
        })}
      </ul>
    </div>
  );
}

export default ListEvents;
