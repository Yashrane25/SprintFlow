import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { user, logout } = useAuth();
  return (
    <div className="d-flex">
      {/* SIDEBAR */}
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{
          width: "250px",
          position: "fixed",
        }}
      >
        <h3 className="mb-4 text-center">SprintFlow</h3>

        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link to="/dashboard" className="nav-link text-white">
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link to="/projects" className="nav-link text-white">
              <i className="bi bi-kanban me-2"></i>
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          background: "#f5f7fb",
        }}
      >
        {/* NAVBAR */}
        <div className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
          <h5 className="m-0">Welcome, {user?.name}</h5>

          <button className="btn btn-danger btn-sm" onClick={logout}>
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
