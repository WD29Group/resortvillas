import ContentsServicesCards from "../contents/ContentsServicesCards";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Services() {
  return (
    <>
      <ContentsServicesCards />
      <div className="bkg4"></div>
      <div className="bkg5"></div>
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}

export default Services;
