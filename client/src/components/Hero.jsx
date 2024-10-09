import React from 'react';
import { HeroSection, HeroTitle, HeroSubtitle, HeroButton } from '../styles/HeroStyles';

const Hero = () => {
  return (
    <HeroSection id="hero" className="transparent">
      <HeroTitle>Zohaib Ali</HeroTitle>
      <HeroSubtitle>Software Engineer</HeroSubtitle>
      <HeroButton href="#about">Learn More</HeroButton>
    </HeroSection>
  );
};

export default Hero;
