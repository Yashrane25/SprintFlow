import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Welcome {user?.name}</h2>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
