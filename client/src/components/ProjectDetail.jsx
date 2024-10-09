import React from 'react';

import { useLocation } from 'react-router-dom';

const ProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state || {};
  return (
    <div>
      <h1>Project Name</h1>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.technologies}</p>
          <p>{project.description}</p>
        </>
      ) : (
        <p>No project data found.</p>
      )}
    </div>
  );
}

export default ProjectDetail;