import { Link } from "react-router-dom";
import MapLoc from "./MapLoc";
// import Rooms from "./Rooms";

import hotelsVillas from "./hotelsVillas.json";


function Resorts() {
  // useEffect(() => {
  //   console.log(hotelsVillas)
  // });
  return (
    <>
       {/* -------------------Hotel Cards Array----------------------------- */}
      <div className="resort-card m-5 ">
        {hotelsVillas.hotels.map((hotel) => {
          return (
            <div className="row d-flex justify-content-center">
              <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                <div className="row g-0">
                  <div className="col-md-4 py-3">
                    <img src={hotel.thumbnailUrl} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div class="d-flex mb-3">
                        <div class="me-auto p-1">
                          <h5 className="card-title m-0 p-1">{hotel.title}</h5>
                          <p className="card-text"><small class="text-muted" style={{ fontSize: "12px" }}>📍 {hotel.location} <iframe src={hotel.iframe} /></small></p>
                        </div>
                        <div class="p-1">
                          <h5 className="card-title m-0 p-1">⭐<strong className=" bg-danger rounded p-1">{hotel.ratings}.0</strong></h5>
                        </div>
                      </div>
                      <p className="card-text"><small>{hotel.content}</small></p>
                      <div className="card-text">
                        <ul className="col-fluid">
                          {/* /* -------------------End ofHotel Cards Array----------------------------- */}

                          {/* /* -------------------Facilities Array----------------------------- */}
                          <div className="row">
                            {hotel.facilities.map((facility) => {
                              return (
                                <li className="facilities col-6 col-md-4 d-flex justify-content-start" id="facilities" style={{ fontSize: "12px" }}>{facility}</li>)
                            })}
                          </div>
                          {/* /* ------------------- End of Facilities Array----------------------------- */}
                        </ul>
                        <div className="d-flex mb-3">
                          <div className="price-now me-auto p-2"><h4> ₱{hotel.price}</h4></div>
                          <div className="p-2">
                            <button Link to="/Booking" className="book-now btn btn-warning mb-1">
                              <Link to="/Booking" onClick={() => ('Booking')} className=" text-dark">BOOK NOW</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div >
      <MapLoc />
    </>
  );
}

export default Resorts;