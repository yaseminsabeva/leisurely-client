import axios from "axios";

const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    throw error;
  }
  throw error;
}

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/profile/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllEvents() {
    return service
      .get("/events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  searchHome(searchString) {
    return service
      .post("/search/home", searchString)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneEvent(eventId) {
    return service
      .get(`/events/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserProfile() {
    return service
      .get("/profile/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editUserProfile(userInfo) {
    return service
      .patch("/profile/me", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUserProfile(userInfo) {
    return service
      .delete("/profile/me", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getEventsCreatedByUser() {
    return service
      .get("/profile/me/hosted-events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getEventsSubscribeddByUser() {
    return service
      .get("/profile/me/subscrided-events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addEventForm(eventInfo) {
    return service
      .post("/events", eventInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editEventForm(eventInfo) {
    return service
      .patch(`/events/${eventInfo._id}`, eventInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteEvent(eventId) {
    return service
      .delete(`/events/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  eventSubscribe(eventId) {
    return service
      .patch(`/events/${eventId}/subscribe`, eventId)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAttendeeProfil(attendeeInfo) {
    return service
      .get(`/users/${attendeeInfo}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getEventByFilter(filterQuery) {
    return service
      .get(`/events`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default service;
