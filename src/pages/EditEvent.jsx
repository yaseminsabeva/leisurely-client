import React from "react";
import useForm from "../hooks/useForm";
import apiHandler from "../api/apiHandler";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditEvent() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    apiHandler
      .getOneEvent(id)
      .then((response) => {
        // console.log(response.data);
        setEvent(response);
        setEditForm(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  console.log(event);

  const [
    {
      _id,
      title,
      category,
      description,
      keywords,
      dateOfEvent,
      time,
      location,
      price,
    },
    handleChange,
    resetEditForm,
    setEditForm,
  ] = useForm({
    title: "",
    category: "",
    description: "",
    keywords: "",
    dateOfEvent: "",
    time: "",
    location: "",
    price: 0,
  });
  function handleSubmit(e) {
    e.preventDefault();
    apiHandler
      .editEventForm({
        _id,
        title,
        category,
        description,
        keywords,
        dateOfEvent,
        time,
        location,
        price,
      })
      .then(({ _id }) => {
        navigate(`/events/${_id}`);
      })
      .catch((error) => {
        setError(error.response);
      });
  }
  return (
    <>
      {title && (
        <div>
          {" "}
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChange}
            >
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
              name="keywords"
              value={keywords}
              onChange={handleChange}
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
            />
            <label htmlFor="date">Date of Event: </label>
            <input
              type="date"
              id="date"
              name="dateOfEvent"
              value={dateOfEvent.slice(0, dateOfEvent.indexOf("T"))}
              onChange={handleChange}
            />
            <label htmlFor="time">Time of Event: </label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleChange}
            />
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleChange}
            />
            <label htmlFor="price">Price: € </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handleChange}
            />

            <button>Edit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditEvent;
