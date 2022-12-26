import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Booking() {
  return (
    <>
      <div className="bkg3"></div>;
      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
      <Footer scrollAmount="800" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  ); 
}

export default Booking;
