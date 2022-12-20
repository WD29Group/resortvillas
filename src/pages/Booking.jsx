// import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

function Booking() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-152526367-54');
  }, []);

  return (
    <><div className="bkg3"> 

    </div> 
    </>
    
  );
}

export default Booking;
