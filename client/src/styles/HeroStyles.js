import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ffffff;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const HeroButton = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #1f1f1f;
  background: #ff9800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #ffb74d;
  }
`;
