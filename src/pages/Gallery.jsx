import Footer from "../ReUse/Footer";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import * as imgs from "../img/gallery";

function Gallery() {
  const images = [
    "https://picsum.photos/2000/2500",
    //...
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2000/3500",
    "https://picsum.photos/2500/3000",
    "https://picsum.photos/2500/3000",
  ];

  return (
    <ResponsiveMasonry>
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
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
      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
    </ResponsiveMasonry>
  );
}

export default Gallery;


// import Elnidovid2 from "../ReUse/Elnidovid2";
// import ContentsGalleryCards from "../contents/ContentsGalleryCards";
// import ChangeTopBG from "../ReUse/ChangeTopBG";
// import Footer from "../ReUse/Footer";

// function Gallery() {
//   return (
//     <>
//       <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
//       <ContentsGalleryCards />
//       <Elnidovid2 />
//       <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
//     </>
//   );
// }
// export default Gallery;
