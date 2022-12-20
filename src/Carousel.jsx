import "./css/Carousel.css";
function Carousel() {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item" data-bs-interval="2500">
                        <div class="slide1"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>First slide label</h3>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2500">
                        <div class="slide2"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Second slide label</h3>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item active" data-bs-interval="2500">
                        <div class="slide3"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Third slide label</h3>
                            <p>Some representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slideSome representative placeholder content for the third slide.</p>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Carousel;