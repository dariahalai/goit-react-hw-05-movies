import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 25px;
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px;
  margin-right: 10px;
`;
export const Btn = styled.button`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
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
export const MoviesList = styled.ul`
margin-top: 20px;
`
export const MoviesListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: green;
    font-weight: 500;
  }
`;
