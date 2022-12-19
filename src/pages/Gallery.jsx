import beach from "../vid/beach.mp4";
function Gallery() {
  return (
    <>
      <video
        className="landingpg"
        src={beach}
        type="video/mp4"
        muted
        loop
        autoPlay
      />
      <div className="bkg3">
    </div>
    </>
  );
}
export default Gallery;
