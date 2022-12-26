import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Services() {
  return (
    <>
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <div className="bkg4"></div>
      <div className="bkg5"></div>
      <Footer scrollAmount="50" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}

export default Services;
