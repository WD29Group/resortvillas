import MapLoc from "../ReUse/MapLoc";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Resorts() {
  return (
    <>
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <div class="bkg2"></div>
      <div class="bkg3">
        <MapLoc id="#map" />
      </div>
      <Footer scrollAmount="50" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}

export default Resorts;