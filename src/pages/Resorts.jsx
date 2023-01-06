// import MapLoc from "./MapLoc";
// // import Rooms from "./Rooms";
// import { useState, useEffect } from "react";
// import hotelsVillas from "./hotelsVillas.json"

// function Resorts() {
//   useEffect(() => {
//     console.log(hotelsVillas)
//   });
//   return (
//     <div className="m-5">
//       <MapLoc />
//       {hotelsVillas.hotels.map((hotel) => {
//         return (

//           <>
//           <div>
//           </div>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div class="card">
//                     <img src={hotel.thumbnailUrl} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h4 className="card-title">{hotel.title}</h4>
//                       <h5 className="card-title">{hotel.location}</h5>
//                       <p className="card-text">{hotel.content}</p>
//                       <p className="card-text">{hotel.facilities}</p>
//                       <p className="card-text">P {hotel.price} </p>
//                       <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </>
//         );
//         })};
//     </div>


//   );
// }

// export default Resorts;

import MapLoc from "./MapLoc";
// import Rooms from "./Rooms";
import { useState, useEffect } from "react";
import hotelsVillas from "./hotelsVillas.json"

function Resorts() {
  useEffect(() => {
    console.log(hotelsVillas)
  });
  return (
    <div className="resort-card m-5 ">
      {hotelsVillas.hotels.map((hotel) => {
        return (
          <div className="row d-flex justify-content-center">

            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
              <div class="row g-0">
                <div class="col-md-4 pt-3">
                  <img src={hotel.thumbnailUrl} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title m-0 p-0">{hotel.title}</h5>
                    <p class="card-text"><small class="text-muted">{hotel.location}</small></p>
                    <p class="card-text">{hotel.content}</p>
                    <div className="card-text">
                      <ul className="col-fluid">
                        <div className="facilities row">
                          {hotel.facilities.map((facility) => {
                            return (<li className="facilities col-6 col-md-4 d-flex justify-content-center" id="facilities" style={{ fontSize: "12px" }}>{facility}</li>)
                          })}
                        </div>
                      </ul>
                      <div class="d-flex mb-3">
                        <div class="me-auto p-2"><h4> P {hotel.price}</h4></div>

                        <div class="p-2"><button className="btn btn-warning mb-1"> BOOK NOW</button></div>
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


  );
}

export default Resorts;