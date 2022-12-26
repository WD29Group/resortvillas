import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Weather() {
  return (
    <>
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <div className="bkg1"></div>
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}
export default Weather;
