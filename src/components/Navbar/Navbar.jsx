import { NavLink } from 'react-router-dom';
import './navbar.scss';
import {
  Business,
  General,
  Health,
  Home,
  Science,
  Sports,
  Technology,
} from '../../assets/icons/icons';

const Navbar = ({ closeModal }) => {
  return (
    <nav>
      <NavLink to="/" onClick={() => closeModal(false)}>
        <Home />
        Home
      </NavLink>
      <NavLink to="general" onClick={() => closeModal(false)}>
        <General />
        General
      </NavLink>
      <NavLink to="business" onClick={() => closeModal(false)}>
        <Business />
        Business
      </NavLink>
      <NavLink to="health" onClick={() => closeModal(false)}>
        <Health />
        Health
      </NavLink>
      <NavLink to="science" onClick={() => closeModal(false)}>
        <Science />
        Science
      </NavLink>
      <NavLink to="sports" onClick={() => closeModal(false)}>
        <Sports />
        Sports
      </NavLink>
      <NavLink to="technology" onClick={() => closeModal(false)}>
        <Technology />
        Technology
      </NavLink>
    </nav>
  );
};

export default Navbar;
