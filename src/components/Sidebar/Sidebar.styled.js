import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  height: 60px;
  padding-top: 25px;
  padding-bottom: 35px;
  border-bottom: 3px double grey;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const NavItem = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: green;
  }
  &.active {
    color: green;
    border: 1px solid green;
    font-weight: 500;
  }
`;
