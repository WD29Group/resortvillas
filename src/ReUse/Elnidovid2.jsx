import elnido2 from "../vid/beach.mp4"


function Elnidovid2() {
  return (
    <>
      <video
        style={{
          position: "fixed",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
        src={elnido2}
        type="video/mp4"
        muted
        loop
        autoPlay
      />
    </>
  );
}
export default Elnidovid2;
