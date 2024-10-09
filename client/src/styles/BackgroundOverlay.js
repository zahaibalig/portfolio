import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allows interaction with underlying content */
  z-index: 0; /* Ensure it's behind other content */
`;

export const SecondImage = styled.img`
  position: absolute;
  width: 400px;
  height: 200px;
  top: 80%;
  left: 75%;
  transform: translate(-50%, -50%);
  opacity: 0.9; /* Adjust opacity as needed */
  z-index: 0; /* Ensure it's behind other content */
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
`;
