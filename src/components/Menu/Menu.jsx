import { Search } from '../../assets/icons/icons';
import Navbar from '../Navbar/Navbar';
import './menu.scss';
import { IoClose } from 'react-icons/io5';

const Menu = ({ closeModal }) => {
  return (
    <div className="menu">
      <div className="menuBtn" onClick={() => closeModal(false)}>
        <IoClose />
      </div>
      <h1>
        <span>My</span>News
      </h1>
      <div className="searchBar">
        <Search />
        <input type="search" placeholder="Search news" />
      </div>
      <Navbar closeModal={closeModal} />
    </div>
  );
};

export default Menu;
