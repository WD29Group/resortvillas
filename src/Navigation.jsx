import { Link } from "react-router-dom";
import { useState } from 'react';
import ScrollToTopButton from './ReUse/ScrollToTopButton';
import SpecialOffer from './ReUse/SpecialOffer';
function Navigation({ children }) {
  const  setSelected = useState('*');
  return (
    <>
      <div className={
        window.location.href.includes("Resorts") ||
        window.location.href.includes("Gallery") ||
        window.location.href.includes("Services") ||
        // window.location.href.includes("Booking") ||
        window.location.href.includes("News") ||
        window.location.href.includes("Weather")      
        ? "unshow" : "show"}
      >
      <SpecialOffer scrollAmount="150"/>
      </div>
      <div class-="container">
        <span>
          <img className="logo" alt="Logo" src="./logo.png" />
          <h1 className="siteName ps-3">Resort Villas</h1>
        </span>
        <nav className="text-decoration-none">
          <div className="navmenu">
            <Link
              to="/Home"
              className={
                window.location.href.includes("Home")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
                  
              }
              onClick={() => setSelected("Home")}
            >
              Home
            </Link>
            <Link
              to="/Resorts"
              className={
                window.location.href.includes("Resorts")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("Resorts")}
            >
              Resorts
            </Link>
            <Link
              to="/Gallery"
              className={
                window.location.href.includes("Gallery")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("Gallery")}
            >
              Gallery
            </Link>
            <Link
              to="/Services"
              className={
                window.location.href.includes("Services")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("Services")}
            >
              Services
            </Link>
            {/* <Link
              to="/Booking"
              className={
                window.location.href.includes("Booking")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("Booking")}
            >
              Booking
            </Link> */}
            <Link
              to="/News"
              className={
                window.location.href.includes("News")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("News")}
            >
              News
            </Link>
            <Link
              to="/Weather"
              className={
                window.location.href.includes("Weather")
                  ? "navButton selected nvbtn"
                  : "navButton nvbtn"
              }
              onClick={() => setSelected("Weather")}
            >
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
          <Link
            to="/Home"
            className={
              window.location.href.includes("Home")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Resorts"
            className={
              window.location.href.includes("Resorts")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Resorts")}
          >
            Resorts
          </Link>
        </li>
        <li>
          <Link
            to="/Gallery"
            className={
              window.location.href.includes("Gallery")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Gallery")}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/Services"
            className={
              window.location.href.includes("Services")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Services")}
          >
            Services
          </Link>
        </li>
        <li>
          {/* <Link
            to="/Booking"
            className={
              window.location.href.includes("Booking")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Booking")}
          >
            Booking
          </Link> */}
        </li>
        <li>
          <Link
            to="/News"
            className={
              window.location.href.includes("News")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("News")}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="/Weather"
            className={
              window.location.href.includes("Weather")
                ? "navButton selected nvbtn"
                : "navButton nvbtn"
            }
            onClick={() => setSelected("Weather")}
          >
            Weather
          </Link>
        </li>
      </ul>
      {children}
      <ScrollToTopButton />
    </>
  );
}
export default Navigation;
