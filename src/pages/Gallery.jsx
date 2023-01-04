import Footer from "../ReUse/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Gallery() {
  const images = [
    "https://picsum.photos/2000/3000",
    //...
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/2500/3000",

  ]
  return (
    <>
      <div id="Gbod">
        <div className="container Galbod">
          <div className="text-center text-white h1 pb-5">El Nido, Palawan</div>
          <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt="..."
              />
            ))}
          </Masonry>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Gallery;
