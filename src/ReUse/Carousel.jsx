import "../css/Carousel.css";
function Carousel() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="3000">
            <div className="slide1"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">El Nido Garden Resort</h3>
              <p className="carouselfonts">
                Situated among the lagoons of El Nido, the tropical landscape
                captures a breathtaking view of the island. El Nido Garden
                Resort boasts its scenic atmosphere combined with contemporary
              </p>
              <a className="carouselfonts" href="Resorts">
                . . . See more
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <div className="slide2"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">El Nido Beach Hotel</h3>
              <p className="carouselfonts">
                Situated in El Nido Town Proper on a beachfront location, El
                Nido Beach Hotel gives its guests easy access to the majestic
                Bacuit Bay and the surrounding pristine islands. Guests will
                enjoy the stunning
              </p>
              <a className="carouselfonts" href="Resorts">
                . . . See more
              </a>
            </div>
          </div>

          <div className="carousel-item active" data-bs-interval="3000">
            <div className="slide3"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">Frendz Hostel El Nido</h3>
              <p className="carouselfonts">
                Frendz Resort & Hostels has been famous for creating amazing
                backbacker experiences over the years. We have been voted 2018
                as the best hostel in the philippines by Hostelworld based on
                real 
              </p>
              <a className="carouselfonts" href="Resorts">
                . . . See more
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden carouselfonts">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden carouselfonts">Next</span>
        </button>
      </div>
    </>
  );
}
export default Carousel;
