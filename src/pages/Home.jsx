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
      <Parallax />
    </>
  );
}
export default Home;
