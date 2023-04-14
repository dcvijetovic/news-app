import { useState } from 'react';
import { Search } from '../assets/icons/icons';
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Navbar from '../components/Navbar/Navbar';
import './mainLayout.scss';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import { BiMenu } from 'react-icons/bi';

const MainLayout = () => {
  const [query, setQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="mainLayout">
        <AnnouncementBar />
        <div className="menuBtn" onClick={() => !setOpenModal(true)}>
          <BiMenu />
        </div>
        <header>
          <h1>
            <span>My</span>News
          </h1>
          <div className="searchBar">
            <Search />
            <input
              type="search"
              placeholder="Search news"
              value={query}
              onChange={handleChange}
            />
            <button>Search</button>
          </div>
        </header>
        <main>
          <div className="navbar">
            <Navbar />
          </div>

          <Outlet context={[query, setQuery]} />
        </main>
      </div>
      {openModal && <Menu closeModal={setOpenModal} />}
    </>
  );
};

export default MainLayout;
