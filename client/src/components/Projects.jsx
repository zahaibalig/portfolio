// src/components/Projects.js
import React from 'react';
import { ProjectsSection, ProjectsTitle, ProjectsList, ProjectItem, ProjectTitle, ProjectDescription , ProjectTechnologies} from '../styles/ProjectsStyles';
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Financial Insights",
      technologies: "React, Next.js, .Net, Python, PostgreSQL",
      description: "Developed a data-driven platform that collects and analyzes companies’ financial data using machine learning models. The front-end interface was built using React and Next.js, providing users with interactive dashboards and data visualization tools. .net was used for backend development, managing data collection, processing, and API interactions. The platform automatically scrapes publicly available financial data, including revenue reports, market trends, and economic indicators."
    },
    {
      title: "Nord Strøm",
      technologies: "React, Next.js, Node.js, Mongodb",
      description: "Developed a full-stack application to track real-time electricity prices in Oslo, leveraging data from the Nord Pool market. The app offers users key insights into electricity costs, including historical data, cost estimation, and price forecasting, enabling smarter energy usage. Real-time electricity price updates for Oslo Historical price trends and analysis Cost estimation based on individual usage Price drop notifications to optimize consumption. AI-powered price forecasting using machine learning models  Technologies: React, Node.js, MongoDB, Nord Pool API, Firebase (notifications), AI/ML for forecasting"
    },
    {
      title: "Huldra",
      technologies: "React, Firebase",
      description: "I enhanced the Huldra framework by extending its input modalities and integrating new case types, focusing on improving user experience (UX) and facilitating a greater number of survey cases for researchers."
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            {/* <ProjectTitle >{project.title}</ProjectTitle> */}
            <Link 
            to="/project-detail"
            state={{project}}
            ><ProjectTitle >{project.title}</ProjectTitle></Link>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
