// import React from 'react';
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {

  const [DisplayBtn, DisplayUpBtn] = useState('0');

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 1500) {
        DisplayUpBtn("1");

      } else {
        DisplayUpBtn("0");
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleClick = () => {
      window.scrollTo(0, 0);
  };

    return (
        <button id='Button2Top'
            style={
                {
                  opacity: DisplayBtn,
                  borderRadius: "100px",
                  appearance: "button",
                  background: "rgba(255, 222, 89, 0.75)",
                  color: "rgba(0, 0, 0, 0.8)",
                  border: "none",
                  height: "50px",
                  width: "25px",
                  position: "fixed",
                  lineHeight: "8px",
                  zIndex: "3",
                  bottom: "125px",
                  right: "5px",
                  fontSize: "2.5em",
                  fontWeight: "999",
                  transitionDuration: "0.7s"
                }
            }
        onClick={handleClick}>
        ⇮
        </button>
    );
}
export default ScrollToTopButton;