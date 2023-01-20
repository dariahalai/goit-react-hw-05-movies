import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const MoviesListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: green;
    font-weight: 500;
  }
`;
export const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;
export const Btn = styled.li`
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
  }
`;
