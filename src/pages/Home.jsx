import Parallax from "./Parallax.jsx"
import elnido from "../vid/elnido.webm"


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
      <div className="pararelax"></div>  
      <Parallax />
      
      <div className="bkg2"></div>
      <div className="bkg1"></div>
    </>
  );
}
export default Home;
