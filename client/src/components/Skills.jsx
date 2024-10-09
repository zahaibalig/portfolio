// src/components/Skills.js
import React from 'react';
import { SkillsSection, SkillsTitle, SkillsList, SkillItem } from '../styles/SkillsStyles';

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS", "Next.js", ".Net", "Python", "C++"];

  return (
    <SkillsSection id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsSection>
  );
};

export default Skills;
