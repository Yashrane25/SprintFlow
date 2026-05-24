import { useEffect, useState } from "react";
import API from "../api/axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  //FETCH PROJECTS
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  //CREATE PROJECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", formData);

      setShowModal(false);

      setFormData({
        title: "",
        description: "",
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Projects</h2>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Create Project
        </button>
      </div>

      {/* PROJECT CARDS */}

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project._id}>
            <div className="card border-0 shadow-sm p-3 project-card">
              <h4>{project.title}</h4>

              <p className="text-muted">{project.description}</p>

              <small>Created by: {project.createdBy?.name}</small>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}

      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Create Project</h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <input
                    type="text"
                    placeholder="Project Title"
                    className="form-control mb-3"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      })
                    }
                  />

                  <textarea
                    placeholder="Description"
                    className="form-control"
                    rows="4"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
