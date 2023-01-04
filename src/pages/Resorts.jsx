import MapLoc from "./MapLoc";
// import Rooms from "./Rooms";
import { useState, useEffect } from "react";
import hotelsVillas from "./hotelsVillas.json"

function Resorts() {
  useEffect(() => {
    console.log(hotelsVillas)
  });
  return (
    <div className="m-5">
      <MapLoc />
      {hotelsVillas.hotels.map((hotel) => {
        return (
          <>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div class="card">
                    <img src={hotel.thumbnailUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h4 class="card-title">{hotel.title}</h4>
                      <h5 class="card-title">{hotel.location}</h5>
                      <p class="card-text">{hotel.content}</p>
                      <p class="card-text">{hotel.facilities}</p>
                      <p class="card-text">P {hotel.price} </p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>

        );
        })};
    </div>


  );
}

export default Resorts;