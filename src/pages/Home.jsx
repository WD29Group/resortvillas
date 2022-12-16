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
      <div className="bkg3"></div>
    </>
      
  );
}
export default Home;
