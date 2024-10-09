import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(18, 18, 18, 0.8);
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  color: rgba(69, 230, 248, 0.89);
  cursor: pointer;
  &:hover {
    color: #ff9800;
  }
`;

export const Brand = styled.h1`
  font-size: 1.5rem;
  color: rgba(69, 230, 248, 0.89);
`;
