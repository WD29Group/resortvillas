import ContentResortsCarousel from "../contents/ContentResortsCarousel";
import Parallax from "../ReUse/Parallax.jsx";
function ContentsHomeParallax() {
  return (
    <Parallax
      Title1="El Nido's Finest Resort"
      Body1='<p>  
                Nestled within a secluded forest and overlooking the crystal-clear waters of Bacuit Bay,
                Paraiso is a luxurious retreat that offers an unparalleled escape into the natural beauty of El Nido.
                The villas, which are inspired by traditional Filipino architecture and feature floor-to-ceiling windows
                that provide stunning views of the bay or forest, provide a peaceful and serene setting for guests to wake
                up to every morning. At Paraiso, guests can enjoy meals made with ingredients freshly sourced from the local
                farming and fishing community, a concept known as "farm-to-table." The resort also offers a carefully curated
                selection of drinks to complement every meal. In addition, the property is home to a variety of hidden gems
                and secret spots for guests to discover and explore during their stay. From the moment they arrive, guests
                at Paraiso are enveloped in an oasis of tranquility and rejuvenation.
            </p>'
      Carousel1=""
      Title2="El Nido Beach Hotels"
      Body2="<p> 
                There are many hotels in El Nido that offer a variety of amenities and activities for travelers, such as swimming, 
                snorkeling, diving, and island-hopping tours. Many of the hotels in El Nido are located on or near the beach, 
                and offer comfortable accommodations, delicious meals, and a range of facilities and services to make your stay 
                enjoyable and relaxing. Some of the hotels in El Nido also offer beachfront cottages, bungalows, and villas, 
                providing a more private and intimate setting for travelers.
            </p>"
      Carousel2={<ContentResortsCarousel />}
      Title3="Visit new places you've never been before"
      Body3="<p> 
                El Nido is a popular tourist destination in the Palawan
                province of the Philippines, known for its beautiful beaches, clear
                waters, and stunning rock formations. There are many resorts in El
                Nido that offer a variety of amenities and activities for travelers,
                such as swimming, snorkeling, diving, and island-hopping tours. Many
                of the resorts in El Nido are located on or near the beach, and
                offer comfortable accommodations, delicious meals, and a range of
                facilities and services to make your stay enjoyable and relaxing.
            </p>"
      Carousel3=""
    />
  );
}
export default ContentsHomeParallax;
