import React, { useEffect, useState } from 'react';

function Footer() {
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.0)');
  const [backdropFilter, bckDropFilter] = useState('blur(0px)');
  const [bgHeight, setbgHeight] = React.useState('50px');
  const [DisplayBtn, DisplayUpBtn] = useState('0.7');

  function handleMouseEnter() {
    setbgHeight('120px');
    DisplayUpBtn("1");
  }

  function handleMouseLeave() {
    setbgHeight('50px');
    DisplayUpBtn("0.7");
  }

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 700) {
        setBgColor('rgba(0, 0, 0, 0.5)');
        bckDropFilter('blur(12px)');

      } else {
        setBgColor('rgba(0, 0, 0, 0)');
        bckDropFilter('blur(0px)');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
    return (
        <footer
            style={
                {
                    backgroundColor: bgColor,
                    height: bgHeight,
                    opacity: DisplayBtn,
                    color: "white",
                    width: "99.5%",
                    position: "fixed",
                    bottom: 0,
                    zIndex: 1,
                    backdropFilter: backdropFilter,
                    transitionDuration: "1.5s",
                    textAlign: "center",
                    alignSelf: "center",
                    left: "50%",
                    borderRadius: "20px 20px 0 0",
                    transform: "translate(-50%, 0)",
                }
            }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
      >
            <small>Copyright (c) 2022 WD29 Group-IV</small>
        </footer>
    );
}
export default Footer;

