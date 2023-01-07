import React, { useState, useEffect } from 'react';
import hotelsVillas from "../json/hotelsVillas.json"
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Resorts() {
  // useEffect(() => {
  //   console.log(hotelsVillas)
  // });
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
  const promoEnabled = (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0);
  let discount = 0.9;
//ADDING PROMO DURATION  
  
  if((!promoEnabled) ? discount : discount = 1)
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
                            <div class="me-auto p-2"><h4 className='price'>  ₱ {(hotel.price * discount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h4><h3 className={(!promoEnabled) ? 'oldPrice' : 'unshow'}> ₱ {(hotel.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3></div>
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
      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}
export default Resorts;