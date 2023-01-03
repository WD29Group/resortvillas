import ContentsServicesCards from "../contents/ContentsServicesCards";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Services() {
  return (
    <>
      <ContentsServicesCards />
      <div className="bkg4"></div>
      <div className="bkg5"></div>
      <Footer scrollAmount="50" setBGcolor="rgba(0, 0, 0, 0.50)" />
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
    </>
  );
}

export default Services;
