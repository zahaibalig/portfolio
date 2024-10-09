import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AdminDashboard.css';  // Import the CSS file

const AdminDashboard = ({ token }) => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/projects', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, [token]);

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5001/api/projects',
        {
          title,
          description,
          technologies: technologies.split(',').map((tech) => tech.trim())
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setProjects([...projects, res.data]);  // Add new project to the list
      setTitle('');
      setDescription('');
      setTechnologies('');
      setSuccess('Project added successfully!');
      setError('');
    } catch (err) {
      setError('Error adding project');
      setSuccess('');
    }
  };

  // Handle project deletion
  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update the state to remove the deleted project
      setProjects(projects.filter((project) => project._id !== id));
      setSuccess('Project deleted successfully!');
      setError('');
    } catch (err) {
      setError('Error deleting project');
      setSuccess('');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <div className='project-list' key={project._id}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <p>{project.technologies.join(', ')}</p>
            </div>
            <p className="project-description">{project.description}</p>
            <button className="delete-btn" onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </ul>

      <h2>Add New Project</h2>
      <form className="add-project-form" onSubmit={handleAddProject}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="technologies">Technologies</label>
          <input
            type="text"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default AdminDashboard;