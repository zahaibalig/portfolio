import styled from 'styled-components';

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 rem 0;
`;

export const Photo = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 3px 4px 8px rgba(rgba(11, 12, 88, 0.94));
  opacity: 1; /* Adjust the opacity as needed */
  mix-blend-mode: multiply; /* Blend the photo with the background */
`;
