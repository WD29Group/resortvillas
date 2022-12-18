// import React from 'react';
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {

  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.0)');
  const [backdropFilter, bckDropFilter] = useState('blur(0px)');
  const [DisplayBtn, DisplayUpBtn] = useState('0');

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 800) {
        setBgColor('rgba(0, 0, 0, 0.5)');
        bckDropFilter('blur(12px)');
        DisplayUpBtn("1");

      } else {
        setBgColor('rgba(0, 0, 0, 0)');
        bckDropFilter('blur(0px)');
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
        <button
            style={
                {
                  opacity: DisplayBtn,
                  backgroundColor: bgColor,
                  borderRadius: "100px",
                  appearance: "button",
                  color: "rgba(255, 255, 0, 0.75)",
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "none",
                  height: "75px",
                  width: "75px",
                  position: "fixed",
                  zIndex: "3",
                  bottom: "75px",
                  right: "50px",
                  fontSize: "3em",
                  backdropFilter: backdropFilter,
                  transitionDuration: "0.7s"
                }
            }
        onClick={handleClick}>
        ⇮
        </button>
    );
}
export default ScrollToTopButton;