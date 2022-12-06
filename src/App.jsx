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
import "./components/Forms/Form.css"

function App() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <ListEvents
              search={search}
              setSearch={setSearch}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          }
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
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
