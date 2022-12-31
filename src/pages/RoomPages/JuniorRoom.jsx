function JuniorRoom() {
  return (
    <>
      {/* reverse Carousel */}
      <div class="container-lg">
        <div class="row box">
          <div class="col-md-6 " id="acolor">
            <h1 class="text-center mt-5">Deluxe Room</h1>
            <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator, in-room safe,
              writing desk, bath and toilet separate, bidet, hair dryer, slippers. Hot and cold shower, bathroom amenities
              and towels.</p>
            <div className="text-center">
              <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
              <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
            </div>

          </div>
          <div class="col-md-6" id="bcolor">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/2702272c.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100 " alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/f9b53db4.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100 " alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/202cdcf8.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100 " alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default  JuniorRoom;