import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Background from './Background';
import GlobalStyle from '../styles/GlobalStyle';
import { OverlayContainer, SecondImage } from  '../styles/BackgroundOverlay';import Header from './Header';

const Home = ()=> {

  const secondImageRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (secondImageRef.current) {
      const maxScroll = window.innerHeight;
      const opacity = Math.max(1 - scrollY / maxScroll, 0);
      const transform = `translate(-50%, ${-50 + scrollY / maxScroll * 50}%)`;
      secondImageRef.current.style.opacity = opacity;
      secondImageRef.current.style.transform = transform;
    }
  }, [scrollY]);

  return(
    <>
   <GlobalStyle/>
   <Background />
      <Header />
      <OverlayContainer>
        <SecondImage ref={secondImageRef} src="/images/bg-code.png" alt="Small Image 1" />
      </OverlayContainer>
      <div className="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      </>
  );
}

export default Home;