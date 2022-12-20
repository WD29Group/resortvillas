import elnido from "../vid/elnido.webm"


function Elnidovid1() {
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
    </>
  );
}
export default Elnidovid1;
