import "../css/Carousel.css";
function Carousel(props) {
  return (
    <>
      <div
        id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="" aria-label="Slide 1"
            style={{
              border: "solid white",
              background: "rgba(255,255,255,0.5)",
              height: "0px",
              borderRadius: "20px",
            }}
          ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className=""
            style={{
              border: "solid white",
              background: "rgba(255,255,255,0.5)",
              height: "0px",
              borderRadius: "20px",
            }}
          ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"
            style={{
              border: "solid white",
              background: "rgba(255,255,255,0.5)",
              height: "0px",
              borderRadius: "20px",
            }}
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item" data-bs-interval="3000">
            <div className="slide1"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">{props.Title1}</h3>
              <p className="carouselfonts">{props.Body1}</p>
              {props.Link1}
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <div className="slide2"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">{props.Title2}</h3>
              <p className="carouselfonts">{props.Body2}</p>
               {props.Link2}
            </div>
          </div>

          <div className="carousel-item active" data-bs-interval="3000">
            <div className="slide3"></div>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="carouselHfonts">{props.Title3}</h3>
              <p className="carouselfonts">{props.Body3}</p>
              {props.Link3}
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
