import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";

const EditProfile = ({ user, setShowEdit }) => {
  const { authenticateUser, removeUser } = useAuth();
  const [values, handleChange] = useForm({
    name: user.name,
    username: user.username,
    email: user.email,
    description: user.description,
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

    service
      .editUserProfile(fd)
      .then(async () => {
        setShowEdit(false);
        await authenticateUser();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  const handleDelete = () => {
    service
      .deleteUserProfile()
      .then(() => {
        removeUser();
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <div className="edit-user global-form">
        <form onSubmit={handleSubmit}>
          <h2>Edit your profile</h2>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={values.username}
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            name="email"
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
        </form>

        <div className="delete-user">
          <button onClick={handleDelete}>Delete my profile</button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
