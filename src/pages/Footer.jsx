import React, { useEffect, useState } from 'react';

function Footer() {
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.0)');
  const [backdropFilter, bckDropFilter] = useState('blur(0px)');

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 600) {
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
                    height: "50px",
                    width: "110%",
                    position: "fixed",
                    bottom: 0,
                    zIndex: 1,
                    backdropFilter: backdropFilter,
                    transitionDuration: "3s"
                }
            }>
        </footer>
    );
}
export default Footer;

