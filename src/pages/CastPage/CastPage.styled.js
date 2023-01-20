import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const CastList = styled.ul`
  display: flex; 
  justify-content :center;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 1200px) {
    justify-content :flex-start;
  } 
`;
export const CastItem = styled.li`
  width: 150px;
`;  
// const CharacterName = styled.li`

// `
