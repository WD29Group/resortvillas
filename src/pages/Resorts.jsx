import React, { useState, useEffect } from 'react';
import hotelsVillas from "../json/hotelsVillas.json"
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Resorts() {
  const RestyleCards = {
    position: "relative",
    zIndex: "1",
    padding:"70px 0 0 0",
  }
//ADDING PROMO DURATION
 const [timeLeft, setTimeLeft] = useState(GetPromoTime());

  function GetPromoTime() {
    const now = new Date();
    const targetDate = new Date(2023, 0, 30);
    const timeLeft = targetDate.getTime() - now.getTime();
    return timeLeft;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(GetPromoTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const promoEnabled = (!(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0));
  let discount = 0.15;
//ADDING PROMO DURATION  
  
  let discounted = (1 - (1 * discount));
  if ((promoEnabled) ? discounted : discounted = 1);

  const openMap = (arg) => {
    document.getElementById(arg).style.display = 'block';
  };
  const closeMap = (arg) => {
    document.getElementById(arg).style.display =  "none";
  };
  return (
    <>
      <div className="landingpg2"></div>
      <div style={RestyleCards}>
        <div className="resort-card m-5 ">
          {hotelsVillas.hotels.map((hotel) => {
            const hotelThumbnailUrl = `${hotel.thumbnailUrl}`;
            const hotelTitle = `${hotel.title}`;
            const hotelLocation = `${hotel.location}`;
            const hotelContent = `${hotel.content}`;
            const hotelMapId = `${hotel.mapId}`;
            const hotelIframe = `${hotel.iframe}`;
            
            return (
              <div className="row  d-flex justify-content-center">
                <div className="card mb-5 pb-3 WhitefrostedGlass Whitetransp" style={{ maxWidth: "540px;" }}>
                  <div className="row g-0 mt-3 WhitefrostedGlass Whitetransp">
                    <div className="col-md-4 p-2">
                      <img src={hotelThumbnailUrl} className="img-fluid rounded" alt={hotelThumbnailUrl} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title m-0 p-0">{hotelTitle}</h5>
                          <small className="hotelLocation" onClick={() => openMap(`${hotelMapId}`)}>
                            {hotelLocation}
                          </small>
                        <p className="card-text">{hotelContent}</p>
                        <div className="card-text">
                          <ul className="col-fluid">
                            <div className="facilities row">
                              {hotel.facilities.map((facility) => {
                                return (
                                  <li className=" facilities col-6 col-md-4 d-flex justify-content-left" id="facilities">
                                    {facility}
                                  </li>)
                              })}
                            </div>
                          </ul>
                          <div className="d-flex mb-0">
                            <div className="me-auto p-0"><h4 className={(promoEnabled) ? 'newPrice' : 'price'}>  ₱ {(hotel.price * discounted).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h4><h3 className={(promoEnabled) ? 'oldPrice' : 'unshow'}> ₱ {(hotel.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3></div>
                            <form action="/books.html" method="GET">
                              <input type="hidden" name="mapid" value={hotelMapId} />
                              <input type="hidden" name="hotel" value={hotelTitle} />
                              <input type="hidden" name="discounted" value={promoEnabled} />
                              <input type="hidden" name="price" value={hotel.price} />
                              <div className="p-2">
                                <button className="btn btn-warning mb-1" type="submit" value="Submit">BOOK NOW</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={hotelMapId} className="container pt-3" style={{ display: "none" }}>
                      <button className='mapButton' onClick={() => closeMap(`${hotelMapId}`)}>X</button>
                      <iframe 
                          className="iframeRV"
                          src={hotelIframe}
                          height="300"
                          width="1000"
                          title="gmap_canvas"
                      ></iframe>
                    </div>    
                  </div>
                </div>
              </div>
            );
          })};
        </div >    
      </div>
      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}
export default Resorts;


                          // <input for="username" type="text" id="username" name="username" />
                          // <input for="password" type="password" id="password" name="password" />
                          // <input for="firstname" type="text" id="firstname" name="firstname" />
                          // <input for="lastname" type="text" id="lastname" name="lastname" />
                          // <input for="country" type="text" id="country" name="country" />
