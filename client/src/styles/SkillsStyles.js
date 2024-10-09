import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(18, 18, 18, 0.8); /* Semi-transparent background */
  text-align: center;
  color: #ffffff;
`;

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff9800;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SkillItem = styled.li`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
  border: 1px solid #444444;
  border-radius: 5px;
  font-size: 1rem;
  color: #ffffff;
`;
