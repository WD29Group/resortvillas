import "./css/Carousel.css";
function Carousel() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item" data-bs-interval="2500">
                        <div className="slide1"></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="">First slide label</h3>
                            <p className="">Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2500">
                        <div className="slide2"></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="">Second slide label</h3>
                            <p className="">Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item active" data-bs-interval="2500">
                        <div className="slide3"></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="">Third slide label</h3>
                            <p className="">Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Carousel;