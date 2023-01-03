// import React from 'react';
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {

  const [DisplayBtn, DisplayUpBtn] = useState('0');

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 800) {
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
                  background: "rgba(255, 180, 75, 0.6)",
                  color: "rgba(0, 0, 0, 0.8)",
                  border: "none",
                  height: "60px",
                  width: "60px",
                  position: "fixed",
                  zIndex: "3",
                  bottom: "25px",
                  right: "90px",
                  fontSize: "3em",
                  transitionDuration: "0.7s"
                }
            }
        onClick={handleClick}>
        ⇮
        </button>
    );
}
export default ScrollToTopButton;