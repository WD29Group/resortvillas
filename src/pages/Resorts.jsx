import { Link } from "react-router-dom";
import MapLoc from "./MapLoc";
// import Rooms from "./Rooms";
import { useState, useEffect } from "react";
import hotelsVillas from "./hotelsVillas.json"


function Resorts() {
  useEffect(() => {
    console.log(hotelsVillas)
  });
  return (
  <>
    {/* /* -------------------Hotel Cards Array----------------------------- */}
    <div className="resort-card m-5 ">
      {hotelsVillas.hotels.map((hotel) => {
        return (
          <div className="row d-flex justify-content-center">

            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
              <div class="row g-0">
                <div class="col-md-4 py-3">
                  <img src={hotel.thumbnailUrl} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title m-0 p-0">{hotel.title}</h5>
                    <p class="card-text"><small class="text-muted">{hotel.location}</small></p>
                    <p class="card-text">{hotel.content}</p>
                    <div className="card-text">
                      <ul className="col-fluid">
                      {/* /* -------------------End ofHotel Cards Array----------------------------- */}
                      
                         {/* /* -------------------Facilities Array----------------------------- */}
                        <div className="row">
                          {hotel.facilities.map((facility) => {
                            return (<li className="facilities col-6 col-md-4 d-flex justify-content-start" id="facilities" style={{ fontSize: "12px" }}>{facility}</li>)
                          })}
                        </div>
                        {/* /* ------------------- End of Facilities Array----------------------------- */}
                      </ul>
                      <div class="d-flex mb-3">
                        <div class="me-auto p-2"><h4> P {hotel.price}</h4></div>
                        <div class="p-2">
                          <button Link to="/Booking" className="btn btn-warning mb-1">
                             <Link to="/Booking"  onClick={() => ('Booking')} className="text-dark">BOOK NOW</Link> 
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
      })};
    </div >
    <MapLoc/>
    </>
  );
}

export default Resorts;