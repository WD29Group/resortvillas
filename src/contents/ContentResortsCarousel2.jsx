import Carousel from "../ReUse/Carousel";
import CarouselImg1 from "../carouseldata/1.jpg";
import CarouselImg2 from "../carouseldata/2.jpg";
import CarouselImg3 from "../carouseldata/3.jpg";
function ContentResortsCarousel2() {
  return (
    <>
      <Carousel
        CarouselID="ResorCarousel"
        Title1="El Nido Garden Resort"
        SlideImg1={CarouselImg1}
        Body1="
                Situated am the lagoons of El Nido, the tropical landscape
                captures a breathtaking view of the island. El Nido Garden
                Resort boasts its scenic atmosphere combined with contemporary"
        Link1={
          <a className="carouselfonts" href="Resorts">
            . . . See more
          </a>
        }
        Title2="El Nido Beach Hotel"
        SlideImg2={CarouselImg2}
        Body2="
                Situated in El Nido Town Proper on a beachfront location, El
                Nido Beach Hotel gives its guests easy access to the majestic
                Bacuit Bay and the surrounding pristine islands. Guests will
                enjoy the stunning"
        Link2={
          <a className="carouselfonts" href="Resorts">
            . . . See more
          </a>
        }
        Title3="Frendz Hostel El Nido"
        SlideImg3={CarouselImg3}
        Body3="
                Frendz Resort & Hostels has been famous for creating amazing
                backbacker experiences over the years. We have been voted 2018
                as the best hostel in the philippines by Hostelworld based on
                real"
        Link3={
          <a className="carouselfonts" href="Resorts">
            . . . See more
          </a>
        }
      />
    </>
  );
}

export default ContentResortsCarousel2;
