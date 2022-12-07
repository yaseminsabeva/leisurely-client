import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

const FormSignIn = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .signin({ email, password })
      .then((res) => {
        storeToken(res.authToken);
        authenticateUser();
        navigate("/profile");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <>
      <div className="add-user global-form container">
        <h2>Signin</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <button>Submit</button>
          {error && error.message && (
            <p
              className="error"
              style={{ color: "red", textAlign: "center", marginTop: "1rem" }}
            >
              {error.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default FormSignIn;

// const token = localStorage.getItem('authToken')

// axios.get("http://localhost:8080/api/private", {
// 	headers: {
// 		Authorization: `Bearer ${token}` ,
// 	},
// })
