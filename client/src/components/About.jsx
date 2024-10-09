import React from 'react';
import { AboutSection, AboutTitle, AboutText } from '../styles/AboutStyles';

const About = () => {
  const title =  "Summary";
  const text = "With a master's degree in applied computer science from Østfold University College (HiØ), I am a software engineer with over two years of professional experience in software development, and technical support. I have worked as a software engineer at Simula Research Laboratory, a leading research center in Norway, where I contributed to the development and testing of innovative software solutions for various domains. I have also worked as a software engineer at Techcon, a global technology firm, where I delivered high-quality software products and services to clients across different industries. Additionally, I have provided IT support to students and faculty at the University of Lahore, where I completed my bachelor's degree in computer science. I am passionate about applying my skills and knowledge to solve complex problems, create value, and improve lives through technology. I am always eager to learn new technologies, tools, and methodologies, and to collaborate with diverse and talented teams. I am looking for new opportunities and challenges that will allow me to grow and make a positive impact in the field of information technology.";

  return (
    <AboutSection id="about">
      <AboutTitle>{title}</AboutTitle>
      <AboutText>{text}</AboutText>
    </AboutSection>
  );
};

export default About;
