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
            <div class="row">
              <div className="col">
                
              </div>
              <div className="col">
            <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/" className="navButton nvbtn"> Home </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/Resorts" className="navButton nvbtn"> Resorts </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/Galery" className="navButton nvbtn"> Gallery </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/Services" className="navButton nvbtn"> Services </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/Booking" className="navButton nvbtn"> Booking </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/News" className="navButton nvbtn"> News </Link>
              </div>
              <div class="col-xxl-l col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link to="/Weather" className="navButton nvbtn"> Weather </Link>
              </div>
              </div>
              <div className="col">
                
              </div>
              

            </div> 
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
