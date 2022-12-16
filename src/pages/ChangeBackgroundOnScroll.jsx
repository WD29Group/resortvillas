import React, { useEffect, useState } from 'react';

function ChangeBackgroundOnScroll() {
  const [bgColor, setBgColor, transitioDuration, backdropFilter] = useState('white');

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;

      if (scroll > 600) {
        setBgColor('black');
        transitioDuration('0.2s');
        backdropFilter('blur('+ {scroll} +'px)');

      } else {
        setBgColor('');
        transitioDuration('0.1s');
        backdropFilter('blur('+ {scroll} +'px)');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div style={{ backgroundColor: bgColor, height: "80px", width: "110%", position: "fixed", top: 0, zIndex: 1, backdropFilter: 'blur(0px)',transitioDuration:('1s') }}>
  </div>;
}
export default ChangeBackgroundOnScroll;