import { Section, Title, BtnInfoList, BtnLink} from './FilmInfo.styled';

const InfoContainer = () => {
  const btnLink = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

  return (
    <Section>
      <Title>Aditional information</Title>
      <BtnInfoList>
        {btnLink.map(({ href, text }) => (
          <li key={href}>
            <BtnLink to={href}>{text}</BtnLink>
          </li>
        ))}
      </BtnInfoList>
    </Section>
  );
};

export default InfoContainer;
