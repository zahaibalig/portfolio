import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(18, 18, 18, 0.8); /* Semi-transparent background */
  text-align: center;
  color: #ffffff;
`;

export const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff9800;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProjectItem = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  background: rgba(31, 31, 31, 0.8); /* Semi-transparent background */
  border: 1px solid #444444;
  border-radius: 5px;
  text-align: left;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ff9800;
`;

export const ProjectTechnologies = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  text-align: justify;
  font-size: 1rem;
`;
