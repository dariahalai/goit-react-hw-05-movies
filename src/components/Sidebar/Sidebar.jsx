import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import { RiHomeHeartLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";

const navItems = [
  { href: '', text: 'Home', icon: RiHomeHeartLine },
  { href: 'movies', text: 'Movies', icon: TbMovie },
];

const Sidebar = () => {
  return (
    <header className={css.headerNav}>
    <ul className={css.navList}>
      {navItems.map(({ href, text, icon:Icon }) => (
        <li className={css.navItem} key={href}><NavLink className={css.navLink} to={href} >
        <Icon size='20' style={{paddingRight:'2px'}}/> {text}
      </NavLink></li>
      ))}
      </ul>
    </header>
  );
};

export default Sidebar;
