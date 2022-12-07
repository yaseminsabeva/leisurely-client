import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

const FormSignUp = () => {
  const [values, handleChange] = useForm({
    name: "",
    username: "",
    email: "",
    password: "",
    description: "",
    picture: {},
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    for (const [key, value] of Object.entries(values)) {
      fd.append(key, value);
    }

    apiHandler
      .signup(fd)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <>
      <div className="add-user global-form container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name*</label>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="username">Username*</label>
          <input
            onChange={handleChange}
            value={values.username}
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="email">Email*</label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password*</label>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="password"
            name="password"
          />
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            value={values.description}
            type="text"
            placeholder="Add some description"
            id="description"
            name="description"
          />
          <label htmlFor="picture">Picture</label>
          <input
            onChange={handleChange}
            type="file"
            id="picture"
            name="picture"
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

export default FormSignUp;
