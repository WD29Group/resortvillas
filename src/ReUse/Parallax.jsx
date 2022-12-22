import Carousel from "./Carousel";
import "../css/Parallax.css";
function Parallax() {
  return (
    <>
        <div class="bgimg-1">
          <div class="caption">
            <span class="borders">Resort Villas</span>
          </div>
        </div>

        <div className="style1">
          <h3 style={{textAlign: "center"}}>El Nido's Finest Resort</h3>
          <p>     Nestled within a secluded forest and overlooking the crystal-clear waters of Bacuit Bay,
                Paraiso is a luxurious retreat that offers an unparalleled escape into the natural beauty of El Nido.
                The villas, which are inspired by traditional Filipino architecture and feature floor-to-ceiling windows
                that provide stunning views of the bay or forest, provide a peaceful and serene setting for guests to wake
                up to every morning. At Paraiso, guests can enjoy meals made with ingredients freshly sourced from the local
                farming and fishing community, a concept known as "farm-to-table." The resort also offers a carefully curated
                selection of drinks to complement every meal. In addition, the property is home to a variety of hidden gems
                and secret spots for guests to discover and explore during their stay. From the moment they arrive, guests
                at Paraiso are enveloped in an oasis of tranquility and rejuvenation.</p>
       
        </div>
        <div class="bgimg-2">
          <div class="caption">
          <span class="borders" style={{backgroundColor: "transparent", fontSize: "35px", color: "#f7f7f7", textShadow: "2px 2px 2px rgba(0, 0, 0, 0.75)"}}>El Nido Beach Hotels</span>
          </div>
        </div>

      <div style={{position: "relative"}}>
          <div className="style2">
          <p>There are many hotels in El Nido that offer a variety of amenities and activities for travelers, such as swimming, snorkeling, diving, and island-hopping tours. Many of the hotels in El Nido are located on or near the beach, and offer comfortable accommodations, delicious meals, and a range of facilities and services to make your stay enjoyable and relaxing. Some of the hotels in El Nido also offer beachfront cottages, bungalows, and villas, providing a more private and intimate setting for travelers.</p>
          <Carousel
            Title1="El Nido Garden Resort"
            Body1="
            Situated among the lagoons of El Nido, the tropical landscape
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
        </div>
        </div>

        <div class="bgimg-3">
          <div class="caption">
          <span class="borders" style={{backgroundColor: "transparent", fontSize: "35px", color: "#f7f7f7", textShadow: "2px 2px 2px rgba(0, 0, 0, 0.75)"}}>Visit new places you've never been before</span>
          </div>
        </div>

        <div style={{position: "relative"}}>
          <div className="style3">
          <p>El Nido is a popular tourist destination in the Palawan province of the Philippines, known for its beautiful beaches, clear waters, and stunning rock formations. There are many resorts in El Nido that offer a variety of amenities and activities for travelers, such as swimming, snorkeling, diving, and island-hopping tours. Many of the resorts in El Nido are located on or near the beach, and offer comfortable accommodations, delicious meals, and a range of facilities and services to make your stay enjoyable and relaxing.</p>
          </div>
        </div>

        <div class="bgimg-1">
          <div class="caption">
          <span class="borders">Resort Villas <br/>at your service</span>
          </div>
        </div>
    </>
  );
}

export default Parallax;