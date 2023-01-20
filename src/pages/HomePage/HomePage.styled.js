import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;
export const TrendList = styled.ul`
  margin-top: 20px;
  max-width: 400px;
`;
export const TrendListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: green;
    font-weight: 500;
  }
`;
