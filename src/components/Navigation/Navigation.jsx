import { RiHomeHeartLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";

import {Section,NavList,NavItem} from './Navigation.styled';

const navItems = [
  { href: '', text: 'Home', icon: RiHomeHeartLine },
  { href: 'movies', text: 'Movies', icon: TbMovie },
];

const Navigation = () => {
  return (
    <Section>
    <NavList>
      {navItems.map(({ href, text, icon:Icon }) => (
        <li key={href}><NavItem to={href} >
        <Icon size='20' style={{paddingRight:'2px'}}/> {text}
      </NavItem></li>
      ))}
      </NavList>
    </Section>
  );
};

export default Navigation;
