import React, { useState } from "react";
import Footer from "../ReUse/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as imgs from "../img/gallery";

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
    imgs.img1,
    imgs.img2,
    imgs.img3,
    imgs.img4,
    imgs.img5,
    imgs.img6,
    imgs.img7,
    imgs.img8,
    imgs.img9,
    imgs.img10,
    imgs.img11,
    imgs.img12,
    imgs.img13,
    imgs.img14,
    imgs.img15,
    imgs.img16,
    imgs.img17,
    imgs.img18,
    imgs.img19,
    imgs.img20,
    imgs.img21,
    imgs.img22,
    imgs.img23,
    imgs.img24,
    imgs.img25,
    imgs.img26,
    imgs.img27,
    imgs.img28,
    imgs.img29,
    imgs.img30,
    imgs.img31,
    imgs.img32,
    imgs.img33,
    imgs.img34,
    imgs.img35,
    imgs.img36,
    imgs.img37,
    imgs.img38,
    imgs.img39,
    imgs.img40,
    imgs.img41,
    imgs.img42,
    imgs.img43,
    imgs.img44,
    imgs.img45,
    imgs.img46,
    imgs.img47,
    imgs.img48,
    imgs.img49,
    imgs.img50,


    // "https://picsum.photos/3000/3000",
    // "https://picsum.photos/2000/3500",
    // "https://picsum.photos/2500/3000",
    // "https://picsum.photos/2000/3000",
    // "https://picsum.photos/2000/3500",
    // "https://picsum.photos/2000/3500",
    // "https://picsum.photos/2500/3000",
    // "https://picsum.photos/2500/3000",
  ];

  return (
    <>
    {data.img &&
    <div  style={{
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
       <button onClick={() => imgAction('')}style={{position: 'absolute',top: '10px',right: '10px'}} className="p-1">x</button>
       <button onClick={() => imgAction('previous-img')} className="me-3">Previous</button>
       <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} alt=""/>
       <button onClick={() => imgAction('next-img')} className="ms-3">Next</button>
    </div>
    
    }


      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
      <div id="Gbod">
        <div className="container Galbod">
          <div className="text-center text-black h1 pb-5">El Nido, Palawan</div>
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
    </>
  );
}
export default Gallery;
