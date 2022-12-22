// import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
export default function bkg3(){
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <P>Reward yourself and be our, guest for the day. Experience the captivating beauty of our infinity pool and get to enjoy our facilities including watersports rides while at the beach</P>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Booking;
