import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import ListEvents from "./pages/ListEvents";
import OneEvent from "./pages/OneEvent";
import AddEventForm from "./pages/AddEventForm";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<ListEvents />} />
        <Route path="/events/add" element={<AddEventForm />} />
        <Route path="/events/:id" element={<OneEvent />} />

        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn */}
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
