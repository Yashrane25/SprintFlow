import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center">Register</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <select
                name="role"
                className="form-control mb-3"
                onChange={handleChange}
              >
                <option value="member">Member</option>

                <option value="admin">Admin</option>
              </select>

              <button className="btn btn-success w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
