import elnido from "../vid/elnido.webm"
import beachresort from "../img/beachresort.jpeg"

function Home() {
  return (
    <>
      <video
        className="landingpg"
        src={elnido}
        type="video/mp4"
        muted
        loop
        autoPlay
      />
      <div className="resortDescrip">
        <div className="row">
          <div className="col-md-4 ps-5 pt-5 ms-5 pb-5 mb-5 text-center">
            <span className="fw-bold h2 ps-5">El Nido's Finest Resort</span>
            <hr className="ms-5"></hr>
            <img className="border border-5 border-light mt-3" src={beachresort} height="350"></img>
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
      <div className="bkg2"></div>
      <div className="bkg1"></div>
    </>
  );
}
export default Home;
