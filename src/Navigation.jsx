import { Link } from "react-router-dom";

function Navigation({ children }) {
  return (
    <>
      <div class-="container">
        <span>
          <img className="logo" src="./logo.png" />
          <h1 className="siteName">Resort Villas</h1>
        </span>
        <nav className="text-decoration-none">
          <div className="navmenu">
            <Link to="/" className="navButton nvbtn"> Home </Link>
            <Link to="/Resorts" className="navButton nvbtn"> Resorts </Link>
            <Link to="/Galery" className="navButton nvbtn"> Gallery </Link>
            <Link to="/Services" className="navButton nvbtn"> Services </Link>
            <Link to="/Booking" className="navButton nvbtn"> Booking </Link>
            <Link to="/News" className="navButton nvbtn"> News </Link>
            <Link to="/Weather" className="navButton nvbtn"> Weather </Link>
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
        <Link to="/" className="navButton nvbtn"> Home </Link>
        </li>
        <li>
            <Link to="/Resorts" className="navButton nvbtn"> Resorts </Link>
        </li>
        <li>
            <Link to="/Galery" className="navButton nvbtn"> Gallery </Link>
        </li>
        <li>
            <Link to="/Services" className="navButton nvbtn"> Services </Link>
        </li>
        <li>
            <Link to="/Booking" className="navButton nvbtn"> Booking </Link>
        </li>
        <li>
            <Link to="/News" className="navButton nvbtn"> News </Link>
        </li>
        <li>
            <Link to="/Weather" className="navButton nvbtn"> Weather </Link>
        </li>
      </ul>
      { children }
    </>
  );
}

export default Navigation;
