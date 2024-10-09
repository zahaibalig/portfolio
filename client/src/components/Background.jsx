import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  opacity: 1;
  transition: opacity 0.5s ease-out;
  z-index: -1; /* Ensure it's behind other content */
`;

const Background = () => {
  const bgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          bgRef.current.classList.add('fade-out');
        } else {
          bgRef.current.classList.remove('fade-out');
        }
      },
      { threshold: [0.1] }
    );

    observer.observe(bgRef.current);

    return () => observer.disconnect();
  }, []);

  return <BackgroundContainer ref={bgRef} />;
};

export default Background;
