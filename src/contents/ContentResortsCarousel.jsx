import Carousel from "../ReUse/Carousel";
function ContentResortsCarousel() {
    return (
        <>
            <Carousel
                Title1="El Nido Garden Resort"
                Body1="
                Situated am the lagoons of El Nido, the tropical landscape
                captures a breathtaking view of the island. El Nido Garden
                Resort boasts its scenic atmosphere combined with contemporary"
                Link1={<a className="carouselfonts" href="Resorts">. . . See more</a>}

                Title2="El Nido Beach Hotel"
                Body2="
                Situated in El Nido Town Proper on a beachfront location, El
                Nido Beach Hotel gives its guests easy access to the majestic
                Bacuit Bay and the surrounding pristine islands. Guests will
                enjoy the stunning"
                Link2={<a className="carouselfonts" href="Resorts">. . . See more</a>}
                
                Title3="Frendz Hostel El Nido"
                Body3="
                Frendz Resort & Hostels has been famous for creating amazing
                backbacker experiences over the years. We have been voted 2018
                as the best hostel in the philippines by Hostelworld based on
                real"
                Link3={<a className="carouselfonts" href="Resorts">. . . See more</a>}
            />
        </>
    )
}

export default ContentResortsCarousel;
