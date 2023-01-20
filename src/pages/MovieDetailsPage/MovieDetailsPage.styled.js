import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnBack = styled(Link)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid green;
  &:hover {
    cursor: pointer;
    background-color: green;
    font-weight: 500;
  }
  &.active {
    background-color: green;
    font-weight: 500;
    color: black;
  }
`;
