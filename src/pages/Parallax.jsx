import React, { useRef, useEffect } from 'react';
import beachresort from "../img/beachresort.jpeg"
const Parallax = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = -(window.scrollY / parallaxRef.current.dataset.speed);
      const coords = `center ${yPos}px`;
      parallaxRef.current.style.backgroundPosition = coords;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax"
      // style={{ backgroundImage: `url(${imageUrl})` }}
      data-speed="3"
    >
      {
     
 
      <div className="resortDescrip">
            <div className="row">
              <div className="col-md-4 ps-5 pt-5 ms-5 pb-5 mb-5 text-center">
                <span className="fw-bold h2 ps-5">El Nido's Finest Resort</span>
                <hr className="ms-5"></hr>
                <img className="border border-5 border-light mt-3" src={beachresort} alt="resort" height="350"></img>
              </div>
              <div className="col-md-6 ps-5 pt-5 ms-5 pb-5 mb-5 mt-5 justify-content-center" id="resortDescript">
                <br/>
                <br/>
                Nestled within a secluded forest and overlooking the crystal-clear waters of Bacuit Bay,
                Paraiso is a luxurious retreat that offers an unparalleled escape into the natural beauty of El Nido.
                The villas, which are inspired by traditional Filipino architecture and feature floor-to-ceiling windows
                that provide stunning views of the bay or forest, provide a peaceful and serene setting for guests to wake
                up to every morning. At Paraiso, guests can enjoy meals made with ingredients freshly sourced from the local
                farming and fishing community, a concept known as "farm-to-table." The resort also offers a carefully curated
                selection of drinks to complement every meal. In addition, the property is home to a variety of hidden gems
                and secret spots for guests to discover and explore during their stay. From the moment they arrive, guests
                at Paraiso are enveloped in an oasis of tranquility and rejuvenation.
              </div>
            </div>
          </div>     
      }
    </div>
  );
};

export default Parallax;
