import React, { useState, useEffect } from 'react';

function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilJanuary302023());

  function getTimeUntilJanuary302023() {
    const now = new Date();
    const targetDate = new Date(2023, 0, 30);
    const timeLeft = targetDate.getTime() - now.getTime();
    return timeLeft;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeUntilJanuary302023());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const SpecialPromoStyling = {
      background: "rgba(255, 255, 255, 0.25)",
      color: "white",
      position: "fixed",
      bottom: "100px",
      right: "15px",
      zIndex: "7",
      width: "150px",
      height: "255px",
      textAlign: "center",
      borderRadius: "20px",
      padding: "7px",
      textShadow: "1px 1px 2px rgb(0, 0, 0)",
      boxShadow: "1px 1px 3px rgb(0, 0, 0)",
      backdropFilter: 'blur(3px)',
    
  }
  return (
    <>
    <div></div>
        <div style={SpecialPromoStyling} className={days > 0 ? "show" : "unshow"}>
        <div style={{background:"rgba(255, 0, 0, 0.75)", margin: "-7px -7px -5px -7px", padding: "7px", borderRadius:" 20px 20px 0 0"}}><strong className='h5'>Holiday Special Promo</strong></div><hr/>
      <p> Ends on <br/><i>January 30, 2023</i> remaining time offer: <br/> {days} {days > 1 ? "days" : "day"} <br/> {hours}:{minutes}:{seconds}</p>
      <button className='SPbuttonFrosted Cardtransp' type="submit" onClick="http://www.google.com"><strong>Avail Now!</strong></button>
    </div>
    </>
  );
}

export default SpecialOffer;
