import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const stats = [
    {
      title: "Total Tasks",
      value: 24,
      icon: "bi-list-task",
    },

    {
      title: "Completed",
      value: 10,
      icon: "bi-check-circle",
    },

    {
      title: "In Progress",
      value: 8,
      icon: "bi-hourglass-split",
    },

    {
      title: "Overdue",
      value: 6,
      icon: "bi-exclamation-circle",
    },
  ];

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="d-flex justify-content-between">
        <h2>Welcome {user?.name}</h2>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>

      <h4 className="mb-4">Dashboard Overview</h4>

      {/* Stats Grid */}
      <div className="row">
        {stats.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card border-0 shadow-sm p-3 dashboard-card">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">{item.title}</h6>
                  <h2>{item.value}</h2>
                </div>

                <i className={`bi ${item.icon} fs-1 text-primary`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
