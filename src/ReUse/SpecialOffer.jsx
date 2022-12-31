import React, { useState, useEffect } from 'react';

function SpecialOffer(props) {
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
  const spCloseBtn = {
    background: "transparent",
    border: "none",
    color: "yellow",
    textShadow: "1px 1px 2px black",
    position: "absolute",
    top: "3px",
    right: "12px",
  }

    
  const specialPromo = () => {
    document.getElementById("specialPromo").style.display = "none"
  }

  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking(!shaking);
    }, 3000);

    return () => clearInterval(interval);
  }, [shaking]);
  
  return (
    <>
      <div style={{
        opacity: window.scrollY > props.scrollAmount ? '1' : '0',
      }}>
        <div id="specialPromo"
          style={{
          bottom: Math.round(window.scrollY / 10),
          transitionDuration: "3s",
          animation: `${shaking ? "shake" : "none"} 0.82s cubic-bezier(.36,.07,.19,.97) both`
      }}
          className={
          days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ? "unshow" : "show SpecialPromoStyling"}
      >
      <button style={spCloseBtn} onClick={specialPromo}>X</button>
      <div style={{background:"rgba(255, 0, 0, 0.75)", margin: "-7px -7px -5px -7px", padding: "7px", borderRadius:" 20px 20px 0 0"}}><strong className='h5'>Holiday Special Promo</strong></div><hr/>
        <p> Ends on <br /><i>January 30, 2023</i> remaining time offer: <br />
          <div style={{
            background: "rgba(0,0,0, 0.77)",
            color: "yellow",
            width: "136px",
            borderRadius: "5px"
          }}>
          <i>
              {days} {days > 1 ? "days" : "day"} <hr style={{ margin: "0" }} /> {hours > 1 ? hours + "hr" : ""} : {minutes}m : {seconds}s
          </i>
          </div>
          
        </p>
      <button className='SPbuttonFrosted Cardtransp' type="submit" onClick={specialPromo}><strong>Avail Now!</strong></button>
    </div>
      </div>
    </>
  );
}

export default SpecialOffer;
