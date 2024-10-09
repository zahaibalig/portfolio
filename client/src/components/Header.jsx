// src/components/Header.js
import React from 'react';
import { Nav, NavLink, Brand } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <Nav>
    <NavLink to="hero" smooth={true} duration={500}><Brand>Zohaib Ali</Brand></NavLink>
      <div>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Header;