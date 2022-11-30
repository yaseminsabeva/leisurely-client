import React from 'react'
import useForm from '../hooks/useForm'

function AddEventForm() {
function handleSubmit(){
    preventDefault()
}
  return (
<form onSubmit={handleSubmit}>
    <label htmlFor="title">Title: </label>
        <input type="text" id='title'value={title} onChange={setFormData} />
    <label htmlFor="category">Category: </label>
     <select name="" id="category">
    <option value="Art & Culture">Art & Culture</option>
    <option value="Community & Environment">Community & Environment</option>
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
        <input type="text" id='keywords'value={keywords} onChange={setFormData} />
    <label htmlFor="date">Date of Event: </label>
        <input type="date" id='date'value={dateofEvent} onChange={setFormData} />
    <label htmlFor="time">Time of Event: </label>
        <input type="text" id='time'value={time} onChange={setFormData} />
    <label htmlFor="location">Location: </label>
        <input type="text" id='location'value={location} onChange={setFormData} />
    <label htmlFor="price">Price: € </label>
        <input type="number" id='price'value={price} onChange={setFormData} />
   
<button>Add Event</button>
</form> )
}

export default AddEventForm