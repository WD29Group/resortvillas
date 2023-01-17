import React, { useState } from "react";
import Footer from "../ReUse/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as imgs from "../img/gallery";
import ChangeTopBG from "../ReUse/ChangeTopBG";

function Gallery() {
  const [data, setData] = useState({img: '',i: 0})
  const [style] = useState({});

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.03)";
    e.target.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "";
  };
  const viewImage = (img, i) =>{
    setData({img, i})
  }
  
  const imgAction = (action) =>{
    let i = data.i;
    if(action === 'next-img'){
      setData({img: images[i+1], i:i + 1})
    }
    if(action === 'previous-img'){
      setData({img: images[i-1], i:i - 1})
    }
    if(!action){
      setData({img:'', i:0})
    }
  }

  const images = [
    
  ];

  for (let i = 1; i <= 50; i++) {
    const image = imgs[`img${i}`];
    images.push(image);
  }

  return (
    <>
    {data.img &&
    <div style={{
      width: '100%',
      height: '100vh',
      background: 'black',
      position: 'fixed',
      display: 'flex',  
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      zIndex: 100,
    }}>
       <button onClick={() => imgAction('')} className="btn btn-secondary position-absolute" style={{top: '10px', right: '10px'}}>x</button>
         <button onClick={() => imgAction('previous-img')} className="btn btn-secondary position-absolute ms-5" style={{left: 0}}>Prev</button>
         <img src={data.img} className="img-fluid" style={{width: '80%', height: '80vh',}} alt=""/>
         <button onClick={() => imgAction('next-img')} className="btn btn-secondary position-absolute me-5" style={{right: 0}}>Next</button>
    </div>
    }


      <div id="Gbod">
        <div className="container Galbod">
          <div className="text-center text-black h1 pb-4">El Nido, Palawan
          <div className="container pt-3"> <hr/></div>
          </div>
          
          <ResponsiveMasonry>
          <Masonry columnsCount={3} gutter="20px">
            {images.map((image, i) => (
              <img
              src={image}
              style={{ width: "100%", display: "block", cursor: "pointer", ...style }}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => viewImage(image, i)}
            />
            ))}
            </Masonry>
            </ResponsiveMasonry>
        </div>
      </div>
            <div className="bkg5"></div>
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
    </>
  );
}
export default Gallery;
