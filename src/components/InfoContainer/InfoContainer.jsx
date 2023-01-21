import { Section, Title, BtnInfoList, BtnLink} from './FilmInfo.styled';
import { useLocation } from 'react-router-dom';

 const btnLink = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

const InfoContainer = () => {
  const location = useLocation(); 

  return (
    <Section>
      <Title>Aditional information</Title>
      <BtnInfoList>
        {btnLink.map(({ href, text }) => (
          <li key={href}>
            <BtnLink to={href} state={{from : location}}>{text}</BtnLink>
          </li>
        ))}
      </BtnInfoList>
    </Section>
  );
};

export default InfoContainer;
