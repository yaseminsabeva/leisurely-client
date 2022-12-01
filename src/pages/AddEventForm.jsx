import React from "react";
import useForm from "../hooks/useForm";
import apiHandler from "./../api/apiHandler";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddEventForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [
    { title, category, keywords, dateOfEvent, time, location, price },
    handleChange,
  ] = useForm({
    title: "",
    category: "",
    keywords: "",
    dateOfEvent: "",
    time: "",
    location: "",
    price: 0,
  });
  function handleSubmit(e) {
    e.preventDefault();
    apiHandler
      .addEventForm(values)
      .then(() => {
        navigate("/events/:id");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" value={title} onChange={handleChange} />
        <label htmlFor="category">Category: </label>
        <select name="" id="category" value={category} onChange={handleChange}>
          <option value="Art & Culture">Art & Culture</option>
          <option value="Community & Environment">
            Community & Environment
          </option>
          <option value="Dancing">Dancing</option>
          <option value="Games">Games</option>
          <option value="Health & Wellbeing">Health & Wellbeing</option>
          <option value="Language">Language</option>
          <option value="Music">Music</option>
          <option value="Science & Education">Science & Education</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Support & Coaching">Support & Coaching</option>
          <option value="Technology">Technology</option>
          <option value="Travel & Outdoors">Travel & Outdoors</option>
          <option value="Writing & Literature">Writing & Literature</option>
          <option value="Pets & Animals">Pets & Animals</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="keywords">Keywords: </label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={handleChange}
        />
        <label htmlFor="date">Date of Event: </label>
        <input
          type="date"
          id="date"
          value={dateOfEvent}
          onChange={handleChange}
        />
        <label htmlFor="time">Time of Event: </label>
        <input type="text" id="time" value={time} onChange={handleChange} />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleChange}
        />
        <label htmlFor="price">Price: € </label>
        <input type="number" id="price" value={price} onChange={handleChange} />

        <button>Add Event</button>
      </form>
    </div>
  );
}

export default AddEventForm;
