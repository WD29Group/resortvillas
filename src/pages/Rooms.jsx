function Rooms() {
  return (
    <>
      {/* reverse Carousel */}
      <div class="container-lg pb-5">
        <div class="row box">
          <div class="col-md-6 " id="acolor">
            <h1 class="text-center mt-5">Superior Room</h1>
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

      {/* Normal Carousel */}
      <div className=" pb-5" id="backgroundRooms">
        <div class="container-lg">
          <div class="row">
            <div class="col-md-6 " id="bcolor">
              <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
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
                      src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/335751494.jpg?k=6f3128a88cdaac4765ab772580d69c9a95e2f9b30223e5133e3e3a34db7ae13b&o=&hp=1"
                      class="d-block w-100 " alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.trvl-media.com/lodging/84000000/83730000/83720300/83720252/202cdcf8.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                      class="d-block w-100 " alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-6 " id="acolor">
              <h1 class="text-center my-5">Deluxe Room</h1>
              <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator,in-room safe, writing desk, bath and toilet separate, bidet, hair dryer, robe, slippers, balcony, Hot and cold shower, bathroom amenities and towels.</p>
              <div className="text-center">
                <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
                <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reverse Carousel */}
      <div class="container-lg pb-5">
        <div class="row box">
          <div class="col-md-6 " id="acolor">
            <h1 class="text-center mt-5">Junior Suite</h1>
            <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator,in-room safe, writing desk, bath and toilet separate, bidet, hair dryer, robe, slippers, balcony, bathtub, Hot and cold shower, bathroom amenities and towels, Seating area.</p>
            <div className="text-center">
              <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
              <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
            </div>
          </div>
          <div class="col-md-6 " id="bcolor">
            <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Normal Carousel */}
      <div className=" pb-5" id="backgroundRooms">
        <div class="container-lg">
          <div class="row">
            <div class="col-md-6 " id="bcolor">
              <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2"
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-6 " id="acolor">
              <h1 class="text-center mt-5">Premier Suite</h1>
              <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator,in-room safe, writing desk, bath and toilet separate, bidet, hair dryer, robe, slippers, balcony, bathtub, Hot and cold shower, bathroom amenities and towels, seating area, with seaview..</p>
              <div className="text-center">
                <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
                <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reverse Carousel */}
      <div class="container-lg pb-5">
        <div class="row box">
          <div class="col-md-6 " id="acolor">
            <h1 class="text-center mt-5">Sky Suite</h1>
            <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator,in-room safe, writing desk, bath and toilet separate, bidet, hair dryer, robe, slippers, balcony, sunbeds, jacuzzi, Hot and cold shower, bathroom amenities and towels, seating area, with seaview.</p>
            <div className="text-center">
              <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
              <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
            </div>
          </div>
          <div class="col-md-6 " id="bcolor">
            <div id="carouselExampleIndicators5" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2"
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
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Normal Carousel */}
      <div className=" pb-5" id="backgroundRooms">
        <div class="container-lg">
          <div class="row">
            <div class="col-md-6 " id="bcolor">
              <div id="carouselExampleIndicators6" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2"
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-6 " id="acolor">
              <h1 class="text-center mt-5">Sky Villa</h1>
              <p>Air-conditioned, 42-inch Smart cabled TV, Wi-Fi, coffee and tea facility, mini-refrigerator,in-room safe, writing desk, bath and toilet separate, bidet, hair dryer, robe, slippers, balcony, sunbeds, jacuzzi, Hot and cold shower, bathroom amenities and towels, seating area, with seaview.</p>
              <div className="text-center">
                <button class="btn-booknow btn btn-warning mt-3 mx-3"> BOOK NOW</button>
                <button class="btn-seemore btn  border-warning mt-3 mx-3" id="seeMore"> SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>



  );
}

export default Rooms;