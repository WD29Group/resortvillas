import React, { useEffect, useState } from 'react';

function Footer(props) {
  const [bgColor, setBgColor] = useState(props.setBGcolor);
  const [backdropFilter, bckDropFilter] = useState('blur(3px)');
  const [bgHeight, setbgHeight] = React.useState('25px');
  const [xOpacity, DisplayUpBtn] = useState('0.7');
  const [borderRadius, getBorderRadius] = useState('120px 120px 0 0');
  const footerStyle = {
                      backgroundColor: bgColor,
                      height: bgHeight,
                      opacity: xOpacity,
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
                      borderRadius: borderRadius,
                      transform: "translate(-50%, 0)",
  }
 
  
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
        setbgHeight('120px')
      }else{
        setbgHeight('25px')}
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMouseEnter() {
    setbgHeight(window.scrollY > props.scrollAmount ? '120px' : '25px');
    DisplayUpBtn("1");
    getBorderRadius('80px 80px 0 0');
  }

  function handleMouseLeave() {
    setbgHeight('25px');
    DisplayUpBtn("0.7");
    getBorderRadius('20px 20px 0 0');
  }

  useEffect(() => {
    function handleScroll() {

      if (window.scrollY > props.scrollAmount) {
        setBgColor("rgba(0, 0, 0, 0.5)");
        bckDropFilter("blur(12px)");
      } else {
        setBgColor("rgba(0, 0, 0, 0)");
        bckDropFilter("blur(3px)");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.scrollAmount, props.setBGcolor]);
    return (
        <footer
            style={footerStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
      >
        <small>Copyright (c) 2022-2023 WD29 Group-VI Project-2</small><br />
        <div>
          <a className="fa-brands fa-facebook footerIcons" href="http://www.facebook.com/112254835081759"> </a>
          <a className="fa-brands fa-twitter footerIcons" href="https://twitter.com/ResortVillas"> </a>
          <a className="fa-brands fa-telegram footerIcons" href="http://www.fb.com/"> </a>
          <a className="fa-brands fa-instagram footerIcons" href="https://www.instagram.com/explore/tags/resortvilla/"> </a>
          <a className="fa-brands fa-github footerIcons" href="https://github.com/WD29Group/g6repository"> </a>
          <a className="fa-brands fa-discord footerIcons" href="https://discord.com/channels/1060360858364018790/1060360859483918389"> </a>
          <a className="fa-brands fa-whatsapp footerIcons" href="https://wa.me/qr/SRQ7H3R5UZYSI1"> </a>
        </div>
        <h5>contact us</h5>
        </footer>
    );
}
export default Footer;

