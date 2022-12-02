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
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

// apiHandler.signup = (userInfo) => {
// 	return apiHandler
// 		.post("/api/auth/signup")
// 		.then((res) => res.data)
// 		.catch(errorHandler)
// }

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
      .get("/auth/me")
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

  getOneEvent(eventId) {
    return service
      .get(`/events/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserProfile() {
    return service
      .get("/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editUserProfile(userInfo) {
    return service
      .patch("/auth/me", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUserProfile(userInfo) {
    return service
      .delete("/auth/me", userInfo)
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
      .patch(`/events/${eventInfo._id}`)
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
  // getAllTheCats() {
  // 	return service
  // 		.get("/api/cats")
  // 		.then((res) => res.data)
  // 		.catch(errorHandler);
  // },
};

// export default apiHandler

export default service;
