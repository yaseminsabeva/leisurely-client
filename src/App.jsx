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
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import Users from "./pages/Users";
import { useState } from "react";
import "./components/Forms/Form.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={<ListEvents filters={filters} setFilters={setFilters} />}
        />
        <Route path="/events/:id" element={<OneEvent />} />
        <Route path="/users/:id" element={<Users />} />

        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/events/:id/edit" element={<EditEvent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
