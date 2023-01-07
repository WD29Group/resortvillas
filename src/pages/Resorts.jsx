import { useEffect } from "react";
import hotelsVillas from "../json/hotelsVillas.json"

function Resorts() {
  useEffect(() => {
    console.log(hotelsVillas)
  });
  const RestyleCards = {
    position: "relative",
    zIndex: "5",
    padding:"70px 0 0 0",
    }
  return (
  
    <>
      <div className="landingpg2"></div>
      <div style={RestyleCards}>

      <div className="resort-card m-5">
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
                            <div class="me-auto p-2"><h4> ₱ {hotel.price}</h4></div>

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
      </div>
    </>

  );
}

export default Resorts;

// import MapLoc from "../ReUse/MapLoc";
// import ChangeTopBG from "../ReUse/ChangeTopBG";
// import Footer from "../ReUse/Footer";
// function Resorts() {
//   return (
//     <>
//       <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
//       <div class="bkg2"></div>
//       <div class="bkg3">
//         <MapLoc id="#map" />
//       </div>
//       <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
//     </>
//   );
// }

// export default Resorts;