import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await API.post("/auth/login", formData);

      login(res.data.user, res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center">Login</h2>

            <form onSubmit={handleSubmit}>
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

              <button className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
