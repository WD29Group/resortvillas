import Subscribe from './Subscribe';
import React, { useEffect, useState } from 'react';

function Footer(props) {
  const [bgColor, setBgColor] = useState(props.setBGcolor);
  const [backdropFilter, bckDropFilter] = useState('blur(3px)');
  const [bgHeight, setbgHeight] = React.useState('25px');
  const [xOpacity, opac] = useState('0.7');
  const [borderRadius, getBorderRadius] = useState('80px 80px 0 0');
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
        setbgHeight('110px')
        opac("0.95");
      }else{
        setbgHeight('25px')}
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMouseEnter() {
    setbgHeight(window.scrollY > props.scrollAmount ? '110px' : '25px');
    opac("1");
    getBorderRadius('80px 80px 0 0');
  }

  function handleMouseLeave() {
    setbgHeight('25px');
    opac("0.7");
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
    <>
      <Subscribe />
      <footer
            style={footerStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
      >
        <small>you can contact us here</small><br />
        <div className='row'>
          <div className="col">
          </div>
          <div className="col-9">
            <a className="fa-brands fa-facebook footerIcons iconTilt" href="http://www.facebook.com/112254835081759"> </a>
            <a className="fa-brands fa-twitter footerIcons iconTilt" href="https://twitter.com/ResortVillas"> </a>
            <a className="fa-brands fa-telegram footerIcons iconTilt" href="http://www.fb.com/"> </a>
            <a className="fa-brands fa-instagram footerIcons iconTilt" href="https://www.instagram.com/explore/tags/resortvilla/"> </a>
            <a className="fa-brands fa-github footerIcons iconTilt" href="https://github.com/WD29Group/g6repository"> </a>
            <a className="fa-brands fa-discord footerIcons iconTilt" href="https://discord.com/channels/1060360858364018790/1060360859483918389"> </a>
            <a className="fa-brands fa-whatsapp footerIcons iconTilt" href="https://wa.me/qr/SRQ7H3R5UZYSI1"> </a>
            <p className="material-symbols-outlined footerIcons iconTilt mailist" data-bs-toggle="modal" data-bs-target="#subscribe">mail</p>
            <p className='footerTxt'>&nbsp;Copyright ©️ 2022-2023 WD29 Group-VI Project-II&nbsp; </p>
          </div>
          <div className="col">
          </div>
        </div>
        
        </footer>
    </>  
    );
}
export default Footer;

