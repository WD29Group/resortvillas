import { Link } from "react-router-dom";
import React, { useState } from 'react';
import ChangeTopBG from "./ReUse/ChangeTopBG";
import ScrollToTopButton from './ReUse/ScrollToTopButton';
import Footer from "./ReUse/Footer";
function Navigation({ children }) {
  const [selected, setSelected] = useState('Home');
  return (
    <>
      <div class-="container">
        <span>
          <img className="logo" alt="Logo" src="./logo.png" />
          <h1 className="siteName">Resort Villas</h1>
        </span>
        <nav className="text-decoration-none">
          <div className="navmenu">
            <Link to="/" className={selected === 'Home' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Home')}>
              Home
            </Link>
            <Link to="/Resorts" className={selected === 'Resorts' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Resorts')}>
              Resorts
            </Link>
            <Link to="/Gallery" className={selected === 'Gallery' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Gallery')}>
              Gallery
            </Link>
            <Link to="/Services" className={selected === 'Services' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Services')}>
              Services
            </Link>
            <Link to="/Booking" className={selected === 'Booking' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Booking')}>
              Booking
            </Link>
            <Link to="/News" className={selected === 'News' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('News')}>
              News
            </Link>
            <Link to="/Weather" className={selected === 'Weather' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Weather')}>
              Weather
            </Link>
          </div>
        </nav>
      </div>
      <button
        className="navbar-toggler material-symbols-outlined menu"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        Menu
      </button>
      <ul className="navmenu2 collapse navbar-collapse xtransp" id="navbar">
        <li>
         <Link to="/" className={selected === 'Home' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Home')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Resorts" className={selected === 'Resorts' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Resorts')}>
            Resorts
          </Link>
        </li>
        <li>
          <Link to="/Gallery" className={selected === 'Gallery' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Gallery')}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/Services" className={selected === 'Services' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Services')}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/Booking" className={selected === 'Booking' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Booking')}>
            Booking
          </Link>
        </li>
        <li>
          <Link to="/News" className={selected === 'News' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('News')}>
            News
          </Link>
        </li>
        <li>
          <Link to="/Weather" className={selected === 'Weather' ? 'navButton selected nvbtn' : 'navButton nvbtn'} onClick={() => setSelected('Weather')}>
            Weather
          </Link>
        </li>
      </ul>
      <ChangeTopBG />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
export default Navigation;
