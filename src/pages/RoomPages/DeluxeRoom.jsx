function DeluxeRoom() {
  return (
    <>
      {/* reverse Carousel */}
      <div class="container-lg">
        <div class="row">
          <div>
            <h1 class=" mt-5 mb-0">DELUXE ROOM</h1>
            <h3>SPACES BRIMMING WITH SPLENDID BEAUTY</h3>

          </div>
          <div class="col-md-12" id="bcolor">
            <div id="carouselExampleIndicators8" class="carousel slide d-flex justify-content-center" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/2702272c.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/f9b53db4.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/202cdcf8.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                    class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators8"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators8"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-md-12 mt-5" id="acolor">
            <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator, in-room safe,
              writing desk, bath and toilet separate, bidet, hair dryer, slippers. Hot and cold shower, bathroom amenities
              and towels.</p>
            <div className="d-flex justify-content-start mt-0">
              <button class="btn-booknow btn btn-warning p-3"> BOOK NOW</button>
            </div>
            <div className="mb-5 text-center mt-5">
              <h1>ROOM AMENITIES</h1>
            </div>
            <div>
              <div className="row">
                <div class="card col-md-4">
                  <div class="card-body">
                    <h5 class="card-title">👨</h5>
                    <h5 class="card-subtitle mb-2"> Butler Service</h5>
                    <p class="card-text">Indulge in tailored-to-fit services from Lihim Butlers who ensure all your requests are catered to with efficiency, excellent standards, and always with a personal touch.</p>
                  </div>
                </div>
                <div class="card col-md-4">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                <div class="card col-md-4">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeluxeRoom;