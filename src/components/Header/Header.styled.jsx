import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #032541;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px 20px;
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  border: 0.5px solid #cccccc;
  border-radius: 5px;

  &.active {
    font-weight: 700;
    background-color: #85d2db;
    color: #032541;
  }
`;
